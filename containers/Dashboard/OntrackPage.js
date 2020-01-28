import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions  } from 'react-native';
import DefaultHeader from '../../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tabs from 'react-native-tabs';
export default class OntrackScreen extends React.Component {
  state = {page:'all'}
  static navigationOptions = {
    header: () => <DefaultHeader />
  }
  
  render() {

    return(
      <ScrollView style={styles.container}> 
        <View>
          <Text style={styles.HeaderText}>You’re on track to own a <Text style={styles.HeaderTextIn}> $230,000 home </Text> by <Text style={{textDecorationLine: 'underline'}}>January, 2025</Text> </Text>
        </View>

        <TouchableOpacity  style={styles.Rectangle } onPress={() => this.props.navigation.navigate('WelcomePageScreen')} >
             <Text style={styles.Next }>First Step</Text>  
        </TouchableOpacity>

         <Text style={styles.TopTabHeading}> Future Tasks </Text>
        <View style={styles.Tcontainer}>
            <Tabs selected={this.state.page} style={{top:0, textAlign:'left',margin:0, width:100}}
                selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
                <Text name="all" style={styles.TabHeading} selectedStyle={{color:'#FFA400',fontSize:11,fontWeight:'bold',fontFamily: "open-sans-bold",letterSpacing:-0.31 }} >All</Text>
                <Text name="completed" style={styles.TabHeading} selectedStyle={{color:'#FFA400',fontSize:11,fontWeight:'bold',fontFamily: "open-sans-bold",letterSpacing:-0.31}}>Completed</Text>
            </Tabs>
          
           
            { this.state.page =='all' ? (
            <View style={styles.welcome}> 

                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    We need to establish a dedicated savings account
                    </Text>
                    <Text style={styles.TabContent}>
                    A big part of making progress towards saving a downpayment is an account dedicated to just that.
                    </Text>
                    <Text style={styles.ContentLink}>Take Action</Text>
                 </View>

                  <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    To meet your downpayment goals, you need to save more.
                    </Text>
                    <Text style={styles.TabContent}>
                    A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
                 </View>

                 <View style={styles.ContentBox}>
                    <Text style={styles.TabContentHeading}>
                    Improve your credit score
                    </Text>
                    <Text style={styles.TabContent}>
                    A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
                 </View>

                 <Text style={styles.CompleteTaskLink}>Your completed tasks go here</Text>
            </View>
        ):<Text></Text>}


          { this.state.page =='completed' ? (
              <View style={styles.welcome}>
                    <Text style={styles.TabContentHeading}>
                         Congrats! We're ready to collect documentation
                    </Text>
                    <Text style={styles.TabContent}>
                        A small improvement on your credit score could lower your monthly payments by $200/mo
                    </Text>
                    <Text style={styles.ContentLink}>Learn More</Text>
              </View>
          ):<Text></Text>  }

      
        </View> 

      </ScrollView>
    )   
  }
} 

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingLeft:30,
    paddingRight:30,
    paddingTop:15,
    backgroundColor:'#FFFFFF'
  },
  PageTitle: {
    color: '#989898',
    fontFamily: "open-sans-SemiBoldItalic",
    fontSize: 14,
    fontStyle: 'italic',	
    fontWeight: '600',
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginBottom:50
  },
  HeaderText:{
    color: '#232528',	
    fontFamily: "open-sans-bold",
    fontSize: 24,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,	
    lineHeight: 33,
    paddingLeft:0,
    paddingRight:15
  },
  HeaderTextIn:{
    textDecorationLine: 'underline',
    color:'#00DB8A' 
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
    color: '#00DB8A',	
    fontFamily: "open-sans-bold",	
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -0.26,
    lineHeight: 55,
    textAlign: 'center', 
  },
  TopTabHeading:{
    color: '#505050',	
    fontFamily: "open-sans-bold",
    fontSize: 17,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,	
    lineHeight: 23
  },
  Tcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30
  },
  TabHeading:{
    color:'#505050',
    fontSize:11,
    fontWeight:'bold',
    fontFamily: "open-sans-bold",
    letterSpacing:-0.31,
    textAlign: 'left',
    width:'100%'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 60, 
    justifyContent: 'center',
    bottom:0,

  },
  ContentBox:{
    borderWidth:1,
    padding:20,
    borderColor:'#EAF6FF',
    marginTop:20
  },
  TabContentHeading:{
    color: '#232528',	
    fontFamily: "open-sans-bold",	
    fontSize: 17,	
    fontWeight: 'bold',	
    letterSpacing: -0.39,
    lineHeight: 23,
    marginBottom:15
  },
  TabContent:{
    color: '#505050',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,	
    letterSpacing: -0.39,	
    lineHeight: 19
  },
  ContentLink:{
    color: '#0DBBF4',	
    fontFamily: "open-sans-SemiBoldItalic",	
    fontSize: 14,	
    fontStyle: 'italic',
    fontWeight: '600',
    letterSpacing: -0.39,	
    lineHeight: 19,
    marginTop:5
  },
  CompleteTaskLink:{
    color: '#AEAEAE',	
    fontFamily: "open-sans-Regular",	
    fontSize: 14,
    letterSpacing: -0.39,
    lineHeight: 19,
    textAlign:'center',
    marginTop:30
  }
}); 