import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

type ContainerProps = { safeView?: boolean } & (ViewProps | SafeAreaViewProps);

export default function Container({ children, safeView, style, ...other }: ContainerProps) {
  const { colors } = useTheme();
  const Tag = safeView ? SafeAreaView : View;

  return (
    <Tag {...other} style={[styles.root, style, { backgroundColor: colors.background }]}>
      {children}
    </Tag>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
  },
});
