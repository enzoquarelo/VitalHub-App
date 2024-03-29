import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe das Telas
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import { Login } from './src/screens/Login/Login';
import { RecoverPassword } from './src/screens/RecoverPassword/RecoverPassword';
import { VerifyEmail } from './src/screens/VerifyEmail/VerifyEmail';
import { RedefinePassword } from './src/screens/RedefinePassword/RedefinePassword';
import { CreateAccount } from './src/screens/CreateAccount/CreateAccount';
import { Home } from './src/screens/Home/Home';
import { NavigationScreen } from './src/screens/Navigation/NavigationScreen';
import { AppointmentLocation } from './src/screens/AppointmentLocation/AppointmentLocation';
import { ViewPrescription } from './src/screens/ViewPrescription/ViewPrescription';

// Importe das Fontes
import {
  useFonts,
  MontserratAlternates_600SemiBold,
  MontserratAlternates_500Medium,
  MontserratAlternates_700Bold,
} from '@expo-google-fonts/montserrat-alternates';
import {
  Quicksand_500Medium,
  Quicksand_600SemiBold
} from '@expo-google-fonts/quicksand';



const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation">

        <Stack.Screen
          name="Navigation"
          component={NavigationScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RecoverPassword"
          component={RecoverPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RedefinePassword"
          component={RedefinePassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="AppointmentLocation"
          component={AppointmentLocation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ViewPrescription"
          component={ViewPrescription}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}