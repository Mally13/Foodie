import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackScreens from './src/navigation/StackScreens';
import { CartProvider } from './src/contexts/CartContext';

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
          <StatusBar
            backgroundColor="#00BFA9"
            barStyle="light-content"
          />
        <StackScreens/>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    innerHeight: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#F6FBFC',
  },
});
