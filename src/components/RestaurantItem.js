import { View, Image, Text } from "react-native";
import React from "react";

const RestaurantItem = ({ RestaurantItem, marginLeft, marginRight }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginTop: 20,
        padding: 8,
        marginLeft: marginLeft,
        margin: marginRight,
        borderRadius: 12,
        height: 80,
        width: 300,
        display:"flex",
        flexDirection: "row",
        justifyContent:"space-between"

      }}
    >
      <View>
        <Image
          source={RestaurantItem.image}
          resizeMode="contain"
          style={{ width: 100, height: 64, borderRadius: 8 }}
        />
      </View>

      <View style={{ paddingHorizontal: 12 , display: "flex", flexDirection: "column"}}>
      <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: "700" }}>
          {RestaurantItem.specialty}
        </Text>
        <Text numberOfLines={1} style={{ fontSize: 14, fontWeight: "600" }}>
          {RestaurantItem.title}
        </Text>
                {/* rating */}
                <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "transparent",
              position: "absolute",
              paddingVertical: 6,
              borderRadius: 12,
              bottom: 0,
              left: 10
            }}
          >
          <View style={{ justifyContent: "center", paddingRight: 6 }}>
            <Image
              source={require("../assets/icons/star.png")}
              style={{ width: 12, height: 12 }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={{fontWeight: '600'}}>{RestaurantItem.rating}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: "#00CFAB",
          }}
        >
          ${RestaurantItem.price.toFixed(2)}
        </Text>

      </View>
    </View>

    
  );
};

export default RestaurantItem;
