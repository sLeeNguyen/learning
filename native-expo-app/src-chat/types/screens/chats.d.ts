export type User = {
  id: number;
  avatar: any;
  username: string;
  displayName: string;
};

export type ChatItem = {
  id: number;
  userAvatar: any;
  userDisplayName: string;
  lastMessage: string;
  lastMessageBelongToYou: boolean;
  lastMessageTime: number | string;
};

export type ActiveChatItem = {
  id: number;
  avatar: any;
  name: string;
};

export type ChatMessageType = 'text' | 'audio_call' | 'video_chat' | 'audio' | 'video' | 'image';

export type ChatMessage = {
  id: number;
  createdAt: number | string;
  type: ChatMessageType;
  message?: any;
  duration?: number;
  owner: User['id'];
  status?: 'pending' | 'sent' | 'seen';
};

export type ChatItemDetail = {
  id: number | string;
  user: User;
  chat: ChatMessage[];
};
