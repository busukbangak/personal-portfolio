import previewImage from '@/assets/cat-baguette/preview.png'
import googlePlayBadgeImage from '@/assets/cat-baguette/google-play-badge.png'
import bannerImage from '@/assets/cat-baguette/banner.png'
import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';
import { Link } from 'react-router-dom';

export default function Home() {
  const { width } = useWindowDimensions();
  const isMobile = width <= 1024;

  return (
    <div className='container' style={styles.container}>
      <main style={{ ...styles.main, ...(isMobile && { flexDirection: 'column' }) }}>
        <img style={{ ...styles.image, ...(isMobile && { width: 'auto' }) }} src={previewImage} alt='preview image' />
        <div style={styles.descriptionContainer}>
          <h1 style={{ ...styles.title, ...(isMobile && { fontSize: 64 }) }}>cat baguette</h1>
          <p style={{ ...styles.description, ...(isMobile && { fontSize: 32 }) }}>Embark on a purrfectly delightful adventure in Cat Baguette! Aim your baguette and skillfully throw it to feed the hungry cat. Hit your target, score points, and collect coins to unlock a variety of tasty treats in our fantastic food shop! Will you become the next ultimate cat feeder?</p>
          <img style={{ ...styles.googlePlayBadge, ...(isMobile && { width: 150 }) }} src={googlePlayBadgeImage} onClick={() => window.open('https://play.google.com/store/apps/details?id=org.awanali.catbaguette&pcampaignid=web_share', '_blank')} />
        </div>
      </main>
      <footer style={styles.footer}>
        <Link to={'/catbaguette/imprint'} style={styles.footerText}>Imprint</Link>
        <Link to={'/catbaguette/privacy-policy'} style={styles.footerText}>Privacy Policy</Link>
      </footer>

      <img style={{ ...styles.banner, ...(isMobile && { width: 150 }) }} src={bannerImage} />
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'gainsboro',
    flexDirection: 'column',
    overflow: 'auto',
    padding: 32,
    justifyContent: 'space-between'
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'center'
  },
  footerText: {
    margin: '0 16px 0 16px',
    fontFamily: 'm3x6',
    fontSize: 32,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  image: {
    objectFit: 'contain',
    margin: 32,
    width: '40%'
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 16
  },
  title: {
    fontSize: '100px',
    fontFamily: 'm3x6',
    paddingLeft: 2,
    margin: 0,
    color: 'black'
  },
  description: {
    fontSize: '50px',
    fontFamily: 'm3x6',
    paddingLeft: 2,
    color: 'black',
    margin: '16px 0 16px 0'
  },
  googlePlayBadge: {
    margin: 0,
    padding: 0,
    width: 200,
    cursor: 'pointer'
  },
  banner: {
    position: 'absolute',
    width: 300,
    right: 0,
    bottom: 0
  }
});
