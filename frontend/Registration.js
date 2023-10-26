import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function Registration() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [cantidadAcompanantes, setCantidadAcompanantes] = useState('');

  const handleGuardar = () => {
    axios.post('http://localhost:3000/registro', {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    cantidadAcompanantes: cantidadAcompanantes,
  })
}

  return (
    <View>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.inputs}
        placeholder='Nombre'
        onChangeText={(text) => setNombre(text)}
        value={nombre}
      />
      <Text>Apellido:</Text>
      <TextInput
        style={styles.inputs}
        placeholder='Apellido'
        onChangeText={(text) => setApellido(text)}
        value={apellido}
      />
      <Text>Edad:</Text>
      <TextInput
        style={styles.inputs}
        keyboardType='number-pad'
        placeholder="Edad"
        onChangeText={(text) => setEdad(text)}
        value={edad}
      />
      <Text>Cantidad de acompañantes:</Text>
      <TextInput
        style={styles.inputs}
        keyboardType='number-pad'
        placeholder="Cantidad de acompañantes"
        onChangeText={(text) => setCantidadAcompanantes(text)}
        value={cantidadAcompanantes}
      />
      <Button title='Guardar' onPress={handleGuardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    width: '100%',
  },
});
