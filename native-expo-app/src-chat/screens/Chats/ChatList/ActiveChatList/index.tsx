import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar, Badge, useTheme } from 'react-native-paper';
import { ActiveChatItem } from 'src-chat/types/screens/chats';

const list: ActiveChatItem[] = [
  {
    id: 0,
    avatar: null,
    name: '',
  },
  {
    id: 1,
    avatar: require('assets/user_avts/u1.png'),
    name: 'Joshua Lawrence',
  },
  {
    id: 2,
    avatar: require('assets/user_avts/u2.png'),
    name: 'Martin Randolph',
  },
  {
    id: 3,
    avatar: require('assets/user_avts/u3.png'),
    name: 'Karen Castillo',
  },
  {
    id: 4,
    avatar: require('assets/user_avts/u4.png'),
    name: 'Martha',
  },
  {
    id: 5,
    avatar: require('assets/user_avts/u5.png'),
    name: 'Andrew Parker',
  },
  {
    id: 6,
    avatar: require('assets/user_avts/u6.png'),
    name: 'Lee Nguyen',
  },
  {
    id: 7,
    avatar: require('assets/user_avts/u1.png'),
    name: 'Joshua Lawrence',
  },
  {
    id: 8,
    avatar: require('assets/user_avts/u2.png'),
    name: 'Martin Randolph',
  },
  {
    id: 9,
    avatar: require('assets/user_avts/u3.png'),
    name: 'Karen Castillo',
  },
  {
    id: 10,
    avatar: require('assets/user_avts/u4.png'),
    name: 'Martha',
  },
  {
    id: 11,
    avatar: require('assets/user_avts/u5.png'),
    name: 'Andrew Parker',
  },
  {
    id: 12,
    avatar: require('assets/user_avts/u6.png'),
    name: 'Lee Nguyen',
  },
];

export default function ActiveChatList() {
  const { colors } = useTheme();

  const renderItem = ({ item }: { item: ActiveChatItem }) => {
    if (item.id === 0) {
      return (
        <View style={styles.itemContainer}>
          <View style={styles.avtContainer}>
            <Avatar.Icon color={colors.text} style={{ backgroundColor: colors.surface }} size={52} icon="plus" />
          </View>
          <Text numberOfLines={2} style={[styles.itemText, { color: colors.textSecondary }]}>
            Your story
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.itemContainer}>
        <View style={styles.avtContainer}>
          <Avatar.Image size={52} source={item.avatar} style={{ backgroundColor: 'transparent' }} />
          <View style={[styles.status, { backgroundColor: colors.background }]}>
            <Badge style={[{ backgroundColor: colors.success }]} size={11} />
          </View>
        </View>
        <Text numberOfLines={2} style={[styles.itemText, { color: colors.textSecondary }]}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={[styles.root]}
      horizontal
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => '' + item.id}
    />
  );
}

const styles = StyleSheet.create({
  root: {},
  itemContainer: {
    marginHorizontal: 16,
    width: 52,
    display: 'flex',
    flexDirection: 'column',
  },
  avtContainer: {
    position: 'relative',
    marginBottom: 4,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 13,
  },
  status: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 3,
    borderRadius: 100,
  },
});
