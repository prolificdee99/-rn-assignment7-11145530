import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useCart } from "../context/CartProvider";
import { useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../api/productApi';


const ProductList = () => {
    const navigation = useNavigation();
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const fetchedProducts = await fetchProducts();
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }
    if (error) {
        return <Text>{error}</Text>;
    }
    
    
    const renderItem = ({item}) => (
        <View>
            <View>
                <TouchableOpacity style={styles.addcircleImage} onPress={() => addToCart(item)}>
                    <Image source={require('../assets/add_circle.png')}/>
                </TouchableOpacity>
                <Image 
                    style={styles.productImage} 
                    source={{uri: item.image}}
                    resizeMode="contain"
                    onError={() => console.log('Image load error for ' + item.title)}
                />
            </View>
            <View style={styles.titlesPositioning}>
            <TouchableOpacity onPress={() => {
                console.log("Item clicked:", item);
                navigation.navigate('ProductDetail', { productId: item.id });
            }}>
               <View style={styles.titles}>
                    <View style={{width:155}}>
                        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.title1}>{item.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.title2}>{item.category}</Text>
                    </View>
                    <View>
                        <Text style={styles.title3}>${item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        
    );

    return (
        <FlatList
            data = {products}
            renderItem = {renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productListContainer}
        />

    )
}

const styles = StyleSheet.create({
    productListContainer:{
        marginHorizontal:20,
        marginLeft:15,
        paddingBottom:80,
        maxHeight:'auto'
    },
    title1:{
        fontSize:14,
        marginTop:9,
        fontFamily:'tenorsans',
    },
    title2:{
        fontSize:12,
        marginTop:3,
        color:'#555555',
        fontFamily:'tenorsans'
    },
    title3:{
        fontSize:16,
        marginTop:9,
        color:'#DD8560',
        fontFamily:'tenorsans'
    },
    titles:{
        flexDirection:'column',
    },
    titlesPositioning:{
        marginLeft:9, 
        marginBottom:22
    },
    productImage:{
        marginHorizontal:7,
        width:160,
        height:211
    },
    addcircleImage:{
        position: 'absolute',
        zIndex:1,
        top: 180,
        left: 142,
    }

})

export default ProductList;