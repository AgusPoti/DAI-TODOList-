import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Formulario = ({ tareas, setTareas }) => {
  const [tarea, setTarea] = useState('');

  const agregarTarea = () => {
    setTareas([
      ...tareas,
      {
        tarea,
        id: Date.now(),
        fecha: Date.now(),
        fechaTachado: null,
      },
    ]);

    setTarea('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={tarea}
        onChangeText={setTarea}
        placeholder="Introduce una tarea"
      />
      <Button title="Agregar tarea" onPress={agregarTarea} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        fontSize: 16,
      },
});

export default Formulario;
