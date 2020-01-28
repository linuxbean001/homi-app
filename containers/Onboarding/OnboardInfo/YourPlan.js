import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import DefaultHeader from '../../../components/Header';
import yourPlanImg from '../../../assets/image/your-plan.png'

export default class YourPlanScreen extends React.Component {
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  render() {
    return(
      <View style={styles.container}>
         <Image
          style={styles.TopImage}
          source={yourPlanImg} 
        />
         <View style={styles.ContentContainer}>
            <Text style={styles.SubToptext}>What to expect</Text>
            <Text style={styles.HeaderText}>2. Your Plan</Text>
            <Text style={styles.ContentText}>
            We produce a simple step-by-step plan with insight and short actions to help prepare you for a successful purchase. 
            </Text>
            <TouchableOpacity  style={styles.Rectangle }
               onPress={() => this.props.navigation.navigate('YourProgressScreen')} >
               <Text style={styles.Next }>Next</Text>
            </TouchableOpacity>
        </View>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  TopImage:{ 
    width: '100%', 
    height: 250,
    marginBottom:15
  },
  SubToptext: {
    textAlign: 'left',
    color: '#747474',	
    fontFamily: "open-sans-Regular", 
    fontSize: 13,
    letterSpacing: -0.21,
    lineHeight: 18,
    marginBottom:15
  },
  HeaderText:{
    textAlign: 'left',
    color: '#000000',
    fontFamily: "open-sans-SemiBold",	
    fontSize: 24,	
    fontWeight: '600',
    letterSpacing: -0.39,
    lineHeight: 33,
    marginBottom:15
  },
  ContentText:{
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 16,
    letterSpacing: -0.26,
    lineHeight: 22
  },
  ContentContainer:{
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    paddingBottom:15
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
  container: {
    flex: 1
  }
});