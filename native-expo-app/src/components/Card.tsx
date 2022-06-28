import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function Card(props: ViewProps) {
  const { children, style, ...other } = props;
  const theme = useTheme();

  return (
    <View {...other} style={[styles.root, style, { backgroundColor: theme.colors.surface }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    padding: 16,
  },
});
