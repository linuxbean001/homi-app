import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';

import lenderprofile from '../../assets/image/lenderImage.png'

export default class DashboardCreditScreen extends React.Component {
  state = {page:'all'}
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  
  render() { 
    var self = this;
    return(
      <ScrollView style={styles.container}>
             <Text style={styles.HeaderText}>Improving your credit score allows lenders to offer you interest lower rates.  </Text>
            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}> Improve Credit Score by 10%  </Text>
                 <Text style={styles.Content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   </Text>
            </View>

            <View style={styles.ContentArea}>
                 <Text style={styles.SubHeading}> Improve Credit Score by 10%  </Text>
                 <Text style={styles.Content}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor   </Text>
            </View>
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
  HeaderText:{
    color: '#232528',	
    fontFamily: "open-sans-bold",
    fontSize: 24,	
    fontWeight: 'bold',
    letterSpacing: -0.39,	
    lineHeight: 33,
    marginBottom:53,
    marginTop:20
  },
  ContentArea:{
        marginBottom:100
  },
  SubHeading:{
    color: '#505050',	
    fontFamily: "open-sans-bold",	
    fontSize: 17,	
    fontWeight: 'bold',
    letterSpacing: -0.39,	
    lineHeight: 23,
    marginBottom:25
  },
  Content:{
    color: '#505050',	
    fontFamily: "open-sans-Regular",
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19,
  }

}); 