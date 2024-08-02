import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const EliminarTarea = ({ id, tareas, setTareas }) => {
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(t => t.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <View style={styles.container}>
      <Button title="Eliminar" onPress={() => eliminarTarea(id)} color="#ff0000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});

export default EliminarTarea;
