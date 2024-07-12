import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CartList from '../components/CartList';
import { useCart } from '../context/CartProvider';



const CartScreen = () => {
  const { cartItems } = useCart();

  return (
    <View style={{backgroundColor:'white', flex:1}}>

      <View style={styles.checkout}>
        <View>
          <Text style={styles.checkoutText}>
            C H E C K O U T
          </Text>
        </View>
        <View>
          <Image style={styles.checkoutline} source={require('../assets/checkoutline.png')}/>
        </View>
      </View>

      
        {cartItems.length > 0 ? (
          <CartList />
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        )}

    </View>
   
  );
};

const styles = StyleSheet.create({
  checkout:{
    flexDirection:'column',
    marginTop:11,
    alignItems:"center"
  },
  checkoutText:{
    fontSize:16,
    fontFamily:'tenorsans'
  },
  checkoutline:{
   height:13,
   width:133
  },
  emptyCartText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'tenorsans',
  }
});

export default CartScreen;

