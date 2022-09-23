import { FC, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, PressableStateCallbackType } from 'react-native';
import { styles } from './styles';

interface IProps {
  text: string;
  onPress: () => void;
}

export const GoalItem: FC<IProps> = ({ text, onPress }) => {
  const onPressed = useCallback(({pressed}: PressableStateCallbackType) => pressed && styles.pressedItem, [])

  return (
    <View style={styles.listItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={onPress}
        style={onPressed}
      >
        <Text style={styles.listItemText}>{text}</Text>
      </Pressable>
    </View>
  );
}