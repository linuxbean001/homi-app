import React from 'react';
import { StyleSheet, ScrollView, Text, TextInput, Image,  View } from 'react-native';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';
import Csmallhome from '../../../assets/image/Csmallhome.png'
import Unsmallhome from '../../../assets/image/Unsmallhome.png'
import Capartment from '../../../assets/image/Capartment.png'
import Unapartment from '../../../assets/image/Unapartment.png'
import Clargehome from '../../../assets/image/Clargehome.png'
import Unlargehome from '../../../assets/image/Unlargehome.png'
import Cmobilehouse from '../../../assets/image/Cmobilehouse.png'
import Unmobilehouse from '../../../assets/image/Unmobilehouse.png'
export default class YourHomeTypeScreen extends React.Component {

  state = {
    isChecked1: false,
    isChecked2: false,
    isChecked3: false,
    isChecked4: false 
  }
 
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  render() { 
    return(

      <ScrollView style={styles.container}>
      <Text style={styles.HeaderText}>Step 2: Your Home</Text>
      <Text style={styles.SubHeaderText}>Now we'll get an idea of the type of home you want to live in.</Text>


      <View style={styles.IconBox}>
        <View style={styles.FIconInnerBox} > 
          <CheckBox
                onClick={()=>{
                  this.setState({ 
                      isChecked1:!this.state.isChecked1
                  })
                }}
                isChecked={this.state.isChecked1}
                checkedImage={<Image style={{width:60, height:60 }} source={Csmallhome} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unsmallhome}/>}
            />
            <Text style={styles.IconBoxText}>Small Home</Text>
        </View>
        <View style={styles.SIconInnerBox} > 
        <CheckBox
                onClick={()=>{
                  this.setState({
                      isChecked2:!this.state.isChecked2
                  })
                }}
                isChecked={this.state.isChecked2}
                checkedImage={<Image style={{width:60, height:60 }} source={Capartment} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unapartment}/>}
            />
          <Text style={styles.IconBoxText} >Apartment</Text>
        </View>
      </View>

      <View style={styles.IconBox}>
        <View style={styles.FIconInnerBox} > 
          <CheckBox
                onClick={()=>{
                  this.setState({
                      isChecked3:!this.state.isChecked3
                  })
                }}
                isChecked={this.state.isChecked3}
                checkedImage={<Image style={{width:60, height:60 }} source={Cmobilehouse} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unmobilehouse}/>}
            />
            <Text style={styles.IconBoxText}>Mobile Home</Text>
        </View>
        <View style={styles.SIconInnerBox} > 
        <CheckBox
                onClick={()=>{
                  this.setState({
                      isChecked4:!this.state.isChecked4
                  })
                }}
                isChecked={this.state.isChecked4} 
                checkedImage={<Image style={{width:60, height:60 }} source={Clargehome} />}
                unCheckedImage={<Image style={{width:60, height:60 }} source={Unlargehome}/>}
            />
          <Text style={styles.IconBoxText} >Large Home</Text>
        </View>
      </View>
        
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bedrooms"
      />
      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bathrooms"
      />

      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next'
        placeholder="Bathrooms"
      /> 

      <TextInput
        style={styles.Input}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType='next' 
        placeholder="Zip Code"
      />


      <TouchableOpacity  style={styles.Rectangle }
        onPress={() => this.props.navigation.navigate('YourCreditScreen')}
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
  IconBox:{
    flex: 1, 
    flexDirection: 'row', 
    marginTop:20
  },
  FIconInnerBox:{
    width: '45%', 
    padding:20, 
    borderWidth:1, 
    borderColor: '#ECECEC', 
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  SIconInnerBox:{
    width: '45%', 
    padding:20, 
    borderWidth:1, 
    borderColor: '#ECECEC', 
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:20
  },
  IconBoxText:{
    paddingTop:2,	
    color: '#232528',
    fontFamily: "open-sans-Regular",
    fontSize: 10,
    letterSpacing: -0.16,	
    lineHeight: 14
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