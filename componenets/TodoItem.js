import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TodoItem = (props) => {
	return (
		<View style={styles.todoListItem}>
			<Pressable
				onPress={() => props.deleteHandler(props.item.item.key)}
				android_ripple={{ color: "#6884e9" }}
			>
				<Text style={styles.todoListItemText}>
					{props.item.item.text}
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	todoListItem: {
		width: 300,
		margin: 5,
		backgroundColor: "#a9b8f0",
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 5,
	},
	todoListItemText: {
        padding: 10,
		textAlign: "center",
	},
});

export default TodoItem;
