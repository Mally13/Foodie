import { View, Text, Image, TextInput, Platform, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const CartHeader = () => {
  return (
    <View
      style={{
        width:"100%",
        // paddingVertical:4,
      }}
    >
      {/* menu icons */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 60 : 40,
          marginHorizontal: 8,
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <View style={{justifyContent: "center"}}>
          <Image
            source={require("../assets/icons/arrow.png")}
            style={{ width: 25, height: 25, tintColor: "#000", backgroundColor:"white", padding:16, borderRadius:8 }}
          />
        </View>
        <View style={{justifyContent: "center", padding:16, marginLeft:40}}>
            <Text style={{fontSize: 18, fontWeight: "700"}}>Cart Summary</Text>
        </View>
      </View>

    </View>
  );
};

export default CartHeader;
