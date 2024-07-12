import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import BlogScreen from '../screens/BlogScreen';
import ClothingScreen from '../screens/ClothingScreen';
import ElectronicScreen from '../screens/ElectronicScreen';
import JeweleryScreen from '../screens/JeweleryScreen';
import LocationsScreen from '../screens/LocationsScreen';
import ProductDetail from '../screens/ProductDetail';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeader = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image style={styles.menuImage} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View style={styles.logoPosition}>
        <Image style={styles.logoImage} source={require('../assets/Logo.png')}/>
      </View>

      <View style={styles.searchCartContainer}>
        <Image style={styles.searchImage} source ={require('../assets/Search.png')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.shoppingBagImage} source ={require('../assets/shoppingBag.png')}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};
const CustomHeaderProductDetails = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.menuImage} source={require('../assets/menu.png')} />
      </TouchableOpacity>

      <View style={styles.logoPosition}>
        <Image style={styles.logoImage} source={require('../assets/Logo.png')}/>
      </View>

      <View style={styles.searchCartContainer}>
        <Image style={styles.searchImage} source ={require('../assets/Search.png')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image style={styles.shoppingBagImage} source ={require('../assets/shoppingBag.png')}/>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};
const CustomHeaderCart = () => {
  const navigation = useNavigation(); 
  return (
    <View style={{flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{marginLeft:143}}>
        <Image style={styles.logoImage} source={require('../assets/Logo.png')}/>
      </TouchableOpacity>

      <View style={styles.searchForCartContainer}>
        <Image style={styles.searchForCart} source ={require('../assets/Search.png')}/>
      </View>
      
    </View>
  );
};
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props}>
    <View style={{marginVertical:23}}>
      <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
        <Image source={require('../assets/Close.png')} style={styles.closeImage}  />
      </TouchableOpacity>
      <Text style={styles.nameInDrawer}>E R I C  A T S U</Text>
      <View style={styles.nameInDrawerLine}></View>
    </View>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);


const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainDrawer" component={MainDrawerNavigator} />
          <Stack.Screen name="Cart" component={CartScreen} 
                        options={{ 
                          headerShown: true,
                            headerTitle: '',
                            headerLeft: () => <CustomHeaderCart />,
                            headerStyle: {
                              backgroundColor: '#ffffff',
                            }
                        }} 
                        
          />
          <Stack.Screen name='ProductDetail' component={ProductDetail} 
                        options={{
                            headerShown: true,
                            headerTitle: '',
                            headerLeft: () => <CustomHeaderProductDetails />,
                            headerStyle: {
                              backgroundColor: '#ffffff',
                            }
                         }}
          />
        </Stack.Navigator>
  );
};

const MainDrawerNavigator =() =>{
  return (
    <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#ffffff',
            width: 226,
          },
          drawerLabelStyle: {
            fontFamily: 'tenorsans',
            fontSize: 17, 
            marginLeft: 1, 
            color:'black'
          },
        }}>
            <Drawer.Screen name="Store" 
                           component={HomeScreen}
                           options={{ headerLeft: () => <CustomHeader/>,
                                      headerTitle:''}}
            />
            <Drawer.Screen name="Locations" 
                           component={LocationsScreen}          
            />
            <Drawer.Screen name="Blog" 
                           component={BlogScreen}          
            />
            <Drawer.Screen name="Jewelery" 
                           component={JeweleryScreen}          
            />
            <Drawer.Screen name="Electronic" 
                           component={ElectronicScreen}          
            />
            <Drawer.Screen name="Clothing" 
                           component={ClothingScreen}          
            />  
        </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  menuImage:{
    marginLeft:19, 
    width:30, 
    height:30
  },
  logoImage:{
    width:95, 
    height:35
  },
  logoPosition:{
    marginLeft:93
  },
  searchCartContainer:{
    flexDirection:'row', 
    marginLeft:38
  },
  searchImage:{
    marginHorizontal:10, 
    width:33, 
    height:33, 
    marginTop:-1
  },
  shoppingBagImage:{
    width:30, 
    height:30
  },
  searchForCart:{
    width:33, 
    height:33, 
    marginTop:-1
  },
  searchForCartContainer:{
    flexDirection:'row', 
    marginLeft:78
  },
  closeImage:{
    height:25, 
    width:25, 
    marginLeft:13, 
    marginTop:-18
  },
  nameInDrawer:{
    fontFamily:'tenorsans', 
    marginTop:23, 
    marginLeft:18, 
    fontSize:16, 
    marginBottom:11
  },
  nameInDrawerLine:{
    backgroundColor:'#DD8560', 
    width:120, 
    height:1, 
    marginLeft:23, 
    marginBottom:-10
  }

  


  

})





export default AppNavigator;








