import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: '#ebebeb', paddingTop: 15},
    whiteBg: {backgroundColor: '#fff'},
    statusBar: {
      height: STATUSBAR_HEIGHT
    },
    scrollView: {paddingTop: 15, paddingBottom: 15, backgroundColor: '#F6F7F8'},
    rowContent: {flex: 1, flexDirection: 'row', backgroundColor: '#fff'},
    mainWrap: { margin: 10, marginTop: 0,marginBottom: 15, backgroundColor: '#fff', borderRadius: 5,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    lightShadow: {
      borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 1,
    },
    input: {
      height: 40,
      borderWidth: 0,
      borderBottomWidth: 1,
      borderColor: '#aaa',
      padding: 10,
    },
    loginCover: {width: deviceWidth * .48, height: deviceWidth * .45, alignSelf: 'center', paddingTop: 5},
    error: {color: '#f00', marginTop: 5},
    imageStyle: {width: 75, height: 75},
    operatorWrap: {padding: 15, paddingRight: 0},
    operatorItem: {width: 80, height: 80, marginRight: 5, marginBottom: 5, marginLeft: 1, padding: 2},
    profileInfo: {flex: 5},
    alignCenter: {alignItems: 'center', justifyContent: 'center'},
    alignSelfCenter: {alignSelf: 'center'},
    avatar: {borderRadius: 40, height: 40, width: 40, flex: 2},
    avatarWrap: {flex: 2},
    nameWrap: {flex: 3, padding: 15},
    listAvatar: {width: 150, height: 150},
    detailsAvatar: {width: 100, height: 100, borderRadius: 150, marginTop: 10, marginBottom: 10},
    searchWrap: {padding: 10},
    detailsWrap: {padding: 20},
    dateInfo: {flex: 2},
    textRight: {textAlign: 'right'},
    textBold:  {fontWeight: '700'},
    searchInput: { borderRadius: 20, padding: 5, paddingLeft: 20, backgroundColor: '#fff', width: '100%'},
    phone: {color: "#2AACE2"},
    detailsName: {fontSize: 18},
    topMargin: {marginTop: 5},
    section: {padding: 15, paddingTop: 5, marginTop: 10, backgroundColor: '#ebebeb', borderRadius: 10},
    activityIndicatorWrap: {position: 'absolute', justifyContent: 'center', alignItems: 'center'},
    rating: ratingWidth =>({
      position: 'absolute', 
      width: ratingWidth, 
      overflow: 'hidden'
    }),
    ratingImage: size =>({
      height: size, 
      width: size
    }),
    detailsImage: {
      width: deviceWidth,
      height: deviceWidth
    },
    detailsContainer: {margin: 15},
    detailsBrand: {fontSize: 22},
    detailsItem: {marginTop: 10, fontSize: 16},
    input: {
      height: 40,
      margin: 10,
      padding: 10,
      marginTop: 0,
      backgroundColor: '#fff',
      color: '#171717',
      borderWidth: 1,
      borderRadius: 20,
      borderColor: '#ccc',
      width: deviceWidth * 0.8
    },
    sort: {width: deviceWidth * 0.2, padding: 10},
    itemNotAvailable: {fontSize: 20, textAlign: 'center', marginTop: 80, color: '#171717'},
    ratingContainer: {flex: 1, minHeight: 30},
    ratingWrap: {flexDirection: 'row'}
});

export default styles;