import React, { useContext, useState } from 'react';
import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CartContext } from '../contexts/CartContext';
import CartHeader from '../components/CartHeader';
import CartItem from '../components/CartItem';
import TotalPrice from '../components/TotalPrice';
import { SwipeListView } from 'react-native-swipe-list-view';

const Cart = () => {
  const { cartItems,removeFromCart, clearCart } = useContext(CartContext);
  // const [cartItemsTotalZero, setCartItemsTotalZero] = useState(false);

  const onNavigate = useNavigation();
  const onPressShop = () => {
    onNavigate.navigate("HomeScreen");
  };
  const handleClearCart = () => {
    clearCart();
  };
  const handleDeleteItem =(itemId) => {
    removeFromCart(itemId);
  };
  return(
    <View style= {{
        backgroundColor:'white',
        height:'100%',
        flexDirection:'column'
    }}>
      <View style={{
        display:"flex",
        paddingHorizontal:4,
      }}>
        <CartHeader/> 
      </View>
      <View style={{height:'90%',backgroundColor:'#ffffff'}}>
      {/* {cartItemsTotalZero && <View 
          style={{
            height:'50%',
            backgroundColor:'#ebebeb',
            marginHorizontal: 4,
            borderBottomRightRadius: 12,
            borderBottomLeftRadius:12,
            textAlign:'center',
            justifyContent:'center',
          }}
        >
          <Text numberOfLines={1} style={{fontWeight:'bold', textAlign:'center'}}>No items in your cart. Click the button below to shop</Text>
          <Text numberOfLines={1} style={{fontWeight:'bold', textAlign:'center'}}>Click the button below to shop</Text>
          <View>
              <TouchableOpacity onPress={onPressShop()}>
                  <View style={{
                      marginTop: 40,
                      backgroundColor:'#E17051',
                      borderRadius: 12,
                      alignText:'center',
                      paddingVertical:8,
                      justifyContent:'center',
                      paddingHorizontal:8,
                      marginHorizontal:100
                  }}>
                      <Text style={{margin:'auto',fontSize:16, fontWeight:'900',color:'white',textAlign:'center' }}>Shop</Text>
                  </View>
              </TouchableOpacity> 
          </View>

        </View>} */}

      
        <View >
          <SwipeListView
            data= {cartItems}
            showsVerticalScrollIndicator={false}
            disableRightSwipe={true}
            rightOpenValue={-75}
            style={{
              height:'50%',
              backgroundColor:'#ebebeb',
              marginHorizontal: 4,
              borderBottomRightRadius: 12,
              borderBottomLeftRadius:12,
            }}
            vertical
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => {
              return(
                <CartItem
                  OrderItem={item}
                  />
              );
            }}
            renderHiddenItem={(data, rowMap) =>(
              <View 
                style ={{
                  position:'absolute',
                  top:13,
                  borderRadius: 12,         
                  backgroundColor: "red",
                  marginHorizontal:12,
                  width:324,
                  height:80,
                  flexDirection: "column",
                  textAlign:'center',
                  }}>
                <TouchableOpacity onPressIn={() => handleDeleteItem(data.item.id) }>
                    <Image source={require('../assets/icons/delete.png')}
                        style={{width:40, height:40, position:'absolute', right:16, top:16, tintColor:'white'}}
                    />
                </TouchableOpacity>
            </View>
            )}
            />            
            <TotalPrice/>
        </View>
          
      </View>

    </View>
  );
};
export default Cart;