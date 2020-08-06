import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 270,
  },
  homeContainer: {
    flexGrow: 1,
    height: '100%',
  },
  homeImageBackground: {
    width: '100%',
    height: 270,
  },
  homeImageStyle: {
    borderBottomRightRadius: 65,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  userText: {
    fontSize: 16,
    color: 'white',
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
  searchIcon: {
    position: 'absolute',
    top: 25,
    right: 60,
    opacity: 0.6,
  },
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  bellIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  headingWrapper: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  actionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6200',
  },
  topTrendingListContainer: {
    paddingVertical: 20,
    paddingLeft: 16,
  },
  trendingImages: {
    width: 150,
    marginRight: 8,
    height: 250,
    borderRadius: 10,
  },
  imageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2,
  },
  imageLocationIcon: {
    position: 'absolute',
    marginTop: 40,
    left: 10,
    bottom: 10,
  },
  imageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
  recentContainer: {
    marginBottom: 60,
  },
  recentVisitedImage: {
    width: '92%',
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
  },
  recentVisitedMapPinWrapper: {
    position: 'absolute',
    bottom: 0,
    padding: 16,
  },
  imageLocationRecentIcon: {
    marginLeft: 10,
    position: 'relative',
    top: 4,
    marginHorizontal: 10,
  },
  imageTextRecent: {
    fontSize: 22,
    color: 'white',
    marginBottom: 10,
  },
  imageDescription: {
    fontSize: 14,
    color: 'white',
    marginBottom: 4,
    opacity: 1,
    marginLeft: 16,
  },
})

export default styles
