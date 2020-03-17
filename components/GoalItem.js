import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity  onPress= {props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default GoalItem;



<View style={styles.screen}>
        <Button title="daba" onPress={() => setIsAddMode(true) } />
        <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoal}/>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
          <GoalItem 
          id={itemData.item.id}
          onDelete={removeGoalHandler} 
          title={itemData.item.value} />)
        }
        />
      </View>