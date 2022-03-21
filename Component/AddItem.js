import react from "react";
import {View , Text , StyleSheet} from "react-native";

const Task = (props) =>{
    return(
        <View style={styles.propContainer}>
        <Text style={styles.propStyle}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    propContainer:{
        marginTop:5,
    },
    propStyle:{
        textAlign:"left",
      fontSize:18,
      fontWeight:600
        }
})

export default Task;
