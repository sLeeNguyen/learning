import { StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

interface MainLayoutProps {
  children: React.ReactNode;
  safeView?: boolean;
}

export default function MainLayout({ children, safeView }: MainLayoutProps) {
  const { colors } = useTheme();
  const Tag = safeView ? SafeAreaView : View;

  return <Tag style={[styles.root, { backgroundColor: colors.background }]}>{children}</Tag>;
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
    flex: 1,
  },
});
