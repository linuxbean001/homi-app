import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

// Signup and Onboard information screens
import NameAndPassScreen from './Onboarding/NameAndPass';
import LandingScreen from './Landing';
import LoginScreen from './Onboarding/Login';
import DefaultHeader from './../components/Header';
import InsightHeader from './../components/InsightHeader'

import { YourHomeScreen, YourPlanScreen, YourProgressScreen, YourPurchaseScreen } from './Onboarding/OnboardInfo/index';
import { BasicsScreen, YourCreditScreen, YourHomeTypeScreen, YourSavingsScreen } from './Onboarding/ExtraInformation/index';
import { MainDashboardScreen, LenderDetailsScreen,DashboardLineGraphScreen, DashboardCreditScreen, WelcomePageScreen, OntrackScreen,MeetLenderScreen } from './Dashboard/index';
import { HomeOwnershipNotificationScreen, PlanReadyNotificationScreen, NotificationApprovalScreen} from './Notification/index';
import { ImproveCreditScreen } from './Insight/index';

import firebase from 'firebase';
import ENV from '../environment';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
// import '@firebase/firestore';
import * as Font from 'expo-font';
const firebaseConfig = ENV().firebaseConfig;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootStrapAsync();
  }

  _bootStrapAsync = async () => {
      firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('Authenticated with Firebase');
      } else {
      }
      this.props.navigation.navigate('SignUp');
      
      
    });
  }

  
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-BoldItalic': require('../assets/fonts/OpenSans-BoldItalic.ttf'),
      'open-sans-ExtraBold': require('../assets/fonts/OpenSans-ExtraBold.ttf'),
      'open-sans-ExtraBoldItalic': require('../assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      'open-sans-Italic': require('../assets/fonts/OpenSans-Italic.ttf'),
      'open-sans-Light': require('../assets/fonts/OpenSans-Light.ttf'),
      'open-sans-LightItalic': require('../assets/fonts/OpenSans-LightItalic.ttf'),
      'open-sans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-SemiBold': require('../assets/fonts/OpenSans-SemiBold.ttf'),
      'open-sans-SemiBoldItalic': require('../assets/fonts/OpenSans-SemiBoldItalic.ttf'),
      'avenir-reg': require('../assets/fonts/AvenirNextLTPro-Regular.otf'),
      'avenir-med': require('../assets/fonts/AvenirNextLTPro-Medium.otf'),
      'avenir-Demi': require('../assets/fonts/AvenirNextLTPro-Demi.otf')
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

const SignUp = createStackNavigator({ 
  LandingScreen,
  DefaultHeader,
  InsightHeader,
  NameAndPassScreen,
  LoginScreen
}, {
  //initialRouteName: 'LandingScreen'
  initialRouteName: 'NameAndPassScreen'
});

const Onboarding = createStackNavigator({
  YourHomeScreen,
  YourPlanScreen,
  YourProgressScreen,
  YourPurchaseScreen
});

const ExtraInfo = createStackNavigator({
  BasicsScreen,
  YourHomeTypeScreen,
  YourCreditScreen,
  YourSavingsScreen
});

const MainApp = createStackNavigator({
  MainDashboardScreen,
  LenderDetailsScreen,
  DashboardLineGraphScreen,
  WelcomePageScreen,
  OntrackScreen,
  MeetLenderScreen,
  DashboardCreditScreen
});

const Notification = createSwitchNavigator({
  HomeOwnershipNotificationScreen,
  PlanReadyNotificationScreen,
  NotificationApprovalScreen
});

const Insight = createStackNavigator({
  ImproveCreditScreen
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoadingScreen,
    SignUp,
    Onboarding,
    ExtraInfo,
    MainApp,
    Notification,
    Insight
  },{
    initialRouteName: 'AuthLoadingScreen',
  })
)