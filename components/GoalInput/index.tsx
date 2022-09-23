import { FC, useCallback, useState } from "react";
import { View, TextInput, Button, Modal, Image } from "react-native";
import { styles } from "./styles";

interface IProps {
  isOpen: boolean;
  onAddGoal: (goal: string) => void;
  onCancel: () => void;
}

export const GoalInput: FC<IProps> = ({ isOpen, onAddGoal, onCancel }) => {
  const [inputValue, setInputValue] = useState('');
  
  const onGoalInputChange = useCallback((text: string) => {
    setInputValue(text);
  }, []);

  const onAddGoalClick = useCallback(() => {
    onAddGoal(inputValue);
    setInputValue('');
  }, [inputValue, onAddGoal]);

  const onCancelGoalClick = useCallback(() => {
    setInputValue('');
    onCancel();
  }, [onCancel]);

  return (
    <>
      <Modal
        visible={isOpen}
        animationType='slide'
        statusBarTranslucent
      >
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/target.jpg')}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='Your Course Goal'
            onChangeText={onGoalInputChange}
            value={inputValue}
            autoFocus
          />
          <View style={ styles.buttonContainer }>
            <View style={styles.button}>
              <Button
                title='Cancel'
                onPress={onCancelGoalClick}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Add Goal'
                onPress={onAddGoalClick}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
};