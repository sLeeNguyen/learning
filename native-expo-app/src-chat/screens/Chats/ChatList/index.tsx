/* eslint-disable quotes */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { TouchableHighlight, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from 'src-chat/components/AppHeader';
import { useUserChatList } from 'src-chat/hooks/useChat';
import { RootChatsStackParamList } from 'src-chat/types/navigation';
import { ChatItem } from 'src-chat/types/screens/chats';
import ActiveChatList from './ActiveChatList';
import ChatListItem from './ChatListItem';
import Search from './Search';

const userId = 99;

export default function ChatList() {
  const theme = useTheme();
  const navigation = useNavigation<StackNavigationProp<RootChatsStackParamList>>();
  const { list } = useUserChatList(userId);

  return (
    <React.Fragment>
      <AppHeader
        title="Chats"
        headerLeft={<Avatar.Image size={28} source={require('assets/avt.png')} />}
        headerRight={<MaterialCommunityIcons color={theme.colors.primary} size={28} name="square-edit-outline" />}
      />
      <ScrollView>
        <Search />
        <View style={{ paddingVertical: 16 }}>
          <ActiveChatList />
        </View>
        <View>
          {list.map((item) => (
            <TouchableHighlight
              key={item.id}
              underlayColor={theme.colors.surface}
              onPress={() => {
                navigation.push('ChatDetail', { chatId: item.id });
              }}
            >
              <ChatListItem item={item} />
            </TouchableHighlight>
          ))}
        </View>
      </ScrollView>
    </React.Fragment>
  );
}
