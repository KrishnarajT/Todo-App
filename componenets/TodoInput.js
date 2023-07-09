import React, { useState } from "react";
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Alert,
	Modal,
	Image,
} from "react-native";

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
			text: "",
		});
	}

	return (
		<Modal
			visible={props.isModalOpen}
			animationType="slide"
			style={styles.modal}
		>
			<View style={styles.inputContainer}>
				<Image
					source={require("../assets/images/reshot-icon-note-XJTRPA7D9V.png")}
					style={{
						width: 100,
						height: 100,
						margin: 20,
					}}
				/>
				<TextInput
					placeholder="Write Your To Do"
					onChangeText={todoInputHandler}
					style={styles.textInput}
					value={enteredTodoList.text}
				></TextInput>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						width: "60%",
						gap: 10,
					}}
				>
					<Button
						title="Cancel"
						style={styles.addButton}
						onPress={props.hideModalHandler}
					/>
					<Button
						title="Add Todo"
						style={styles.addButton}
						onPress={addtodoHandler}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
		gap: 10,
		paddingBottom: 10,
		borderBottomColor: "black",
		borderBottomWidth: 1,
		// backgroundColor: "#e6b457",
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
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "black",
		borderWidth: 55,
	},

});

export default TodoInput;
