import {View, Image, Text, Button} from "react-native";
import { React,useState, useCallback, useContext } from "react";
import CustomButton from "./customButton";
import { CartContext } from "../contexts/CartContext";

const FoodItemOrder = ({FoodItemOrder, children,props}) => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    },[]);

    const {addToCart} = useContext(CartContext);
    const handleAddToCart = () => {
        const FoodItem = {
            id: FoodItemOrder.id,
            title:FoodItemOrder.title,
            price: FoodItemOrder.price,
            image: FoodItemOrder.image,
            quantity: 1,
            restaurant: 'Nairobi',
            total: FoodItemOrder.price  
        }
        console.log(FoodItem)
        addToCart(FoodItem);
    }
    return(
        
        <View
            style ={{
                marginTop: 20,
                paddingHorizontal: 18,
                width:"100%"
            }}
            >
            <View 
                style = {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',                    
                }}
             >
                <Text style={{ fontSize: 18, fontWeight: "700", width:'60%'}}>
                    {FoodItemOrder.title}
                </Text>
                <View style= {{backgroundColor: "#F0F8FA", width:64, height:30, borderRadius:8, display:'flex', flexDirection:"row", justifyContent:'space-evenly', alignItems:'center'}}>
                    
                    <Image
                        source={require('../assets/icons/subtract.png')}
                        style={{width:14, height:14, tintColor:'#DC532E', borderRadius:7}}
                    />
                    <Text style={{ fontSize: 14, fontWeight: "700" , marginHorizontal:4}}>1</Text>
                    <Image
                        source={require('../assets/icons/add.png')}
                        style={{width:18, height:18, tintColor:'#DC532E', borderRadius:7}}
                    />
                </View>
            </View>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:20,
                    alignItems:'center',
                    width:'100%'
                }}
            >
                <View
                    style={{
                        flexDirection:'row',
                        width:"30%"
                    }}
                >
                    <Image
                        source={require('../assets/icons/location-pin.png')}
                        style={{width:18, height:18, tintColor:'#DC532E', paddingTop:4}}
                    />
                    <Text style={{marginLeft:4, fontWeight:"700",fontSize: 14, color:'#A4B6CB' }}>
                        {`${FoodItemOrder.distance} Km`}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection:'row',
                        width:"30%"
                    }}
                >
                    <Image
                        source={require('../assets/icons/star.png')}
                        style={{width:18, height:18, tintColor:'#DC532E',paddingTop:4}}
                    />
                    <Text style={{marginLeft:4, fontWeight:"700",fontSize: 14, color:'#A4B6CB' }}>
                        {`${FoodItemOrder.rating} Ratings`}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection:'row',
                        width:"30%"
                    }}
                >
                    <Image
                        source={require('../assets/icons/chef-platter.png')}
                        style={{width:20, height:20, tintColor:'#DC532E'}}
                    />
                    <Text style={{marginLeft:4, fontWeight:"700",fontSize: 14, color:'#A4B6CB' }}>
                        {`${FoodItemOrder.duration} Min`}
                    </Text>
                </View>

            </View>
            <View style={{marginTop:20,paddingHorizontal:4, display:'flex', width: "100%", flexDirection:'column'}}>
                <Text style={{ fontSize: 16, fontWeight: "700" }}>Description</Text>
                <View style={{flexDirection: 'column'}} >
                    <Text 
                        onTextLayout={onTextLayout}
                        numberOfLines={textShown ? undefined : 3}
                        ellipsizeMode= 'clip'
                        style={{marginTop:10,fontSize: 16, textAlign:'justify', fontWeight:"500", color:'#8F8F8F', lineHeight: 32,}}
                    >
                        {FoodItemOrder.description} 
                    </Text>
                    {
                        lengthMore ? 
                        <Text
                            onPress={toggleNumberOfLines}
                            style={{color: '#00BFA9', fontWeight:'700', position:'absolute',bottom: -20, right: 10,  }}>
                                {textShown ? 'Read less...' : 'Read more...'}
                        </Text>
                        :null
                    }

                </View>
            </View>
            <View style={{width:'100%', height:300, paddingHorizontal:4, marginTop:40,flexDirection:'column', justifyContent:'flex-start'}}>
                <Image 
                    source={require('../assets/images/map.jpeg')}
                    style={{width: "100%", height:180, }}
                />
                <View style={{width:'102%',paddingHorizontal:16, flexDirection:'row',  position: 'absolute', top: 120, left: 0, right:0, justifyContent:'space-between'}}>
                    <CustomButton 
                        title="Chat"
                        // onPress={handlePressChat}
                        buttonColor="white"
                        borderColor="#E17051"
                        textColor="#E17051"
                    />
                    <CustomButton 
                        title="Add Cart"
                        onPress={handleAddToCart}
                        buttonColor="#E17051"
                        borderColor="#E17051"
                        textColor="white"
                    />
                </View>
            </View>

        </View>
    )
}
export default FoodItemOrder