import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

export default function Registration() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [cantidadAcompanantes, setCantidadAcompanantes] = useState('');

  const handleStore = async () => {
    if (nombre && apellido && edad && cantidadAcompanantes) {
      console.log(nombre, apellido, edad, cantidadAcompanantes);
      try {
        await axios.post('http://localhost:8000/api/registro', {
          nombre: nombre,
          apellido: apellido,
          edad: edad,
          cantidadAcompanantes: cantidadAcompanantes,
        });

        if (response.data) {
          console.log('Éxito: La solicitud se completó con éxito');
        } else {
          console.log('Error: La solicitud no se completó con éxito');
        }      
      } catch (error) {
        console.error('Error al enviar la solicitud:', error);
        // Aquí puedes manejar el error
      }
    } else {
      alert('Por favor, ingrese todos los datos');
    }
  };
  
    

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
      <Button title='Guardar' onPress={handleStore} />
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
