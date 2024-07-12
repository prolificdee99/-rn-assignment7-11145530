import React from "react";
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { useCart } from "../context/CartProvider";
import { useNavigation } from "@react-navigation/native";



const CartList = () => {
    const { cartItems, removeFromCart } = useCart();
    const navigation = useNavigation();

    const renderItem = ({item}) => (
        <View style={{flexDirection:'row'}}>
            <View>
                <Image style={styles.cartImage} 
                       source={{uri: item.image}}
                       resizeMode="contain"
                       />
            </View>
            <TouchableOpacity style={styles.removeImage} onPress={() => removeFromCart(item.id)}>
                <Image source={require('../assets/remove.png')}/>
            </TouchableOpacity>
            <View>
                <TouchableOpacity onPress={() => {
                    console.log("Item clicked:", item);
                    navigation.navigate('ProductDetail', { productId: item.id });
                }}>
                    <View style={styles.textPosition}>
                    <View>
                            <View>
                                <Text numberOfLines={4} style={styles.title1}>{item.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.title2}>{item.category}</Text>
                            </View>
                            <View>
                                <Text style={styles.title3}>${item.price ? item.price.toFixed(2) : '0.00'}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    )

    const totalPrice = cartItems.reduce((sum, item) => {
        const price = item.price ? parseFloat(item.price) : 0;
        return sum + price;
    }, 0);

    return(
        <View>
        <FlatList
            data = {cartItems}
            renderItem = {renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={1}
            contentContainerStyle={styles.cartListContainer}
        />
        <CheckoutFooter total={totalPrice} />
        </View>

  );
}



const CheckoutFooter = ({total}) => {
    const { clearCartItems } = useCart();
  
    return(
    <View style={styles.footerContainer}>
        <View style={styles.estline}>
            <View><Text style={styles.este}>EST. TOTAL</Text></View>
            <View><Text style={styles.estMoney}>${total.toFixed(2)}</Text></View>
        </View>

        <View style={styles.blackfooter}></View>
      
            <TouchableOpacity style={styles.checkoutview} onPress={() => { console.log('Checkout pressed'); clearCartItems();}}>
                <View style={{marginHorizontal:10}}>
                    <Image style={styles.shoppingImage} source={require('../assets/shoppingBag.png')}/>
                </View>
                <View>
                    <Text style={styles.footcheckoutext}>CHECKOUT</Text>
                </View>
            </TouchableOpacity>
       
    </View>
    );
    
};

const styles = StyleSheet.create({
    cartListContainer:{
    marginTop:25,
    paddingBottom:470
  },

  removeImage:{
    position: 'absolute',
    zIndex:1,
    top: 100,
    left: 305,
  },
  cartImage:{
    width:100,
    height:130, 
    marginBottom:25,
    marginLeft:28
  },
  textPosition:{
    marginLeft:13, 
    marginBottom:22,
    marginTop:25,
    width:200
  },
  title1:{
        fontSize:14,
        marginTop:3,
        fontFamily:'tenorsans'
    },
    title2:{
        fontSize:12,
        marginTop:3,
        color:'#555555',
        fontFamily:'tenorsans'
    },
    title3:{
        fontSize:16,
        marginTop:3,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    estline:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginHorizontal:37, 
        marginLeft:25,
        paddingBottom: 17,
        paddingTop:15,
        backgroundColor:'white'
    },
    este:{
        marginTop:6,
        fontSize:14,
        fontFamily:'tenorsans'
    },
    estMoney:{
        fontSize:20,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    blackfooter:{
        backgroundColor:'black',
        width:'100%',
        height: 80
    },
    checkoutview:{
        flexDirection:'row', 
        justifyContent:'center',
        marginVertical: 20,
        marginTop:-50
    },
    footcheckoutext:{
        color:'white', 
        fontSize:16, 
        fontFamily:'tenorsans' 
    },
    shoppingImage:{
        tintColor:'white', 
        width:26, 
        height:26, 
        top:-3 
    },
    footerContainer:{
        marginTop:581,
        marginBottom:0,
        position: 'absolute',
        width:'100%'
    },
    mainParent:{
    }
})

export default CartList;



