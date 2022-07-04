import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperLightTheme } from 'react-native-paper';
import deepmerge from 'deepmerge';

export const LightTheme: ReactNativePaper.Theme = deepmerge(Object.assign({}, PaperLightTheme), {
  colors: {
    primary: '#0c7dff',
    secondary: '#a0a7af',
    background: '#ffffff',
    surface: '#eeeeee',
    text: '#000000',
    textSecondary: '#737373',
    success: '#37c74b',
    error: '#e8443b',
  },
});

export const DarkTheme: ReactNativePaper.Theme = deepmerge(Object.assign({}, PaperDarkTheme), {
  colors: {
    primary: '#0c7dff',
    secondary: '#a0a7af',
    background: '#ffffff',
    surface: '#eeeeee',
    text: '#000000',
    textSecondary: '#737373',
    success: '#37c74b',
    error: '#e8443b',
  },
});
