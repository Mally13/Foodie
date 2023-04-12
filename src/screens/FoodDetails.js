import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import { recommended } from '../external_data/externalData';

const FoodDetails = (props) => {
  const route = useRoute();
  console.log(route.params.foodItemDetails.image)
  const { details} = route.params.foodItemDetails;
  const { fullDetails } = recommended.filter(Item =>{
    return Item.id === route.params.foodItemDetails;
  })
  console.log(fullDetails)

  return (
    <View  style={{ flex: 1, justifyContent: "center", alignItems: "center", color: 'black' }}>
<Text>
  {fullDetails.title}
</Text>
      {/* <ImageBackground
        source={fullDetails.image}
        resizeMode='cover'
        style = {{ width: "100%", height: "300",backgroundColor:"#00B4A6"}}
        >
      </ImageBackground> */}

    </View>
  )
}

export default FoodDetails