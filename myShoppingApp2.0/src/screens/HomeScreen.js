import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  return (
    <View style={{backgroundColor:'white', flex:1}}>
       
      <View style={styles.ourstoryline}>
        <View>
          <Text style={styles.ourstory}>O U R  S T O R Y</Text>
        </View>

        <View style={{flexDirection:'row'}}>

          <View style={styles.ourstoryiconsposition}>
            <View style={styles.ourstoryiconcircle}>
              <Image source={require('../assets/Listview.png')}/>
            </View>
          </View>

          <View style={styles.ourstoryiconsposition}>
            <View style={styles.ourstoryiconcircle}>
              <Image source={require('../assets/Filter.png')}/>
            </View>
          </View>

        </View>
      </View>
      <View>
        <ProductList/>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  ourstoryline:{
    flexDirection:'row', 
    marginLeft:21, 
    justifyContent:'space-between', 
    marginHorizontal:15, 
    marginTop:10,
    marginBottom:14
  },
  ourstory:{
    fontSize:17,
    fontFamily:'tenorsans',
    marginTop:9
  },
  ourstoryiconsposition:{
    flexDirection:"row", 
    marginHorizontal:5
  },
  ourstoryiconcircle:{
    backgroundColor: '#F9F9F9', 
    borderRadius:20, 
    width:38, 
    height:38, 
    justifyContent:'center', 
    alignItems:'center'
  }

})

export default HomeScreen;

