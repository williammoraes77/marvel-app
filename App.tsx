import 'react-native-gesture-handler';

import { useFonts, Roboto_300Light, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Routes } from '@src/routes';
import theme from '@styles/theme';
// import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import { HeroProvider } from '@src/hooks/hero';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <HeroProvider>
        <Routes />
      </HeroProvider>
    </ThemeProvider>
  );
}
