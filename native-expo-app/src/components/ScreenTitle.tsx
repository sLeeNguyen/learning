import { Image, StyleSheet, Text, View, ViewProps } from 'react-native';

interface Props extends ViewProps {
  title: string;
  showAvatar?: boolean;
}

export default function ScreenTitle(props: Props) {
  const { title, showAvatar, ...other } = props;

  return (
    <View {...other} style={[other.style, styles.container]}>
      <Text style={styles.title}>{title}</Text>
      {showAvatar && <Image source={require('assets/favicon.png')} style={styles.avatar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
