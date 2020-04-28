import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    square: {
        backgroundColor: '#f5f5f5',
        width: (Dimensions.get('window').width / 3) - 3,
        height: (Dimensions.get('window').height / 3) - 90,
        marginBottom: 5,
        fontSize: 100,
    },
});

export default styles;