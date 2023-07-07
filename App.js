import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import TodoItem from "./componenets/TodoItem";
import TodoInput from "./componenets/TodoInput";

export default function App() {
	const [todoList, setTodoList] = useState([]);

	function addtodoHandler(enteredTodoList) {
		console.log(enteredTodoList);
		setTodoList((currentTodos) => [...currentTodos, enteredTodoList]);
	}

	function deleteTodoHandler(key) {
		console.log("Delete", key);
		setTodoList((currentTodos) => {
			return currentTodos.filter((todo) => todo.key !== key);
		});
	}

	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize: 30,
					fontWeight: "bold",
					padding: 20,
					margin: 10,
				}}
			>
				Write Your To Dos!
			</Text>
			<TodoInput addtodoHandler={addtodoHandler} />
			<View style={styles.todoListContainer}>
				<FlatList
					data={todoList}
					renderItem={(item) => {
						return (
							<TodoItem
								item={item}
								deleteHandler={deleteTodoHandler}
							/>
						);
					}}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 30,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},

	todoListContainer: {
		flex: 5,
	},
});
