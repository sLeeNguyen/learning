import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { RootChatsStackParamList } from 'src-chat/types/navigation';
import { StackScreenProps } from '@react-navigation/stack';
import { useChatDetail } from 'src-chat/hooks/useChat';
import { Avatar, useTheme } from 'react-native-paper';
import { useMyData } from 'src-chat/hooks/useUser';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

export default function ChatDetail({ route }: StackScreenProps<RootChatsStackParamList, 'ChatDetail'>) {
  const { colors } = useTheme();
  const { chatId } = route.params;
  const you = useMyData();
  const data = useChatDetail(chatId);

  return (
    <ScrollView style={styles.scrollChat}>
      <View style={{ alignItems: 'center', paddingVertical: 8 }}>
        <Avatar.Image source={data.user.avatar} size={100} />
      </View>
      <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', paddingTop: 8, marginBottom: 4 }}>
        {data.user.displayName}
      </Text>
      <Text style={{ textAlign: 'center' }}>You're friends on Facebook</Text>
      <View>
        <View style={styles.avtGroup}>
          <View style={[styles.avtGroupItem, { backgroundColor: colors.background }]}>
            <Avatar.Image source={data.user.avatar} size={48} style={styles.avtGroupItemImg} />
          </View>
          <View style={[styles.avtGroupItem, { marginLeft: -16, backgroundColor: colors.background }]}>
            <Avatar.Image source={you.avatar} size={48} style={styles.avtGroupItemImg} />
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 12, color: colors.textSecondary, fontWeight: '300' }}>
          Say hi to your new Facebook friend, {you.displayName}.
        </Text>
      </View>

      <View style={{ paddingVertical: 16 }}>
        {data.chat.map((item, idx) => {
          const isYourMessage = item.owner === you.id;
          return (
            <View key={item.id} style={{ paddingVertical: 4 }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 12,
                  fontWeight: '500',
                  paddingVertical: 12,
                  color: colors.textSecondary,
                  textTransform: 'uppercase',
                }}
              >
                {moment(item.createdAt).format('MMM DD, HH:mm')}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: isYourMessage ? 'flex-end' : 'flex-start',
                }}
              >
                {item.owner !== you.id && (
                  <Avatar.Image source={data.user.avatar} size={28} style={{ marginRight: 12 }} />
                )}
                {item.type === 'text' && (
                  <View
                    style={{
                      paddingVertical: 8,
                      paddingHorizontal: 12,
                      borderRadius: 18,
                      backgroundColor: isYourMessage ? colors.primary : colors.surface,
                      flexShrink: 1,
                      maxWidth: '80%',
                    }}
                  >
                    <Text lineBreakMode="clip" style={{ fontSize: 17, color: isYourMessage ? '#fff' : undefined }}>
                      {item.message}
                    </Text>
                  </View>
                )}
                {item.type === 'image' && (
                  <Image source={item.message} style={{ height: 83, width: 83 }} resizeMode="contain" />
                )}
                {idx + 1 === data.chat.length && isYourMessage && (
                  <>
                    <Image
                      source={item.status === 'sent' ? require('assets/icons/sent.png') : data.user.avatar}
                      style={{ marginLeft: 8, marginRight: -8, width: 16, height: 16 }}
                    />
                  </>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollChat: {
    paddingHorizontal: 16,
  },
  avtGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 4,
  },
  avtGroupItem: {
    padding: 2,
    borderRadius: 100,
  },
  avtGroupItemImg: {
    backgroundColor: 'transparent',
  },
});
