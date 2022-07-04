/* eslint-disable quotes */
import { useMemo } from 'react';
import { ChatItem, ChatItemDetail } from 'src-chat/types/screens/chats';

interface UseUserChatListData {
  loading: boolean;
  userId: number;
  list: ChatItem[];
}
export function useUserChatList(userId: number): UseUserChatListData {
  return useMemo<UseUserChatListData>(
    () => ({
      loading: false,
      userId: userId,
      list: [
        {
          id: 1,
          userAvatar: require('assets/user_avts/u1.png'),
          userDisplayName: 'Martin Randolph',
          lastMessage: "What's man!",
          lastMessageBelongToYou: true,
          lastMessageTime: 1656640800000,
        },
        {
          id: 2,
          userAvatar: require('assets/user_avts/u3.png'),
          userDisplayName: 'Andrew Parker',
          lastMessage: 'Ok thanks!',
          lastMessageBelongToYou: false,
          lastMessageTime: 1656559860000,
        },
        {
          id: 3,
          userAvatar: require('assets/user_avts/u5.png'),
          userDisplayName: 'Karen Castillo',
          lastMessage: 'Ok, See you in tomorrow!',
          lastMessageBelongToYou: false,
          lastMessageTime: new Date('06/27/2022 16:24:00').getTime(),
        },
        {
          id: 4,
          userAvatar: require('assets/user_avts/u2.png'),
          userDisplayName: 'Martin Randolph',
          lastMessage:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex adipisci inventore quaerat, velit dignissimos. Aliquam laborum unde eaque at, voluptatum eligendi ea officia et, totam tempore cupiditate beatae non?',
          lastMessageBelongToYou: true,
          lastMessageTime: new Date('06/26/2022 16:24:00').getTime(),
        },
        {
          id: 5,
          userAvatar: require('assets/user_avts/u4.png'),
          userDisplayName: 'Andrew Parker',
          lastMessage: 'I th',
          lastMessageBelongToYou: false,
          lastMessageTime: new Date('06/25/2022 16:24:00').getTime(),
        },
        {
          id: 6,
          userAvatar: require('assets/user_avts/u6.png'),
          userDisplayName: 'Karen Castillo',
          lastMessage: 'Ok, See you in tomorrow!',
          lastMessageBelongToYou: false,
          lastMessageTime: new Date('06/22/2022 21:25:00').getTime(),
        },
        {
          id: 7,
          userAvatar: require('assets/user_avts/u2.png'),
          userDisplayName: 'Martin Randolph',
          lastMessage: "What's man!",
          lastMessageBelongToYou: true,
          lastMessageTime: new Date('06/26/2022 16:24:00').getTime(),
        },
        {
          id: 8,
          userAvatar: require('assets/user_avts/u4.png'),
          userDisplayName: 'Andrew Parker',
          lastMessage: 'I th',
          lastMessageBelongToYou: false,
          lastMessageTime: new Date('06/25/2022 16:24:00').getTime(),
        },
        {
          id: 9,
          userAvatar: require('assets/user_avts/u6.png'),
          userDisplayName: 'Karen Castillo',
          lastMessage: 'Ok, See you in tomorrow!',
          lastMessageBelongToYou: false,
          lastMessageTime: new Date('06/22/2022 21:25:00').getTime(),
        },
      ],
    }),
    [userId]
  );
}

export function useChatDetail(chatId: number): ChatItemDetail {
  return useMemo<ChatItemDetail>(
    () => ({
      id: chatId,
      user: {
        id: 1957563,
        avatar: require('assets/user_avts/u8.png'),
        displayName: 'Jack Sparrow',
        username: 'jacksparrow',
      },
      chat: [
        {
          id: 1,
          createdAt: new Date('7/1/22 21:32:00').getTime(),
          owner: 99,
          type: 'image',
          message: require('assets/icons/wave_hand.png'),
          status: 'seen',
        },
        {
          id: 2,
          createdAt: new Date('7/1/22 22:33:33').getTime(),
          owner: 1957563,
          type: 'text',
          message: 'Hello, Amber!',
          status: 'seen',
        },
        {
          id: 3,
          createdAt: new Date('7/1/22 22:34:40').getTime(),
          owner: 1957563,
          type: 'text',
          message: 'Do you still love me?',
          status: 'seen',
        },
        {
          id: 4,
          createdAt: new Date('7/2/22 22:34:40').getTime(),
          owner: 99,
          type: 'text',
          message: "No. I don't wanna see u anymore. Please do not disturb me.",
          status: 'seen',
        },
      ],
    }),
    [chatId]
  );
}
