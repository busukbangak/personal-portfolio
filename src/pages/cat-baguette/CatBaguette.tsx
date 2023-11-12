import previewImage from '@/assets/cat-baguette/preview.png'
import googlePlayBadgeImage from '@/assets/cat-baguette/google-play-badge.png'
import bannerImage from '@/assets/cat-baguette/banner.png'
import useWindowDimensions from '@/shared/hooks/useWindowDimensions';
import StyleSheet from '@/shared/types/stylesheet';

export default function CatBaguette() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 1024;

  return (
    <div className='container' style={{ ...styles.container, ...(isMobile && { flexDirection: 'column' }) }}>
      <img style={{ ...styles.image, ...(isMobile && { width: '75%' }) }} src={previewImage} alt='preview image' />
      <div style={{ ...styles.descriptionContainer, width: '75%' }}>
        <h1 style={{ ...styles.title, ...(isMobile && { fontSize: 60 }) }}>cat baguette</h1>
        <p style={{ ...styles.description, ...(isMobile && { fontSize: 36 }) }}>Embark on a purrfectly delightful adventure in Cat Baguette! Aim your baguette and skillfully throw it to feed the hungry cat. Hit your target, score points, and collect coins to unlock a variety of tasty treats in our fantastic food shop! Will you become the next ultimate cat feeder?</p>
        <div style={{ display: 'flex' }}>
          <img style={{ ...styles.googlePlayBadge, ...(isMobile && { width: 150 }) }} src={googlePlayBadgeImage} onClick={() => window.open('https://play.google.com/store/apps/details?id=org.awanali.catbaguette&pcampaignid=web_share', '_blank')} />
        </div>
      </div>
      <img style={styles.banner} src={bannerImage} />
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'gainsboro',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    overflow: 'auto'
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    objectFit: 'contain',
    width: '45%',
    margin: '3%'
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    margin: '2%'
  },
  title: {
    fontSize: '128px',
    fontFamily: 'm3x6',
    paddingLeft: 2,
    margin: 0,
    color: 'black'
  },
  description: {
    fontSize: '64px',
    fontFamily: 'm3x6',
    paddingLeft: 2,
    color: 'black'
  },
  googlePlayBadge: {
    margin: 0,
    padding: 0,
    width: 250,
    cursor: 'pointer'
  },
  banner: {
    position: 'absolute',
    height: '30%',
    right: 0,
    bottom: 0
  }
});
