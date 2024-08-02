import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tarea = ({ tarea, tareas, setTareas }) => {
  const tachado = tarea.fechaTachado !== null;

  const tachar = (id) => {
    const tareasActualizado = tareas.map(t =>
      t.id === id
        ? {
            ...t,
            fechaTachado: !tachado ? Date.now() : null,
          }
        : t
    );

    setTareas(tareasActualizado);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, tachado && styles.checkboxChecked]}
        onPress={() => tachar(tarea.id)}
      >
        {tachado && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <Text style={tachado ? styles.tachado : styles.text}>
        {tarea.tarea}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#4caf50',
  },
  checkmark: {
    fontSize: 18,
    color: '#fff',
  },
  text: {
    fontSize: 16,
  },
  tachado: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
});

export default Tarea;
