import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import RestaurentScreen from "./src/screens/RestaurentScreen";

const Stack=createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ title: 'DriverLoo App' }} component={Home}/>
          <Stack.Screen name="Restaurent" options={{ title: 'Restaurent Detail' }} component={RestaurentScreen}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
