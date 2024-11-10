import { View, Text, StyleSheet } from 'react-native';

const Item = ({ title }) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#e0e0e0',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default Item;
