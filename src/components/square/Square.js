import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default props => {

    return (
        <TouchableOpacity
            onPress={() => props.onClick()}
        >
            <Text 
                style={styles.square}
            >
                {props.value}
            </Text>
        </TouchableOpacity>
    );
}