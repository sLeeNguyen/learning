import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useScrollToTop } from '@react-navigation/native';
import { useRef } from 'react';
import { Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootBottomTabPramList } from 'src/App';
import Card from 'src/components/Card';
import ScreenTitle from 'src/components/ScreenTitle';
import MainLayout from 'src/layouts/MainLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

export default function Summary({ navigation }: BottomTabScreenProps<RootBottomTabPramList>) {
  const theme = useTheme();
  const ref = useRef<ScrollView>(null);

  const handleScroll = (ev: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (ev.nativeEvent.contentOffset.y > 80) {
      navigation.setOptions({
        headerTitle: 'Summary',
        headerShadowVisible: true,
        headerStyle: {
          backgroundColor: '#fff',
        },
      });
    } else {
      navigation.setOptions({
        headerTitle: '',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: 'transparent',
        },
      });
    }
  };

  useScrollToTop(ref);

  return (
    <ScrollView ref={ref} style={styles.root} onScroll={handleScroll} scrollEventThrottle={200}>
      <MainLayout>
        <ScreenTitle title="Summary" showAvatar />
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <Text style={styles.sectionTitle}>Favorites</Text>
            <Text style={[styles.textEdit, { color: theme.colors.primary }]}>Edit</Text>
          </View>
          <Card style={{ marginBottom: 12 }}>
            <View style={styles.cardTop}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="bed-king" size={26} />
                <Text style={[styles.cardTextTitle]}>Sleep</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text>07:04</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} />
              </View>
            </View>
            <View>
              <Text style={[styles.textBold, { marginBottom: 4 }]}>
                <Text style={styles.numberLarge}>7</Text>
                <Text>hrs</Text>
                &nbsp;
                <Text style={styles.numberLarge}>14</Text>
                <Text>mins</Text>
              </Text>
              <Text style={styles.textBold}>Time In Bed</Text>
            </View>
          </Card>

          <Card style={{ marginBottom: 12 }}>
            <View style={styles.cardTop}>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="bed-king" size={26} />
                <Text style={[styles.cardTextTitle]}>Steps</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Text>16:33</Text>
                <MaterialCommunityIcons name="chevron-right" size={24} />
              </View>
            </View>
            <View>
              <Text style={[styles.textBold, { marginBottom: 4 }]}>
                <Text style={styles.numberLarge}>6900</Text>
                <Text>steps</Text>
              </Text>
            </View>
          </Card>

          <Card>
            <View
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 30, marginRight: 8 }} source={require('assets/favicon.png')} />
                <Text style={styles.cardTextTitleLarge}>&nbsp;Show All Health Data</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </Card>
        </View>

        <View style={{ marginTop: 32 }}>
          <View style={{ marginBottom: 8 }}>
            <Text style={styles.sectionTitle}>Trends</Text>
          </View>
          <Card>
            <View
              style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 30, height: 30, marginRight: 8 }} source={require('assets/favicon.png')} />
                <Text style={styles.cardTextTitleLarge}>View Health Trends</Text>
              </View>
              <MaterialCommunityIcons name="chevron-right" size={24} />
            </View>
          </Card>
        </View>
      </MainLayout>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  textEdit: {
    fontSize: 18,
  },
  cardTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardTextTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  cardTextTitleLarge: {
    fontSize: 20,
  },
  numberLarge: {
    fontSize: 28,
    fontWeight: '500',
  },
  textBold: {
    fontWeight: '500',
  },
});
