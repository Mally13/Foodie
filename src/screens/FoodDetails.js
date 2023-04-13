import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import FoodDetailsHeaderContent from '../components/FoodDetailsHeader';
import FoodItemOrder from '../components/FoodItemOrder';


const FoodDetails = (props) => {
  const route = useRoute();
  const details = route.params.foodItemDetails;
  console.log(details)

  return (
    <View style={{
      backgroundColor:'white',
      height:'100%'
    }}>
      <View style={{
        display:"flex",
        paddingHorizontal:4,
      }}>
        <Image
          source={details.image}
          resizeMode="cover"
          style={{height: 320, width: "100%",position:'relative', borderBottomLeftRadius: 26, borderBottomRightRadius: 26 }}
        />
        <FoodDetailsHeaderContent/>
      </View>
      <View>
        <FoodItemOrder FoodItemOrder={details}/>
      </View>
    </View>
  )
}

export default FoodDetails