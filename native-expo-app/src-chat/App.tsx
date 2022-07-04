import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance, View } from 'react-native';
import { Avatar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Calls from './screens/Calls';
import Chats from './screens/Chats';
import People from './screens/People';
import Stories from './screens/Stories';
import { DarkTheme, LightTheme } from './theme';
import { RootBottomTabParamList } from './types/navigation';

const THEME_PERSISTENCE_KEY = 'theme_mode';

const getTabBarIcon =
  (name: string) =>
  ({ color, size }: { color: string; size: number }) =>
    <MaterialCommunityIcons name={name} color={color} size={size} />;

const SCREENS = {
  Chats: { title: 'Chats', icon: getTabBarIcon('chat'), component: Chats },
  Calls: { title: 'Calls', icon: getTabBarIcon('video'), component: Calls },
  People: { title: 'People', icon: getTabBarIcon('account-multiple'), component: People },
  Stories: { title: 'Stories', icon: getTabBarIcon('book-open-blank-variant'), component: Stories },
};

// const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();
const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

function App() {
  const prefersDarkMode = Appearance.getColorScheme() === 'dark';

  const [theme, setTheme] = useState(NavigationDefaultTheme);

  const [isReady, setIsReady] = useState<boolean>(false);

  const paperTheme = useMemo<ReactNativePaper.Theme>(() => {
    return theme.dark ? LightTheme : DarkTheme;
  }, [theme.dark]);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();

        const storedTheme = await AsyncStorage.getItem(THEME_PERSISTENCE_KEY);
        let m = prefersDarkMode ? 'dark' : 'light';
        if (storedTheme === 'dark') {
          m = 'dark';
        } else if (storedTheme === 'light') {
          m = 'light';
        } else {
          AsyncStorage.setItem('theme', m);
        }
        setTheme(m === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme);
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
    <React.StrictMode>
      <PaperProvider theme={paperTheme}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <NavigationContainer theme={theme}>
            <BottomTab.Navigator
              initialRouteName="Chats"
              screenOptions={{
                headerShown: false,
                headerShadowVisible: false,
                headerStyle: {
                  // backgroundColor: 'transparent',
                },
                headerLeftContainerStyle: {
                  paddingLeft: 16,
                },
                headerRightContainerStyle: {
                  paddingRight: 16,
                },
                headerTintColor: paperTheme.colors.text,
                headerTitleStyle: {
                  fontSize: 20,
                  fontWeight: '700',
                },
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: '500',
                },
                tabBarStyle: {},
              }}
              sceneContainerStyle={{
                backgroundColor: paperTheme.colors.background,
              }}
            >
              <BottomTab.Screen
                name="Chats"
                component={Chats}
                options={{
                  title: 'Chats',
                  tabBarIcon: getTabBarIcon('chat'),
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerLeft: () => {
                    return <Avatar.Image size={28} source={require('assets/avt.png')} />;
                  },
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerRight: () => {
                    return (
                      <MaterialCommunityIcons color={paperTheme.colors.primary} size={28} name="square-edit-outline" />
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name="Calls"
                component={Calls}
                options={{
                  title: 'Calls',
                  tabBarIcon: getTabBarIcon('video'),
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerLeft: () => {
                    return <Avatar.Image size={28} source={require('assets/avt.png')} />;
                  },
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerRight: () => {
                    return <MaterialCommunityIcons color={paperTheme.colors.primary} size={28} name="plus" />;
                  },
                }}
              />
              <BottomTab.Screen
                name="People"
                component={People}
                options={{
                  title: 'People',
                  tabBarIcon: getTabBarIcon('account-multiple'),
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerLeft: () => {
                    return <Avatar.Image size={28} source={require('assets/avt.png')} />;
                  },
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerRight: () => {
                    return <MaterialCommunityIcons color={paperTheme.colors.primary} size={28} name="contacts" />;
                  },
                }}
              />
              <BottomTab.Screen
                name="Stories"
                component={Stories}
                options={{
                  title: 'Stories',
                  tabBarIcon: getTabBarIcon('book-open-blank-variant'),
                  // eslint-disable-next-line react/no-unstable-nested-components
                  headerLeft: () => {
                    return <Avatar.Image size={28} source={require('assets/avt.png')} />;
                  },
                }}
              />
            </BottomTab.Navigator>
          </NavigationContainer>
          <View onLayout={onLayoutRootView} />
        </SafeAreaProvider>
      </PaperProvider>
    </React.StrictMode>
  );
}

export default registerRootComponent(App);
