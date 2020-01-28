import React from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, CheckBox, ActivityIndicator, Alert } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import '@firebase/firestore';



export default class NameAndPassScreen extends React.Component {
  _isMounted = false;
 state = {
    name: '',
    email: '',
    password: '',
    submitting: false
  }



  async componentDidMount() {
    this._isMounted = true;
  }

  

  static navigationOptions = {
    header: () => <DefaultHeader />
  }

  _submit = () => {
    console.log('CREATING ACCOUNT');
    this.setState({submitting: true});
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(token => {
        return firebase.firestore().collection('users').doc(token.user.uid).set({
          name: this.state.name
        });
      })
      .then(() => {
        console.log('USER GENERATED AND DATATBASE SEEDED');
        if(this._isMounted) this.setState({submitting: false});
        this.props.navigation.navigate('YourHomeScreen');
      })
      .catch(error => {
        // Handle Errors here.
        console.group();
        console.log('Create account error:');
        console.log(error.code);
        console.log(error.message);
        console.groupEnd();
        Alert.alert(error.message);
        if(this._isMounted) this.setState({submitting: false});
      })
      .finally(() => {
      });
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Congrats on taking the first step in owing</Text>
        <Text style={styles.SubHeaderText}>Next we'll get an idea of the type of home you'd like to buy</Text>
        <TextInput
          value={this.state.name} 
          style={styles.Input}
          onChangeText={name => this.setState({name})}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Name"
        />
        <TextInput
          value={this.state.email}
          style={styles.Input}
          onChangeText={email => this.setState({email})}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType='next'
          placeholder="Email"
        />
        <TextInput
          value={this.state.password}
          style={styles.Input}
          onChangeText={password => this.setState({password})}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          secureTextEntry={true}
          placeholder="Password"
        />
        <View style={styles.Term}>
          <CheckBox style={styles.TermBox} />
          <Text style={styles.IAcceptTheTermsO}> I accept the terms of service and the privacy policy.</Text>
        </View>
      
        <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        >
          <Text style={styles.Next }>Next</Text>
        </TouchableOpacity>
        
        {this.state.submitting &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' />
          </View>}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  HeaderText: {
    color: '#232528',	
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
   	fontFamily: "open-sans-SemiBold",
  },
  SubHeaderText: {
      color: '#232528',
      fontSize: 16,
      letterSpacing: -0.26,
      lineHeight: 22,
      fontFamily: "open-sans-Regular",
      marginTop:15
  },
  Input: {
    borderBottomWidth: 1,
    height: 61,
    color: '#474747',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
  	letterSpacing: -0.26,
  	lineHeight: 22,
    marginTop:25

  },
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:30
  },
  Next: {	
    color: '#000000',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center',
  },
  Term:{
    flexDirection: 'row',
    paddingTop:15,
    marginTop:15
  },
  IAcceptTheTermsO:{
    marginTop:4,
    marginLeft:0,
    height: 38,
    width:290,
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 19

  }
  // TermBox:{
  //   borderWidth: 0,
  //   borderColor: '#979797',
  //   height: 23,
  //   width: 23,
  //   backgroundColor: '#FFFFFF'
  // }
});