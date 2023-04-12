import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        {/* <Stack.Screen name="PersonalData" component={PersonalData} /> */}
      </Stack.Navigator>
    );
  };
  
  export default StackScreens;
  