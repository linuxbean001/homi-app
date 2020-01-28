import React from 'react';
import { StyleSheet, ScrollView, Text, View,  TouchableWithoutFeedback} from 'react-native';
import DefaultHeader from '../../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButtons, SegmentedControls  } from 'react-native-radio-buttons'

export default class YourCreditScreen extends React.Component {
  state = {
    selectedOption:''
  }
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  render() {
   
    const options = [
      "Exceptional 800-850",
      "Very Good 740-799",
      "Good 670-739",
      "Fair 580-669",
      "Very Poor 0-579"
    ];

    function setSelectedOption(selectedOption){
      this.setState({
        selectedOption
      });
    }
   
    function renderOption(option, selected, onSelect, index){
      const style = selected ? { fontWeight: 'bold',borderWidth:1,borderColor:'#00DB8A',paddingTop:20,paddingBottom:20,paddingLeft:10,marginTop:20,	color: '#00DB8A',fontSize:17,	fontfamily: "open-sans-SemiBold"} : {fontWeight: 'bold',borderWidth:1,borderColor:'#ECECEC',paddingTop:20,paddingBottom:20,paddingLeft:10,marginTop:20,color: '#00DB8A',fontSize:17,	fontfamily: "open-sans-SemiBold"};
   
      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <Text style={style}>{option}</Text>
        </TouchableWithoutFeedback>
      );
    }
   
    function renderContainer(optionNodes){
      return <View>{optionNodes}</View>;
    }

    return( 

      <ScrollView style={styles.container}>
      <Text style={styles.HeaderText}>Step 3: Your Credit</Text>
      <Text style={styles.SubHeaderText}>To understand the best path towards home ownership, we need to understand your credit. Select a range and we will check it before you meet your lender.</Text>
      
     <View style={{margin: 20}}>
      <RadioButtons
        options={ options }
        onSelection={ setSelectedOption.bind(this) }
        renderOption={ renderOption }
        renderContainer={RadioButtons.renderVerticalContainer}
        selectedOption={this.state.selectedOption }
      /> 
      {/* <Text>Selected option: {this.state.selectedOption || 'none'}</Text> */}
    </View>

      <TouchableOpacity  style={styles.Rectangle }
        onPress={() => this.props.navigation.navigate('YourSavingsScreen')}
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