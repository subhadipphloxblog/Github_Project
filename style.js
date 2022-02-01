import { StyleSheet } from 'react-native';
import { BorderRadious, Dimension, ImageName, Margin } from '../../enums';
import { Color } from "../../enums";
import { FONTS } from '../../enums/font-family';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 130,
    width: Dimension.width
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  profileImage: {
    width: 100,
    height: 100,
    position: 'relative',
    bottom: 40,
    // left: 30,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_50PX,
    // borderWidth: 1,
    borderColor: Color.COLOR.BLACK.PURE_BLACK,
    // backgroundColor: Color.COLOR.ORANGE.PURE_ORANGE,
  },
  profileName: {
    // margin: 10,
    // marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    // marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    // marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    // marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10,
    position: 'relative',
    alignSelf: 'center',
    // left: 50,
    fontSize: 18,
    color: Color.COLOR.BLACK.PURE_BLACK,
    fontFamily: FONTS.SFPROTEXT_REGULAR,

  },
  profileEdit: {
    position: 'relative',
    // bottom: 34,
    // paddingTop: 80,
    // left: 60,
    // paddingLeft:60,
    paddingTop: 5,
    alignSelf: 'center',
    // underline: {textDecorationLine: 'underline'},
    textDecorationLine: 'underline',
    fontSize: 14,
    fontFamily: FONTS.SFPROTEXT_REGULAR,

    // borderBottomWidth: 1,
    // underline: {textDecorationLine: 'underline'},
    // textDecorationLine: 'underline',
    // borderColor: Color.COLOR.BLACK.PURE_BLACK,
    color: Color.COLOR.BLACK.PURE_BLACK
  },
  Interest: {
    flexDirection: 'row',
    // margin: 10
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10
  },
  interestText: {
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#141823',
    fontFamily: FONTS.SFPROTEXT_MEDIUM
  },
  interestArrow: {
    width: 15,
    height: 15,
    alignSelf: 'flex-end',
    resizeMode: 'contain',
    marginTop: 5
    // left: 230
  },
  interestProperty: {
    right: 86,
    top: 18,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX7,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX7,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX7,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX7,
    fontSize: 13,
    color: '#5d6770',
    fontFamily: FONTS.SFPROTEXT_MEDIUM
  },
  interestItems: {
    paddingTop: 8,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR,
    // backgroundColor:'red',
    alignItems: 'center',

  },
  itemsView: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '60%'

  },
  itemCharity: {
    justifyContent: 'center',
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_20PX,
    borderWidth: 1,
    borderColor: Color.COLOR.WHITE.PURE_WHITE,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: 10,
    marginRight: '5%',
    elevation: 2,
    borderRadius: 20
  },
  itemChartityText: {
    color: '#323a42',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONTS.SFPROTEXT_MEDIUM,
    fontSize: 13
  },
  itemBusiness: {
    justifyContent: 'center',
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_20PX,
    borderWidth: 1,
    borderColor: Color.COLOR.WHITE.PURE_WHITE,
    backgroundColor: 'skyblue',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10
  },
  itemBusinessText: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemArt: {
    justifyContent: 'center',
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_20PX,
    borderWidth: 1,
    borderColor: Color.COLOR.WHITE.PURE_WHITE,
    backgroundColor: 'skyblue',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 8,
    paddingTop: 8,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
  },
  itemArtText: {
    color: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  interestHide: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  connection: {
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR
  },
  connectionView: {
    flexDirection: 'row'
  },
  connectionText: {
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX20,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX20,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX20,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX20,
    paddingTop: 7,
    fontSize: 16,
    color: '#141823',
    fontFamily: FONTS.SFPROTEXT_MEDIUM
  },
  connectionImage: {
    width: 26,
    height: 26,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_13PX,
    right: 25,
    resizeMode: 'cover'



  },
  connectionPic: {
    width: 26,
    height: 26,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_13PX,
    right: 35,
    resizeMode: 'cover'
  },
  connectionPicture: {
    width: 26,
    height: 26,
    right: 45,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_13PX,
    resizeMode: 'cover'
  },
  connectText: {
    color: Color.COLOR.BLUE.PACIFIC,
    fontWeight: 'bold',
    right: 45
  },
  connectArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    alignSelf: 'flex-end'
  },
  connectPeople: {
    position: 'relative',
    top: 50,
    right: 220,
    fontSize: 10,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX5,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX5,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX5,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX5,
    fontSize: 13,
    color: '#5d6770',
    fontFamily: FONTS.SFPROTEXT_MEDIUM
  },
  connectHide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideViewMain: {
    alignItems: 'center',
    paddingTop: 20
  },
  hideView: {
    flexDirection: 'row',
  },
  hidePic: {
    width: 50,
    height: 50,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_25PX,
    borderWidth: 1,
    borderColor: Color.COLOR.BLACK.PURE_BLACK,
  },
  hidePicText: {
    fontFamily: FONTS.SFPROTEXT_MEDIUM,
    color: '#323a42',
    fontSize: 13,
    textAlign: 'center'
  },
  hideOutlook: {
    borderColor: Color.COLOR.BLUE.PACIFIC,
    borderWidth: 1,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_10PX,
    paddingTop: 10,
    paddingBottom: 40,
    paddingLeft: 30,
    paddingRight: 40,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10,
  },
  hideImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  hideOutlookImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: Color.COLOR.BLACK.PURE_BLACK,

  },
  activityView: {
    borderBottomWidth: 1,
    borderBottomColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR,
    paddingBottom: 18
  },
  activityText: {
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX5,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX5,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX5,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX5,
    paddingTop: 15,
    fontSize: 16,
    color: '#141823',
    fontFamily: FONTS.SFPROTEXT_MEDIUM,
    paddingLeft: 14,
    color: Color.COLOR.BLACK.PURE_BLACK
  },
  endPart: {
    borderWidth: 1,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_5PX,
    // margin: 15,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX15,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX15,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX15,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX5,
    borderColor: Color.COLOR.BLUE.PACIFIC,
    // paddingTop: 50,
    paddingBottom: 20
  },
  endPartView: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 50
  },
  endpartSmallImg: {
    width: 40,
    height: 40,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_20PX,
    borderWidth: 1,

    // marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX15,
    // marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX15,
    // marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX15,
    // marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX15,

  },
  endPartUser: {
    position: 'relative',
    top: 20,
    fontSize: 13,
    right: 18,
    fontFamily: FONTS.SFPROTEXT_MEDIUM,
    color: '#323a42'
  },
  endPartDate: {
    position: 'relative',
    top: 18,
    right: 21,
    // margin: 3,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX3,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX3,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX3,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX3,
    fontSize: 12,
    color: '#9197a3',
    fontFamily: FONTS.SFPROTEXT_REGULAR
  },
  endPartDots: {
    width: 26,
    height: 26,

    resizeMode: 'contain',

    alignSelf: 'flex-end',
    right: 10
    // marginRight:10

  },
  endPartBigImg: {
    width: 329,
    height: 250
  },
  endPartBorder: {
    paddingTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    // borderWidth: 1,
    borderColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR
  },
  endPartText: {
    paddingLeft: 20,
    fontSize: 14,
    color: '#141823',
    fontFamily: FONTS.HELVETICA_NEUE_BOLD
  },
  endView: {
    flex: 1,
    flexDirection: 'row',
    // padding: 15,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    // paddingBottom: 5
  },
  endLike: {
    width: 20,
    height: 20,
    // margin: 10,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10,
    borderWidth: 1,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_10PX,
    bottom: 5,
    right: 5,
    // justifyContent:'center',
    // alignSelf:'center'
  },
  shadowBox: {
    // shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.COLOR.WHITE.PURE_WHITE,
    height: 30,
    width: 30,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_15PX,
    top: 5
  },
  endText: {
    top: 10,
    paddingRight: 15,
    color: '#7e868f',
    fontSize: 12,
    marginLeft: 10,
    // fontFamily:FONTS.SFPROTEXT_REGULAR
  },
  endComment: {
    width: 20,
    height: 20,
    // margin: 10,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_10PX,
    borderWidth: 1,
    bottom: 5,
    right: 4,


  },
  shadowComment: {
    // shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.COLOR.WHITE.PURE_WHITE,
    height: 30,
    width: 30,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_15PX,
    top: 4
  },
  endShare: {
    width: 20,
    height: 20,
    marginTop: Margin.MARGIN.MARGIN_TOP_PX.PX10,
    marginRight: Margin.MARGIN.MARGIN_RIGHT_PX.PX10,
    marginLeft: Margin.MARGIN.MARGIN_LEFT_PX.PX10,
    marginBottom: Margin.MARGIN.MARGIN_BOTTOM_PX.PX10,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_10PX,
    borderWidth: 1,
    bottom: 5,
    right: 5,

  },
  shadowShare: {
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor: Color.COLOR.WHITE.PURE_WHITE,
    height: 30,
    width: 30,
    borderRadius: BorderRadious.BORDER_RADIOUS.BORDER_15PX,
    top: 4
  },
  mainView: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: Color.COLOR.WHITE.PURE_WHITE,
    position: 'relative',
    bottom: 15
  },
  subView: {
    // flexDirection: 'row',

  },
  seeAll: {
    fontFamily: FONTS.SFPROTEXT_MEDIUM,
    color: '#323a42',
    fontSize: 13,
    alignSelf: 'center',
    marginTop: 10
  },
  hideText: {
    paddingTop: 30,
    paddingBottom: 20
  },
  component: {
    position: 'absolute',
    top: 15,
    right: 50
  },
  tabSec: {
    backgroundColor: '#e6e6e6',
    borderRadius: 20,
    height: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // elevation: 1,
    marginTop: 10,
    flexDirection: 'row'
  },
  inactiveTabSec: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    alignSelf: 'center',
    justifyContent: 'center'
  },
  inactiveTabText: {
    fontSize: 15,
    marginLeft: '10%'
  },
  activeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 20,
    backgroundColor: '#fff'
  },
  activeTabText: {
    fontSize: 11,
    color: '#1d80e2'
  },
  inviteWhiteSec: {
    backgroundColor: '#fff'
  },

  tabMainSec: {
    marginLeft: '5%',
    marginRight: '5%'
  },
  socialSec: {
    flexDirection: 'row',
    // marginRight:'5%',
    // marginLeft:'5%',
    // marginLeft:5,
    backgroundColor: '#fff',
    // borderTopWidth:1,
    // borderColor:'#f2f2f2',
    // borderBottomWidth:1,
    paddingTop: 10,
    // paddingBottom:10
  },
  socialSegment: {
    flexDirection: 'row',
    // flex: 1,
    marginLeft: '5%',
    // marginRight:'5%'


  },
  socialCircle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
  },
  activeImg: {
    width: 20,
    height: 20,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',

  },
  activeShare: {
    width: 15,
    height: 15,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',

  },
  activeText: {
    alignSelf: 'center',
    marginLeft: 5,
    fontSize: 12,
    color: '#7e868f',
    // fontFamily: FONTS.SFPROTEXT_REGULAR
  },


});
export default styles;