import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { Button, FlatList, ListRenderItem, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
import { NoGoal } from './components/NoGoal';

interface IGoal {
  id: string;
  text: string;
}

export default function App() {
  const [addGoalModalVisible, setAddGoalModalVisible] = useState(false);
  const [goals, setGoals] = useState<IGoal[]>([]);

  const onAddGoal = useCallback((goal: string) => {
    setGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), text: goal }]);
    setAddGoalModalVisible(false);
  }, []);

  const onAddGoalPress = useCallback(() => {
    setAddGoalModalVisible(true);
  }, []);

  const onCancelAddGoal = useCallback(() => {
    setAddGoalModalVisible(false);
  }, []);

  const onDeleteGoal = useCallback((goalId: string) => () => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  }, [])

  const renderGoal: ListRenderItem<IGoal> = useCallback(goalData => (
    <GoalItem
      text={ goalData.item.text }
      onPress={onDeleteGoal(goalData.item.id)}
    />
  ), []);

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={renderGoal}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<NoGoal />}
        />
      </View>
      <Button title='Add Goal' onPress={onAddGoalPress} />
      <GoalInput
        onAddGoal={ onAddGoal }
        isOpen={ addGoalModalVisible }
        onCancel={ onCancelAddGoal }
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
    marginBottom: 16,
  },
});
