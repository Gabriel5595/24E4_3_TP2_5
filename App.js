import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Item from './components/Item';

const App = () => {
  const items = [
    { id: '1', title: 'Item A' },
    { id: '2', title: 'Item B' },
    { id: '3', title: 'Item C' }
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});

export default App;
