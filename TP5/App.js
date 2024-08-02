import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Title from './components/Titulo/Titulo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Formulario from './components/Formulario/Formulario';
import Tarea from './components/Tarea/Tarea';
import { useState, useEffect} from 'react';
import EliminarTarea from './components/Eliminar/Eliminar';
export default function App() {

const [tareas, setTareas] = useState([]);

useEffect(() => {
  cargarTareas();
}, []);

useEffect(() => {
  guardarTareas();
}, [tareas]);

const cargarTareas = async () => {
  try {
    const tareasGuardadas = await AsyncStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  } catch (error) {
    Alert.alert('Error', 'Error al cargar las tareas');
  }
};

const guardarTareas = async () => {
  try {
    await AsyncStorage.setItem('tareas', JSON.stringify(tareas));
  } catch (error) {
    Alert.alert('Error', 'Error al guardar las tareas');
  }
};
return(
<>
  <View style={styles.container}>
  <Title text="To-do List" />
    <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
    {tareas.map(c => {
      return (
        <View >
        <Tarea tarea={c} tareas={tareas} setTareas={setTareas}></Tarea>
        <EliminarTarea id={c.id} tareas={tareas} setTareas={setTareas}></EliminarTarea>
        </View>
      );
    })}
  </View>
</>
);


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tareaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});




  /*


<View style={styles.container}>
  <Title text="To-do List" />
    <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
    <FlatList
        data={tareas}
        renderItem={renderItem}
        renderElement={renderElement}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>

   <Boton tareas={tareas} setTareas={setTareas}></Boton>
      </div>
      
        <ul>
          {tareas.map(c => <Tarea tarea={c} tareas={tareas} setTareas={setTareas}></Tarea>)}
        </ul> */