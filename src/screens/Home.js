import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Section from "../components/Section";
import HeaderContent from "../components/HeaderContent";
import { nearyou, recommended } from "./../external_data/externalData";
import FoodItem from "../components/FoodItem";
import RestaurantItem from "../components/RestaurantItem";

const Home = () => {
  const onNavigate = useNavigation();

  const onNavigation = (item) => {
    console.log("onPress Item", item);
    onNavigate.navigate("FoodDetails", {
      foodItemDetails: item,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/imgBG.jpg")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", backgroundColor:"#00B4A6"}}
      >
        {/* Header content */}
        <HeaderContent />

        {/* categories */}
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: "#F0F8FA",
          }}
        >
          <Section title="Recommended" />

          {/* list of food items */}
          <FlatList
            data={recommended}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <FoodItem
                  FoodItem={item}
                  marginLeft={index == 0 ? 20 : 12}
                  marginRight={index == item.length - 1 ? 20 : 0}
                  onPressItem={() => onNavigation(item)}
                  />
              );
            }}
          />
          <Section title="Near you" />
          {/* list of restaurants */}
          <FlatList
            data={nearyou}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <RestaurantItem
                  RestaurantItem={item}
                  marginLeft={index == 0 ? 20 : 12}
                  marginRight={index == item.length - 1 ? 20 : 0}
                />
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
