import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
 
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }; 

  return (
    <Modal visible={props.visible} animationType="slide" >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title="ADD"   
                        onPress={addGoalHandler} 
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title="CANCLE" 
                        color='red' 
                        onPress={props.onCancelGoal}
                    />
                </View>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop:20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black', 
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around" ,
      width: '60%'
  },
    button: {
        width:'40%'
  }
});

export default GoalInput;
 

const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id != goalId);
    } );
  }

  const cancelGoal = () =>{
    setIsAddMode(false)
  };