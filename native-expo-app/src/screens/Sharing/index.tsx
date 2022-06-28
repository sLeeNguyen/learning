import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Sharing() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Sharing Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
  },
});
