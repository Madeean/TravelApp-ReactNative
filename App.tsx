import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import {useCallback} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {OnBoarding} from "./screens";
import BottomTabNavigation from "./navigation/BottomTabNavigation";

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  })

  const onLayoutRootView = useCallback(async () =>{
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name ='OnBoard' component={OnBoarding} options={{headerShown: false}} />
          <Stack.Screen name ='Bottom' component={BottomTabNavigation} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
