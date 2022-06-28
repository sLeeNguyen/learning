import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance, View } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Browse from './screens/Browse';
import Sharing from './screens/Sharing';
import Summary from './screens/Summary';
import { ThemeMode } from './types';
import * as SplashScreen from 'expo-splash-screen';

const THEME_PERSISTENCE_KEY = 'theme_mode';

const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={size} />;

export type RootBottomTabPramList = {
  Summary: undefined;
  Sharing: undefined;
  Browse: undefined;
};

const SCREENS = {
  Summary: { title: 'Summary', icon: getTabBarIcon('heart'), component: Summary },
  Sharing: { title: 'Sharing', icon: getTabBarIcon('account-multiple'), component: Sharing },
  Browse: { title: 'Browse', icon: getTabBarIcon('view-grid'), component: Browse },
};

const BottomTab = createBottomTabNavigator<RootBottomTabPramList>();

function App() {
  const prefersDarkMode = Appearance.getColorScheme() === 'dark';

  const [theme, setTheme] = useState(DefaultTheme);

  const [isReady, setIsReady] = useState<boolean>(false);

  const paperTheme = useMemo<Theme>(() => {
    const t = theme.dark ? PaperDarkTheme : PaperLightTheme;

    return {
      ...t,
      colors: {
        ...t.colors,
        surface: theme.colors.card,
        accent: theme.dark ? 'rgb(255, 55, 95)' : 'rgb(255, 45, 85)',
      },
    };
  }, [theme.colors, theme.dark]);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        const storedTheme = await AsyncStorage.getItem(THEME_PERSISTENCE_KEY);
        let m: ThemeMode = prefersDarkMode ? 'dark' : 'light';
        if (storedTheme === 'dark') {
          m = 'dark';
        } else if (storedTheme === 'light') {
          m = 'light';
        } else {
          AsyncStorage.setItem('theme', m);
        }
        setTheme(m === 'dark' ? DarkTheme : DefaultTheme);
      } catch (error) {
        console.error(error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, [prefersDarkMode]);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <NavigationContainer theme={theme}>
          <BottomTab.Navigator
            initialRouteName="Summary"
            screenOptions={{
              headerShown: true,
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: 'transparent',
              },
              tabBarLabelStyle: {
                fontSize: 12,
              },
            }}
          >
            {(Object.keys(SCREENS) as (keyof typeof SCREENS)[]).map((name) => (
              <BottomTab.Screen
                key={name}
                name={name}
                component={SCREENS[name].component}
                options={{
                  title: SCREENS[name].title,
                  tabBarIcon: SCREENS[name].icon,
                }}
              />
            ))}
          </BottomTab.Navigator>
        </NavigationContainer>
        <View onLayout={onLayoutRootView} />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default registerRootComponent(App);
