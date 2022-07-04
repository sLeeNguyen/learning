export type RootBottomTabParamList = {
  Chats: undefined;
  Calls: undefined;
  People: undefined;
  Stories: undefined;
};

export type RootChatsStackParamList = {
  ChatList: undefined;
  ChatDetail: {
    chatId: number;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootBottomTabParamList, RootChatsStackParamList {}
  }
}
