import { View, Text, Image, ImageBackground, FlatList } from "react-native";
import React from "react";

import Section from "../components/Section";
import HeaderContent from "../components/HeaderContent";
import { categories } from "./../external_data/externalData";
import FoodItem from "../components/FoodItem";

const Home = () => {
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
            backgroundColor: "#F8F8F8",
          }}
        >
          <Section title="Recommended" />

          {/* list of food items */}
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
              console.log("items", item);
              return (
                <FoodItem
                  FoodItem={item}
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
