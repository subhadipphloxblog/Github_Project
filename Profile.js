import React from "react";
import { SafeAreaView, ScrollView, Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ActivityIndicator, } from "react-native";
// import ReactNativeTooltipMenu from 'react-native-tooltip-menu';
import { BorderRadious, Dimension, ImageName, Margin } from '../../enums';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Color } from "../../enums";
import { COLOR } from "../../enums/color";
import styles from './style';
import { FONTS } from "../../enums/font-family";
import Modal from "react-native-modal";
import { getData } from "../../services/async-storage";
import { MiddlewareCheck } from "../../services/middleware";
import { App_uri } from "../../services/config";

let staticResponse =
{
  "userId": "715417",
  "email": null,
  "emailValied": "0",
  "firstName": "Avisek Mal",
  "dateOfBirth": null,
  "gender": null,
  "orgISO": "IN",
  "countryISO": "IN",
  "countryCode": "+91",
  "countryName": "India",
  "contactNo": "8926871862",
  "phoneNumber": "+918926871862",
  "imageUrl": null,
  "coverUrl": null,
  "location": null,
  "userLat": null,
  "userLng": null,
  "googlePlusUserId": null,
  "facebookId": null,
  "verifiedUser": "1",
  "registrationDateTime": "2021-12-03 14:52:09",
  "blocked": "0",
  "is_admin": "0",
  "isMobilePrivate": "1",
  "isEmailPrivate": "1",
  "isdobPrivate": "1",
  "refferedById": null,
  "audioEnable": "1",
  "city": null,
  "mmCountry": null,
  "mmCity": null,
  "privateProfile": "0",
  "isDelete": "0",
  "walletStatus": "1",
  "theaterStatus": "1",
  "myrefferel": "lyk715417",
  "status": null,
  "interests": "N/A",
  "interested": [
    "Art",
    "Business",
    "Charity",
    "Education",
  ],
  "live": null,
  "isLivePrivate": "1",
  "cityOfBirth": null,
  "iscobPrivate": "1",
  "maritalStatus": null,
  "isMaritalStatusPrivate": "1",
  "employment": null,
  "isEmploymentPrivate": "1",
  "position": null,
  "isPositionPrivate": "1",
  "university": [],
  "faith": null,
  "languageSpoken": [],
  "hobbies": "",
  "countryOfBirth": null,
  "countryYouLive": null,
  "cityYouLive": null,
  "anniversaryDate": null,
  "isCountryOfBirthPrivate": "1",
  "isCityYouLivePrivate": "1",
  "isCountryYouLivePrivate": "1",
  "profession": null,
  "highSchool": [],
  "college": [],
  "about": "",
  "ethnicity": [],
  "businessDetails": null,
  "isAboutPrivate": "1",
  "isBirthDayPrivate": "1",
  "universities": ""
}

let staticData = [
  {
    "id": "dgdjs123",
    "name": "Samir Sarkar",
    "photo": "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
  },
  {
    "id": "dgdjs125",
    "name": "Avijit Kumar Biswas",
    "photo": "https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg"
  }, {
    "id": "dgdjs125",
    "name": "Souvik Ghosh",
    "photo": "https://pbs.twimg.com/profile_images/864104988146114560/MSWTWwno_400x400.jpg"
  }, {
    "id": "dgdjs126",
    "name": "Biltu Jana",
    "photo": "https://pbs.twimg.com/profile_images/864104988146114560/MSWTWwno_400x400.jpg"
  },
  {
    "id": "102",
    "name": "Sukanta Bhattyachariya",
    "photo": "https://pbs.twimg.com/profile_images/864104988146114560/MSWTWwno_400x400.jpg"
  },
  {
    "id": "103",
    "name": "Sourav Kundu",
    "photo": "https://pbs.twimg.com/profile_images/864104988146114560/MSWTWwno_400x400.jpg"
  }
]
class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      viewList: true,
      counterItem1: 0,
      counterItem2: 0,
      allData: [],
      check: false,
      staticProfileData: staticResponse,
      interested: [],
      liked: false,
      count: 0,
      checkModal: false,
      secondLike: false,
      counter: 0,
      pageloader: true,
      postDetails: []



    }

  }
  seeAllInterest = () => {
    this.props.navigation.navigate("Myinterests")
  }
  toggle = () => {
    let localLiked = this.state.liked;

    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
    (this.state.liked) ? (this.state.count--) : (this.state.count++);
  };
  toggleOne = () => {
    let secondLike = this.state.secondLike;

    // Toggle the state variable liked
    secondLike = !secondLike;
    this.setState({ secondLike: secondLike });
    (this.state.secondLike) ? (this.state.counter--) : (this.state.counter++);
  };
  componentDidMount = async () => {
    this.setState({
      staticProfileData: staticResponse
    })
    this.setState({
      interested: staticResponse.interested
    })
    this.load();
    const userInfo = await getData("logInInfo");
    let reqData = {
      "userId": userInfo.userToken,
      "offset": 0,
      "limit": 20
    }
    let responseData = await MiddlewareCheck("getMyPostFeed", reqData, 1);
    // console.log(JSON.stringify(responseData));
    this.setState({
      postDetails: responseData.response.feeds,
      pageloader: false
    })
    // console.log(this.state.postDetails)
    // if (responseData === false) {
    //   this._onNetworkError();
    // } else {
    //   this.setState({
    //     postDetails: responseData.response.feeds.createdBy
    //   })
    // }

  }

  load = async () => {
    this.setState({
      allData: staticData
    })
  }

  onClick = () => {
    this.props.navigation.navigate("Myinterests");
  }
  moreModal = () => {
    this.setState({
      checkModal: !this.state.checkModal
    })
  }
  render() {
    return (
      <SafeAreaView>
        {this.state.pageloader ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '50%' }}>
            <ActivityIndicator size="large" color="#0987e2" />
          </View> :
          <React.Fragment>
            <Modal isVisible={this.state.checkModal}
              style={{ margin: 0, paddingTop: Dimension.height / 1.2 }}
            >
              <View style={{ marginLeft: '2%', marginRight: '2%', height: Dimension.height - Dimension.height / 1.5 }}>
                <TouchableOpacity style={{ backgroundColor: '#fff', paddingTop: 15, paddingBottom: 15, alignItems: 'center', borderRadius: 5 }}

                >
                  <Text style={{ color: '#1484CD', fontSize: 16, fontFamily: FONTS.SFPROTEXT_SEMIBOLD }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#1484CD', paddingTop: 15, paddingBottom: 15, alignItems: 'center', marginTop: 10, borderRadius: 5 }}
                  onPress={this.moreModal}>
                  <Text style={{ color: '#fff', fontSize: 16, fontFamily: FONTS.SFPROTEXT_SEMIBOLD }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </Modal>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.container}>
                <ImageBackground source={ImageName.BACKGROUND} resizeMode="cover" style={styles.image}>
                </ImageBackground>
              </View>
              <View style={styles.mainView}>
                <View style={styles.subView}>
                  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      source={ImageName.PROFILEPIC}
                      style={styles.profileImage}
                    />
                  </View>
                  <View style={{ bottom: 25 }}>
                    <Text style={styles.profileName}>{this.state.staticProfileData.firstName}</Text>
                    <Text style={styles.profileEdit}>Edit Profile</Text>
                    {/* <View style={{borderBottomWidth:1, marginLeft:'22%', marginRight:'53%'}}></View> */}
                  </View>
                </View>
                {/* <View style={styles.tabMainSec}>
              <View style={styles.tabSec}>
                <View style={styles.inactiveTabSec}>
                  <Text style={styles.inactiveTabText}>Profile Completeness</Text>
                </View>
              </View>
            </View> */}
                <View style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%', marginTop: '3%', flex: 1 }}>
                  <View style={{ flexDirection: 'column', flex: 0.6 }}>
                    <Text style={{
                      fontSize: 16,
                      color: '#141823',
                      fontFamily: FONTS.SFPROTEXT_MEDIUM
                    }}>Interests</Text>
                    <Text style={{
                      fontSize: 10,
                      color: '#5d6770',
                      fontFamily: FONTS.SFPROTEXT_MEDIUM,
                      marginTop: 5
                    }}>3 Interests</Text>
                  </View>

                  <TouchableOpacity style={{ flex: 0.4 }} onPress={() => { this.setState({ show: !this.state.show }) }}>
                    <Image
                      source={this.state.show ? ImageName.DOWNARROW : ImageName.UPARROW}
                      style={styles.interestArrow}
                    />
                  </TouchableOpacity>


                </View>
                <View style={styles.interestItems}>

                  <View style={styles.itemsView}>
                    {this.state.interested.map((item, key) => (
                      <React.Fragment key={key}>
                        <TouchableOpacity style={styles.itemCharity}>
                          <Text style={styles.itemChartityText}>{item}</Text>
                        </TouchableOpacity >

                      </React.Fragment>
                    ))}
                  </View>

                  <View style={styles.interestHide}>
                    {
                      this.state.show ?
                        null :
                        <TouchableOpacity onPress={this.seeAllInterest}>
                          <Text style={styles.seeAll}>See all</Text>
                        </TouchableOpacity>
                    }
                  </View>
                </View>

                <View style={{ flexDirection: 'row', marginLeft: '5%', marginRight: '5%', flex: 1, marginTop: '5%', marginBottom: '5%' }}>
                  <View style={{ flex: 0.4, flexDirection: 'column' }}>
                    <Text style={{
                      fontSize: 16,
                      color: '#141823',
                      fontFamily: FONTS.SFPROTEXT_MEDIUM
                    }}>Connections</Text>
                    <Text style={{
                      fontSize: 10,
                      color: '#5d6770',
                      fontFamily: FONTS.SFPROTEXT_MEDIUM,
                      marginTop: 5
                    }}>23 Connections</Text>
                  </View>
                  <View style={{ flex: 0.3, flexDirection: 'row' }}>
                    <Image
                      source={ImageName.PROFILEPIC}
                      style={styles.connectionImage}
                    />
                    <Image
                      source={ImageName.PROFILEPIC}
                      style={styles.connectionPic}
                    />
                    <Image
                      source={ImageName.PROFILEPIC}
                      style={styles.connectionPicture}
                    />
                    <Text style={styles.connectText}>+</Text>
                  </View>
                  <TouchableOpacity style={{ flex: 0.3 }} onPress={() => { this.setState({ viewList: !this.state.viewList }) }}>
                    <Image
                      source={this.state.viewList ? ImageName.DOWNARROW : ImageName.UPARROW}
                      style={styles.connectArrow}
                    />
                  </TouchableOpacity>

                </View>
                <View style={styles.connectHide}>
                  {
                    this.state.viewList ?
                      null :
                      <View style={styles.hideViewMain}>
                        <View style={styles.hideView}>
                          <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                          >
                            {this.state.allData.map((item, key) => (
                              <React.Fragment key={key}>
                                <View style={styles.hideOutlook}>
                                  <View style={styles.hideImage}>
                                    <Image
                                      source={{ uri: item.photo }}
                                      style={styles.hideOutlookImage}
                                    />
                                  </View>
                                  <View style={{ height: 40, width: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.hidePicText}>{item.name}</Text>
                                  </View>
                                </View>
                              </React.Fragment>
                            ))}
                          </ScrollView>
                        </View>
                        <View style={styles.hideText}>
                          <Text style={styles.seeAll}>See all</Text>
                        </View>
                      </View>
                  }
                </View>
                <View style={{
                  borderBottomWidth: 1,
                  borderBottomColor: Color.COLOR.GRAY.LIGHT_GRAY_COLOR,
                }} />
                <View style={styles.activityView}>
                  <Text style={styles.activityText}>My Activity</Text>
                </View>
                {/* <View style={styles.endPart}>
              <View style={{ flexDirection: 'row', marginLeft: '3%', marginTop: '3%', marginBottom: '10%' }}>
                <View style={{ flex: 0.2 }}>
                  <Image
                    source={ImageName.PROFILEPIC}
                    style={styles.endpartSmallImg}
                  />
                </View>
                <View style={{ flexDirection: 'column', flex: 0.6, right: 10 }}>
                  <Text style={{
                    fontSize: 14,
                    color: Color.COLOR.BLACK.PURE_BLACK,
                    fontFamily: FONTS.SFPROTEXT_REGULAR,
                  }}>{this.state.staticProfileData.firstName}</Text>
                  <Text style={{
                    fontSize: 10,
                    color: '#5d6770',
                    fontFamily: FONTS.SFPROTEXT_MEDIUM,
                  }}>Dec 4 at 1.06 PM</Text>
                </View>
                <TouchableOpacity style={{ flex: 0.2 }} onPress={this.moreModal}>

                  <Image
                    source={ImageName.THREEDOTS}
                    style={styles.endPartDots}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Image
                  source={ImageName.UPLOADIMAGE}
                  style={styles.endPartBigImg}
                />
              </View>
              <View style={styles.endPartBorder}>
                <Text style={styles.endPartText}>Hello Ronaldo</Text>
              </View>
              <View style={styles.endView}>
                <TouchableOpacity onPress={() => this.toggle()}>
                  {this.state.liked === false ?
                    <View style={styles.shadowBox}>
                      <Image
                        source={ImageName.UNLIKE}
                        style={styles.endLike}
                      />
                    </View> :
                    <View style={styles.shadowBox}>
                      <Image
                        source={ImageName.LIKEBLUEICON}
                        style={styles.endLike}
                      />
                    </View>
                  }
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.endText}>{this.state.count} Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                  <View style={styles.shadowComment}>
                    <Image
                      source={ImageName.COMMENTS}
                      style={styles.endComment}
                    />
                  </View>
                  <Text style={styles.endText}>6 Comments</Text>
                </TouchableOpacity>
                <Menu>
                  <MenuTrigger >
                    <View style={styles.shadowShare}>
                      <Image
                        source={ImageName.SHARES}
                        style={styles.endShare}
                      />
                    </View>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption onSelect={() => alert(`Shere on Like`)} style={{ height: 30 }}>
                      <Text style={{ color: Color.COLOR.GRAY }}>Shere on Like</Text>
                    </MenuOption>

                    <MenuOption onSelect={() => alert(`External Shere`)} style={{ height: 30 }}>
                      <Text style={{ color: Color.COLOR.GRAY }}>External Shere</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
                <Text style={styles.endText}> 1 Share</Text>
              </View>
            </View> */}
                {this.state.postDetails.map((item, key) => (
                  <React.Fragment key={key}>
                    <View style={styles.endPart}>
                      <View style={{ flexDirection: 'row', marginLeft: '3%', marginTop: '3%', marginBottom: '10%' }}>
                        <View style={{ flex: 0.2 }}>
                          <Image
                            source={ImageName.PROFILEPIC}
                            style={styles.endpartSmallImg}
                          />
                        </View>
                        <View style={{ flexDirection: 'column', flex: 0.6, right: 10 }}>
                          <Text style={{
                            fontSize: 14,
                            color: Color.COLOR.BLACK.PURE_BLACK,
                            fontFamily: FONTS.SFPROTEXT_REGULAR,
                          }}>{item.details.createdBy.firstName}</Text>
                          <Text style={{
                            fontSize: 10,
                            color: '#5d6770',
                            fontFamily: FONTS.SFPROTEXT_MEDIUM,
                            // marginTop: 5
                          }}>{item.details.createdOn}</Text>
                        </View>



                        <TouchableOpacity style={{ flex: 0.2 }} onPress={this.moreModal}>

                          <Image
                            source={ImageName.THREEDOTS}
                            style={styles.endPartDots}
                          />
                        </TouchableOpacity>



                      </View>
                      <View>
                        <Image
                          source={{ uri: App_uri.IMAGE_VIEW_URI + item.details.imageUrl }}
                          style={styles.endPartBigImg}
                        />
                      </View>
                      <View style={styles.endPartBorder}>
                        <Text style={styles.endPartText}>{item.details.title}</Text>
                      </View>
                      <View style={styles.endView}>
                        {/* <View style={styles.socialSec}>
                        <View style={styles.socialSegment}>
                            <View style={styles.socialCircle}>
                            <TouchableOpacity onPress={() => this.toggleOne()}>
                            {this.state.secondLike === false ?
                                    <Image source={ImageName.UNLIKE} style={styles.activeImg} />:
                                    <Image source={ImageName.LIKEBLUEICON} style={styles.activeImg} />
                            }
                                </TouchableOpacity>
                            
                            </View>
                            <Text style={styles.activeText}>{this.state.counter} Like</Text>
                        </View>
                        <View style={styles.socialSegment}>
                            <View style={styles.socialCircle}>
                                <TouchableOpacity>
                                    <Image source={ImageName.COMMENTS} style={styles.activeImg} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.activeText}>6 Comments</Text>
                        </View>
                        <View style={styles.socialSegment}>
                            <View style={styles.socialCircle}>

                                <TouchableOpacity>

                                    <Image source={ImageName.SHARES} style={styles.activeShare} />

                                    </TouchableOpacity>

                            </View>
                            <Text style={styles.activeText}>1 Share</Text>
                        </View>
                        
                    </View> */}
                        <TouchableOpacity onPress={() => this.toggleOne()}>
                          {this.state.secondLike === false ?
                            <View style={styles.shadowBox}>
                              <Image
                                source={ImageName.UNLIKE}
                                style={styles.endLike}
                              />
                            </View> :
                            <View style={styles.shadowBox}>
                              <Image
                                source={ImageName.LIKEBLUEICON}
                                style={styles.endLike}
                              />
                            </View>
                          }
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={styles.endText}>{this.state.counter} Like</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                          <View style={styles.shadowComment}>
                            <Image
                              source={ImageName.COMMENTS}
                              style={styles.endComment}
                            />
                          </View>
                          <Text style={styles.endText}> 0 Comment</Text>
                        </TouchableOpacity>

                        <Menu>
                          <MenuTrigger >
                            <View style={styles.shadowShare}>
                              <Image
                                source={ImageName.SHARES}
                                style={styles.endShare}
                              />
                            </View>
                          </MenuTrigger>
                          <MenuOptions

                          >
                            <MenuOption onSelect={() => alert(`Shere on Like`)} style={{ height: 30 }}>
                              <Text style={{ color: Color.COLOR.GRAY }}>Shere on Like</Text>
                            </MenuOption>

                            <MenuOption onSelect={() => alert(`External Shere`)} style={{ height: 30 }}>
                              <Text style={{ color: Color.COLOR.GRAY }}>External Shere</Text>
                            </MenuOption>

                          </MenuOptions>
                        </Menu>
                        <Text style={styles.endText}> 1 Share</Text>
                      </View>
                    </View>

                  </React.Fragment>
                ))}
              </View>
              <View style={{ marginTop: 60 }} />
            </ScrollView>
          </React.Fragment>
        }
      </SafeAreaView>
    )
  }
}
export default Profile;
