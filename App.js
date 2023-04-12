import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import StackScreens from './src/navigation/StackScreens';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
          backgroundColor="#00BFA9"
          barStyle="light-content"
        />
      <StackScreens/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    innerHeight: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#F6FBFC',
  },
});
