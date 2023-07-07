import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const TodoInput = (props) => {
	const [enteredTodoList, setEnteredTodoList] = useState("");

    function todoInputHandler(enteredText) {
        console.log(enteredTodoList);
		setEnteredTodoList({
			key: Math.random().toString(),
			text: enteredText,
		});
	}

	function addtodoHandler() {
		console.log(enteredTodoList.text);
		if (enteredTodoList.text === "") {
			Alert.alert("Error", "Enter something!", [
				{ text: "Hmm", style: "destructive" },
			]);
			return;
		}
		props.addtodoHandler(enteredTodoList);
        setEnteredTodoList({
            key: 1,
            text: ""
        });
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder="Write Your To Do"
				onChangeText={todoInputHandler}
				style={styles.textInput}
				value={enteredTodoList.text}
			></TextInput>
			<Button
				title="Add Todo"
				style={styles.addButton}
				onPress={addtodoHandler}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		margin: 5,
		paddingBottom: 10,
		borderBottomColor: "black",
		borderBottomWidth: 1,
	},
	textInput: {
		borderColor: "black",
		borderWidth: 1,
		padding: 7,
		marginRight: 10,
		width: "80%",
	},
	addButton: {
		alignSelf: "center",
		textAlign: "center",
	},
});

export default TodoInput;
