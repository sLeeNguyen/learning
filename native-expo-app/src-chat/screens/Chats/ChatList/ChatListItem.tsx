import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import { ChatItem } from 'src-chat/types/screens/chats';

function formatTime(time: number | string) {
  const mTime = moment(time);
  const diff = moment().diff(mTime, 'd');

  if (diff === 0) {
    return mTime.format('h:mm a');
  } else if (diff < 7) {
    return mTime.format('ddd');
  } else {
    return mTime.format('MMM DD');
  }
}

export default function ChatListItem({ item }: { item: ChatItem }) {
  const { colors } = useTheme();

  return (
    <View style={styles.root}>
      <Avatar.Image style={styles.avt} size={60} source={item.userAvatar} />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={1} style={styles.username}>
          {item.userDisplayName}
        </Text>
        <View style={styles.lastMessageContainer}>
          <Text style={[{ color: colors.textSecondary }]}>{item.lastMessageBelongToYou && 'You: '}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.lastMessage, { color: colors.textSecondary }]}>
            {item.lastMessage}
          </Text>
          <Text style={[{ color: colors.textSecondary }]}>
            {' · '}
            {formatTime(item.lastMessageTime)}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avt: {
    marginRight: 12,
  },
  username: {
    fontWeight: '500',
    fontSize: 17,
    marginBottom: 4,
  },
  lastMessageContainer: {
    flexDirection: 'row',
  },
  lastMessage: {
    flexShrink: 1,
  },
});
