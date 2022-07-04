import { useMemo } from 'react';
import { User } from 'src-chat/types/screens/chats';

export function useUser() {
  return {};
}

export function useMyData(): User {
  return useMemo<User>(
    () => ({
      id: 99,
      avatar: require('assets/user_avts/u3.png'),
      displayName: 'Amber Heard',
      username: 'amberheard',
    }),
    []
  );
}
