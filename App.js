import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './screens/game';
import Main from './screens/main';
import Rules from "./screens/rules";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Башкы бет" component={Main} />
        <Stack.Screen name="Жаңы оюн" component={Game} />
        <Stack.Screen name="Эрежелер" component={Rules} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}