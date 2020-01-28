import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class BasicsScreen extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    submitting: false
  }

  static navigationOptions = {
    header: () => <DefaultHeader />
  }



  render() {

    let data = [{
      value: 'Single',
    }, {
      value: 'Engaged',
    },
    {
      value: 'Married',
    },
    {
      value: "Don't want to say",
    }];

    return(

      <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Step 1: The Basics</Text>
        <Text style={styles.SubHeaderText}>We will collect the base of your plan with som e basic questions.</Text>
      
        <Dropdown
          label='Marital Status'
          data={data}
          textColor="#AEAEAE"
          fontSize={16}
          baseColor="#AEAEAE"
          dropdownOffset={{ top: 30 }}
          itemTextStyle={{fontFamily:'open-sans-Regular',color:'#474747'}}
          style={styles.SelectInput} 
        />

        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Date of Birth"
        />
        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          placeholder="Years of School"
        />
        <TextInput
          style={styles.Input}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType='next'
          secureTextEntry={true}
          placeholder="Dependents"
        />
        <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('YourHomeTypeScreen')}
        >
          <Text style={styles.Next }>Next</Text>
        </TouchableOpacity>
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
  SelectInput:{
    color: '#474747',
    fontFamily: "open-sans-Regular",
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
});