import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TodoItem = (props) => {
	return (
		<Pressable onPress={() => props.deleteHandler(props.item.item.key)}>
			<View style={styles.todoListItem}>
				<Text style={styles.todoListItemText}>
					{props.item.item.text}
				</Text>
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	todoListItem: {
		width: 300,
		padding: 10,
		margin: 5,
		backgroundColor: "#a9b8f0",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 5,
	},
	todoListItemText: {
		textAlign: "center",
	},
});

export default TodoItem;
