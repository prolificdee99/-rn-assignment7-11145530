import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { fetchProductDetails } from '../api/productApi';

const ProductDetail = ({route}) => {
    const { productId} = route.params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProductDetails = async () => {
            if (!productId) {
                setError('No product ID provided');
                setLoading(false);
                return;
            }
            try {
                const productData = await fetchProductDetails(productId);
                setProduct(productData);
            } catch (err) {
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };

        loadProductDetails();
    }, [productId]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (!product) {
        return <Text>Loading product details...</Text>;
    }

  return (
    <View style={{backgroundColor:'white', flex:1}}>
        <ScrollView style={styles.scrollView}>
            <Image style={styles.productImage} 
                   source={{ uri: product.image }}
                   resizeMode="contain"
                   />
            <View style={styles.productMainDetails}>

                <View style={styles.productTitleLine}>
                    <View style={{width:250}}>
                        <Text numberOfLines={5} style={styles.productTitle}>{product.title}</Text>
                    </View>
                    <View>
                        <Image style={styles.exportImage} source={require('../assets/Export.png')}/>
                    </View>
                </View>
                
                <View style={{marginTop:5}}>
                    <Text style={styles.productMainDetailsLine2}>{product.category}</Text>
                </View>

                <View style={{marginTop:3}}>
                    <Text style={styles.estMoney}>${product.price}</Text>
                </View>
                <View>
                    <Text style={styles.productDescription}>{product.description}</Text>
                </View>
                
            </View>

            <View style={styles.productsDetails}>
                <View>
                    <Text style={styles.materialsHeading}>M A T E R I A L S</Text>
                </View>
                <View>
                    <Text style={styles.materialsText}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
                </View>

                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotBleach.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Do not use bleach</Text>    
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotTumbleDry.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Do not tumble dry</Text>   
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/DoNotWash.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Dry clean with tetrachloroethylene</Text>
                </View>
                <View style={styles.materialsItems}>
                    <Image source={require('../assets/IronLowTemperature.png')}/>
                    <Text style={styles.materialsItemsPositioning}>Iron at a maximum of 110ºC/230ºF</Text>  
                </View>
            
                <View style={styles.separator}></View>

                <View style={styles.shippingContainer}>
                    <View style={styles.flexDirectionrow}>
                        <Image source={require('../assets/Shipping.png')}/>
                        <Text style={styles.shippingTitle}>Free Flat Rate Shipping</Text>
                    </View>
                    <View>
                        <Image source={require('../assets/Up.png')}/>
                    </View>
                </View>

                <View style={styles.shippingDetailsContainer}>
                    <Text style={styles.shippingDetails}>Estimated to be delivered on</Text>
                    <Text style={styles.shippingDetails}>09/11/2021 - 12/11/2021.</Text>
                </View>
            </View>
        </ScrollView>
        <View style={styles.footer}>
            <View style={styles.footerContent}>
                <View style={styles.flexDirectionrow}>
                    <Image style={{tintColor:'white'}} source={require('../assets/Plus.png')}/>
                    <Text style={styles.basketText}>ADD TO BASKET</Text>
                </View>
                <View>
                    <Image style={{tintColor:'white'}} source={require('../assets/Heart.png')}/>
                </View>
            </View>

        </View>
    </View>
  )
}

export default ProductDetail;

const styles = StyleSheet.create ({
    scrollView:{
        flex:1
    },
    productImage:{
        width:335,
        height:410,
        alignSelf:"center"
    },
    productTitleLine:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    productTitle:{
        fontSize:18,
        fontFamily:'tenorsans'
    },
    exportImage:{
        width:20,
        height:20
    },
    productMainDetails:{
        flexDirection:'column',
        marginHorizontal:34,
        marginTop:20
    },
    estMoney:{
        fontSize:20,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    productMainDetailsLine2:{
        color:'#555555',
        fontFamily:'tenorsans'
    },
    productDescription:{
        fontFamily:'tenorsans',
        marginTop:13,
        marginBottom:10
    },
    materialsHeading:{
        fontFamily:'tenorsans'
    },
    materialsItems:{
        flexDirection:'row',
        marginBottom:18,
        opacity:0.6
    },
    materialsItemsPositioning:{
        marginLeft:9,
        fontFamily:'tenorsans',
        marginTop:3
    },
    productsDetails:{
        flexDirection:'column',
        marginHorizontal:34,
        marginTop:18,
        marginBottom:120
    },
    materialsText:{
        fontSize:15,
        marginBottom:20,
        marginTop:6,
        lineHeight:23,
        opacity:0.6,
        fontFamily:'tenorsans'
    },
    separator:{
        width:270,
        height:1,
        backgroundColor:'#555555',
        marginTop:12,
        opacity:0.4
    },
    footer:{
        backgroundColor:'black',
        width:'100%',
        height: 80
    },
    footerContent:{
        marginHorizontal:22,
        marginVertical: 20,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    basketText:{
        color:'white',
        marginLeft:10
    },
    shippingContainer:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginTop:23, 
        marginLeft:1,
    },
    shippingTitle:{
        marginLeft:10,
        fontFamily:'tenorsans'
    },
        shippingDetails:{
        marginTop:7,
        fontFamily:'tenorsans'
    },
    shippingDetailsContainer:{
        marginLeft:34, 
        opacity:0.6
    },
    flexDirectionrow:{
        flexDirection:'row'
    }
})