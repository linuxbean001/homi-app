import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import bankingHolder from '../../../assets/image/banking-holder.png'
export default class YourSavingsScreen extends React.Component {
  state = {
    selectedOption:''
  }
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  render() {

    return( 

      <ScrollView style={styles.container}>
        <Text style={styles.HeaderText}>Step 4: Your Savings</Text>
        <Text style={styles.SubHeaderText}>Lastly, to create your plan we need to get an idea of your savings. </Text>
        <Image
          style={styles.TopImage}
          source={bankingHolder} 
        />
        <TouchableOpacity  style={styles.Rectangle }
          onPress={() => this.props.navigation.navigate('LenderDetailsScreen')}
        >
          <Text style={styles.Next }>Lets Go</Text>  
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
  TopImage:{ 
    marginBottom:15,
    marginTop:30
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
   
  }

});