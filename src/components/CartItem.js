import { View, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { React,useState, useCallback, useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const CartItem = ({OrderItem, children, props}) =>{
    const {decreaseQuantity} = useContext(CartContext);
    const {increaseQuantity} = useContext(CartContext);
    const {removeFromCart} = useContext(CartContext);

    const handleDecrease = () => {
        const FoodItem = {
            id: OrderItem.id
        }
        decreaseQuantity(FoodItem);
    }
    const handleIncrease = () => {
        const FoodItem = {
            id: OrderItem.id
        }
        increaseQuantity(FoodItem);
    }

    
    return(
        <TouchableWithoutFeedback>
            <View
                style={{
                    backgroundColor: "transparent",
                    marginTop: 4,
                    marginBottom: 0,
                    padding: 8,
                    marginHorizontal:4,
                    borderRadius: 12,
                    width:344,
                    height: 100,
                    flexDirection:'row'
                }}>
                <View style={{                     
                    borderRadius: 12,         
                    backgroundColor: "#ffffff",
                    width:344,
                    display:"flex",
                    flexDirection: "row",
                    justifyContent:"space-between",
                    textAlign:'center',
                    flex: 1,
                    
                }}>
                    <View style={{flex:0.25, textAlign:'center', height:'100%', marginLeft:4, justifyContent:'space-around'}}>
                        <Image source={OrderItem.image}
                            resizeMode="cover"
                            style={{ width: 64, height: 64, borderRadius: 8 }}
                        />
                    </View>
                    <View style = {{ display: 'flex', flex:0.5, flexDirection:'column', height:64, alignSelf:'center',justifyContent:"space-between"}}>
                        <Text style={{fontSize: 18, fontWeight: "900",}}>{OrderItem.title}</Text>
                        <Text style={{fontSize: 12, fontWeight: "900", color:'grey'}}>{OrderItem.restaurant}</Text>
                        <Text style={{fontWeight:'900', fontSize: 14, color:'#00AFA4'}}>$ {OrderItem.total}</Text>
                    </View>

                    <View style={{justifyContent:"center", alignContent:'center', flex:0.2, marginRight:4}}>
                        <View style= {{backgroundColor: "#F0F8FA", width:64, height:40, borderRadius:8, display:'flex', flexDirection:"row", justifyContent:'space-evenly', alignItems:'center'}}>
                                <TouchableOpacity onPress={handleDecrease}>
                                    <Image
                                        source={require('../assets/icons/subtract.png')}
                                        style={{width:14, height:14, tintColor:'#DC532E', borderRadius:7}}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: 14, fontWeight: "700" , marginHorizontal:4}}>{OrderItem.quantity}</Text>
                                <TouchableOpacity onPress={handleIncrease}>                  
                                    <Image
                                        source={require('../assets/icons/add.png')}
                                        style={{width:18, height:18, tintColor:'#DC532E', borderRadius:7}}
                                    />
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CartItem;