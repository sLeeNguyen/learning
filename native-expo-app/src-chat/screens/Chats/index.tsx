import { createStackNavigator, StackHeaderProps } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import { RootChatsStackParamList } from 'src-chat/types/navigation';

import { BlurView } from 'expo-blur';
import { SafeAreaView } from 'react-native-safe-area-context';
import ChatDetail from './ChatDetail';
import ChatList from './ChatList';

const ChatsStack = createStackNavigator<RootChatsStackParamList>();

const ChatDetailHeader = (props: StackHeaderProps) => {
  const { colors } = useTheme();
  const { navigation } = props;

  return (
    <BlurView intensity={100} tint="light">
      <SafeAreaView>
        <View style={{ flexDirection: 'row', paddingBottom: 8, paddingTop: 4, alignItems: 'center' }}>
          {/* <View style={{ paddingHorizontal: 8 }}>
            <MaterialCommunityIcons name="chevron-left" size={36} color={colors.primary} />
          </View> */}
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image
              source={require('assets/icons/back.png')}
              style={{ height: 18, marginHorizontal: 12 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.4} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar.Image source={require('assets/user_avts/u4.png')} size={36} style={{ marginRight: 8 }} />
              <View>
                <Text style={{ fontSize: 17, fontWeight: '700' }}>Jack Sparrow</Text>
                <Text style={{ color: colors.textSecondary, fontSize: 13 }}>Active 6m ago</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', marginRight: 12, alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.4}>
              <Image
                source={require('assets/icons/call.png')}
                style={{ marginRight: 16, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.4}>
              <Image source={require('assets/icons/video.png')} style={{ height: 20 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </BlurView>
  );
};

export default function Chats() {
  return (
    <ChatsStack.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <ChatsStack.Screen name="ChatList" component={ChatList} />
      <ChatsStack.Screen
        name="ChatDetail"
        component={ChatDetail}
        options={{
          headerShown: true,
          // eslint-disable-next-line react/no-unstable-nested-components
          header: ChatDetailHeader,
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => {
            return (
              <View style={{ flexDirection: 'row', marginRight: 16 }}>
                <Image
                  source={require('assets/icons/call.png')}
                  style={{ marginRight: 16, height: 22 }}
                  resizeMode="contain"
                />
                <Image source={require('assets/icons/video.png')} style={{ height: 22 }} resizeMode="contain" />
              </View>
            );
          },
        }}
      />
    </ChatsStack.Navigator>
  );
}
