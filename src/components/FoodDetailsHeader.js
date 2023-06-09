import { View, Text, Image, TextInput, Platform, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


const FoodDetailsHeaderContent = () => {
  const onNavigate = useNavigation();
  const onNavigation = () => {
    onNavigate.navigate("Cart");
  };
  return (
    <View
      style={{
        flex: Platform.OS === "ios" ? 0.6 : 0.5,
        top :4 ,
        position:"absolute",
        width:"100%"
      }}
    >
      {/* menu icons */}
      <View
        style={{
          marginTop: Platform.OS === "ios" ? 60 : 40,
          marginHorizontal: 17,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{justifyContent: "center"}}>
          <Image
            source={require("../assets/icons/arrow.png")}
            style={{ width: 25, height: 25, tintColor: "#000", backgroundColor:"white", padding:16, borderRadius:8 }}
          />
        </View>
        <TouchableHighlight
          style={{justifyContent: "center", padding:0 }}
          onPress = {() => onNavigation()}
        >
          <Image
            source={require("../assets/icons/bagsm.png")}
            style={{ width: 20, height: 20,  tintColor: "#141414", backgroundColor:"white", padding:16, borderRadius:8  }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FoodDetailsHeaderContent;
