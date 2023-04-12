import { View, Text, Image, TextInput, Platform } from "react-native";
import React, { useState } from "react";


const HeaderContent = () => {
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: Platform.OS === "ios" ? 0.6 : 0.5,
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/menu.png")}
            style={{ width: 25, height: 25, tintColor: "#ffffff" }}
          />
        </View>
        <View style={{ paddingRight: 25, justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/bag.png")}
            style={{ width: 20, height: 20, tintColor: "#ffffff" }}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/bell.png")}
            style={{ width: 20, height: 20, tintColor: "#ffffff" }}
          />
        </View>
      </View>

      {/* header text */}
      <View style={{ marginTop: 30, marginLeft: 16 }}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: "600",
            lineHeight: 30,
          }}
        >
          Delicious food ready to be
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "600",
                lineHeight: 30,
              }}
            >
              delivered to you
            </Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 10, justifyContent: "center" }}>
            <Image
              source={require("../assets/icons/food.png")}
              style={{ width: 25, height: 25 }}
            />
          </View>
        </View>
      </View>

      {/* search bar */}
      <View
        style={{
          backgroundColor: null,
          height: 50,
          borderWidth: 0.5,
          borderColor: "white",
          marginTop: 20,
          flexDirection: "row",
          paddingHorizontal: 15,
          marginHorizontal: 15,
          borderRadius: 12,
        }}
      >
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/icons/search.png")}
            style={{
              width: 20,
              height: 20,
              justifyContent: "center",
              tintColor: "white",
            }}
          />
        </View>

        <TextInput
          autoFocus={false}
          onChangeText={setSearch}
          value={search}
          placeholder={"Search something..."}
          placeholderTextColor={"white"}
          style={{
            color: "black",
            paddingLeft: 12,
            justifyContent: "center",
          }}
        />
      </View>
    </View>
  );
};

export default HeaderContent;
