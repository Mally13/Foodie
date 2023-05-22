import { View, Image, Text,StyleSheet, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { CartContext } from '../contexts/CartContext';
import React, { useContext, useState } from 'react';


const TotalPrice = () => {
    const {finalTotal} = useContext(CartContext);
    console.log(finalTotal);
    const discount = () =>{
        if (finalTotal !== 0){
            return (finalTotal / 98).toFixed(2);
        }
        else{
            return (0).toFixed(2);
        } 
    };
    const delivery = () =>{
        if (finalTotal !== 0){
            return (5).toFixed(2);
        }
        else{
            return (0).toFixed(2);
        }
    }
    const totalAmt = () =>{
        if (finalTotal !== 0){
            let tempDisc = discount();
            let tempDel = delivery();
            let tempTot = finalTotal - Number(tempDisc) + Number(tempDel);
            return (tempTot.toFixed(2));
        }else{
            return (0).toFixed(2);
        }
    }
    return(
        <View style= {{
            backgroundColor: '#00524C',
            minHeight:'40%',
            borderRadius:12,
            marginVertical: 20,
            marginHorizontal: 10,
            paddingVertical:16,
            paddingHorizontal:8
        }}>
            <View style={{flex:0.5}}>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Total Item Price</Text>
                    <Text style={styles.tableCell2}>$ {(finalTotal).toFixed(2)}</Text>                    
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Delivery</Text>
                    <Text style={styles.tableCell2}>$ {delivery()}</Text>  
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.tableCell}>Discount</Text>
                    <Text style={styles.tableCell2}>-$ {discount()}</Text>  
                </View>

            </View>
            <View style={{flex:0.5, paddingVertical:8, borderTopColor:'white', marginHorizontal:4, borderTopWidth:1, borderStyle:'dashed'}}>
                <View style={styles.tableRow}> 
                    <Text style={styles.total}>Total Amount To Be Paid</Text>
                    <Text style={styles.total2}>{totalAmt()}</Text>  
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor:'white',
                            borderRadius: 12,
                            alignText:'center',
                            paddingVertical:16,
                            justifyContent:'center',
                            paddingHorizontal:120,                    
                        }}>
                            <Text style={{margin:'auto',fontSize:16, fontWeight:'900' }}>Place Order</Text>
                        </View>
                    </TouchableOpacity> 
                </View>
            </View>

        </View>
    );
};
export default TotalPrice;

const styles = StyleSheet.create({
    tableCell:{
        fontWeight:'bold',
        fontSize:16,
        color:'white',
        width: '50%',
        paddingHorizontal:8

    },
    total:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        width: '50%',
        paddingHorizontal:0

    },
    total2:{
        fontWeight:'bold',
        fontSize:18,
        color:'white',
        width: '50%',
        paddingHorizontal:8,
        textAlign:'right'

    },
    tableCell2:{
        fontSize:16,
        color:'white',
        width: '50%',
        paddingHorizontal:8,
        textAlign:'right'


    },
    tableRow:{
        flexDirection: 'row',
        paddingVertical: 4,
        flex:1 

     }
   });
