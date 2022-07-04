import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from 'src-chat/components/Container';

export default function Search() {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const handleFocus = () => {};

  return (
    <Container
      style={
        open
          ? {
              paddingTop: 8,
              paddingBottom: 20,
            }
          : {
              // position: 'absolute',
              // top: 0,
              // left: 0,
              // right: 0,
              // zIndex: 100,
            }
      }
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: theme.roundness * 2,
          backgroundColor: theme.colors.surface,
          paddingLeft: 8,
          paddingVertical: 8,
          overflow: 'hidden',
        }}
      >
        <MaterialCommunityIcons color={theme.colors.textSecondary} size={20} name="magnify" />
        <TextInput
          onFocus={handleFocus}
          placeholder="Search"
          style={{
            marginHorizontal: 8,
            fontSize: 18,
            color: theme.colors.textSecondary,
            flex: 1,
          }}
          placeholderTextColor={theme.colors.textSecondary}
        />
      </View>
    </Container>
  );
}
