import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState("");
  let combination = "";
  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combination = combination + keys[i];
    }
    const executeStringNumber = eval(combination);
    setResult("=" + executeStringNumber);
  }
  return (  
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.output}>
          {keys}
          {result}
        </Text>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, "1"])}>
            <Text style={styles.keys}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "2"])}>
            <Text style={styles.keys}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "3"])}>
            <Text style={styles.keys}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "+"])}>
            <Text style={styles.keys}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, "4"])}>
            <Text style={styles.keys}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "5"])}>
            <Text style={styles.keys}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "6"])}>
            <Text style={styles.keys}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "-"])}>
            <Text style={styles.keys}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, 7])}>
            <Text style={styles.keys}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, 8])}>
            <Text style={styles.keys}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, 9])}>
            <Text style={styles.keys}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "*"])}>
            <Text style={styles.keys}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([...keys, "("])}>
            <Text style={styles.keys}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "0"])}>
            <Text style={styles.keys}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, ")"])}>
            <Text style={styles.keys}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "/"])}>
            <Text style={styles.keys}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_keys}>
          <TouchableOpacity onPress={() => setKeys([])}>
            <Text style={styles.keys}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setKeys([...keys, "."])}>
            <Text style={styles.keys}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setKeys(keys.slice(0, -1))
          }}>
            <Text style={styles.keys}>⌫</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getResult()}>
          <Text style={styles.keys}>=</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#354545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_keys: {
    display: "flex",
    backgroundColor: '#223333',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  keys: {
    display: "flex",
    backgroundColor: '#223333',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#455',
    fontSize: 35,
    color: '#fff',
    width: 70,
    height: 70,
    color: "black",
    fontWeight: 'bold',
    margin: 6,
  },
  output: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 38,
    color: "#fff",
    backgroundColor: "#223333",
    width: "100%",
    height: 80,
    marginVertical: 3,
    color: "black",
    borderWidth: 2,
    fontWeight: 'bold',
  },
});