import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet,View, FlatList, Button, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop : StatusBar.currentHeight || 0
    },
    item : {
        backgroundColor : 'gray',
        padding : 20,
        marginVertical : 8,
        marginHorizontal : 16
    }
  });

  const ItemContato = ({nome, id}) => {
        return(
        <View style={styles.item}>
            <Text> {nome} </Text>
            <Button name="btnId" onPress={() => alert(id)} title="id do item" />
        </View>
        )
  }

const Contatos = () => {
    const [contatos, setContatos] = useState({});

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
            setContatos(data);
             }
          }
        })();
      }, []);

      const renderItem = ({item}) => {
          return(
            <ItemContato nome={item.name} id={item.id} />
          )
      }

    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                />

        </View>

    )
}

export default Contatos;