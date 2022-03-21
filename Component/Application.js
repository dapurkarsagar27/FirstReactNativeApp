import react,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-web";
import Task from "./AddItem";

const ToDoApp = () => {
  const [items, setItems] = useState("");
  const [tasks , setTask] = useState([]);  

  const handelAddTask = () =>{
      setTask([...tasks , items])
      setItems("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do Application</Text>
      <View style={styles.inputSec}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your task"
          onChangeText={text => setItems(text)}
          value={items}
        ></TextInput>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => handelAddTask()} >
          <Text style={styles.buttonText}>➕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.list}>
         {tasks.map((val) =>{
             return <Task text={val}/>
         })}   

        {/* <Text>SAagar</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dbdbdb",
    padding: 20,
    borderRadius: 8,
  },
  header: {
      width:"100%",
    fontSize: 30,
    backgroundColor:"black",
    color:"white",
    textAlign:"center",
    borderRadius:8,
    padding:6
  },
  inputSec: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 6,
    borderColor: "grey",
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 10,
    marginLeft: 15,
    borderRadius: 6,
    backgroundColor: "grey",
    borderColor: "grey",
  },
  listStyle: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 20,
  },
  list:{
      fontWeight:700
  }
});

export default ToDoApp;
