import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps extends ViewProps {
  title?: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  titleStyle?: StyleProp<TextStyle>;
}

export default function AppHeader(props: HeaderProps) {
  const { colors } = useTheme();
  const { title, headerLeft, headerRight, style, titleStyle, ...other } = props;
  return (
    <SafeAreaView {...other} style={[{ backgroundColor: colors.background }, styles.root, style]}>
      {headerLeft}
      <View style={styles.titleContainer}>{title && <Text style={[styles.title, titleStyle]}>{title}</Text>}</View>
      {headerRight}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
});
