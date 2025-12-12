import type { VercelRequest, VercelResponse } from '@vercel/node';

const CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { code, provider } = req.query;

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.status(500).json({ error: 'OAuth credentials not configured' });
  }

  // Step 1: Initial request - redirect to GitHub authorization
  if (!code && provider === 'github') {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=repo,user`;
    return res.redirect(authUrl);
  }

  // Step 2: Callback from GitHub - no code provided
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  try {
    // Step 3: Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (data.error) {
      return res.status(400).json({ error: data.error_description || data.error });
    }

    // Return token in the format Decap CMS expects
    const responseHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Authorization Success</title>
        </head>
        <body>
          <script>
            (function() {
              function receiveMessage(e) {
                console.log('receiveMessage', e);
                window.opener.postMessage(
                  'authorization:github:success:${JSON.stringify(data)}',
                  e.origin
                );
                window.removeEventListener('message', receiveMessage, false);
              }
              window.addEventListener('message', receiveMessage, false);
              console.log('Posting message to opener');
              window.opener.postMessage('authorizing:github', '*');
            })();
          </script>
        </body>
      </html>
    `;

    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(responseHTML);
  } catch (error) {
    console.error('OAuth error:', error);
    return res.status(500).json({ error: 'Failed to authenticate' });
  }
}
