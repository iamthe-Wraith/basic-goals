import { FC } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface IProps {}

export const NoGoal: FC<IProps> = () => {
  return (
    <View style={styles.noGoalsContainer}>
      <Text style={styles.noGoals}>No goals yet...</Text>
    </View>
  )
};