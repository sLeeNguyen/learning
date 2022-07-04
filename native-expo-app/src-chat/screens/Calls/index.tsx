import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Calls() {
  const theme = useTheme();

  return (
    <View>
      <Text>Calls screen</Text>
    </View>
  );
}
