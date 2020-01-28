import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

import lenderprofile from '../../assets/image/lenderImage.png'

export default class MeetLenderScreen extends React.Component {
  state = {page:'all'}
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  
  render() { 
    var self = this;
    return(
      <ScrollView style={styles.container}>
            <View style={styles.ImageArea}>
                <Image style={styles.profileImage} source={lenderprofile} />
                <Text style={styles.LenderName}>Adam</Text> 
                <Text style={styles.LenderDesignation}>Mortgage Lender</Text>
             </View>
             <Text style={styles.ProfileContent}>
                 Adam is an experience loan officer that has been excited about meeting you. {'\n'}{'\n'}
                 He has all of the information he needs from you, but would like to meet and revisit the type of house you want. 
                 {'\n'}{'\n'}
                 When would you like to meet? 
             </Text>

      <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('DashboardCreditScreen')} >
           <Text style={styles.Next }>Meet my Lender</Text>  
      </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'#fff',
    paddingLeft:30,
    paddingRight:30,
    paddingTop:25
  },
  ImageArea:{
  marginTop:20
  },
  profileImage:{
      width:150,
      height:150,
  },
  LenderName:{
    color: '#000',	
    fontSize: 36,	
    fontWeight: '600',	
    fontFamily:'open-sans-bold',
    marginTop:30
  },
  LenderDesignation:{
    color: '#0DBBF4',	
    fontSize: 24,	
    fontWeight: '500',	
    lineHeight: 29,
    fontFamily:'avenir-reg'
  },
  ProfileContent:{
    color: '#000000',		
    fontSize: 16,	
    fontWeight: '600',
    lineHeight: 22,
    marginTop:50,
    fontFamily:'avenir-med'
  },
  Rectangle: {
    height: 61,
    borderWidth: 1,
    borderColor: '#AEAEAE',
    borderRadius: 30.5,
    textAlign: 'center',
    marginTop:30,
    marginBottom:30,
    backgroundColor:'#FFFFFF'
  },
  Next: {	 
    color: '#000',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center', 
  },

});