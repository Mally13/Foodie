import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import FoodDetails from "../screens/FoodDetails";
import Cart from "../screens/Cart";

const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    );
  };
  
  export default StackScreens;
  