import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import Square from '../square/Square';

export default class Board extends React.Component {

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderSquare(0)}
                {this.renderSquare(1)}    
                {this.renderSquare(2)}    
                {this.renderSquare(3)}    
                {this.renderSquare(4)}    
                {this.renderSquare(5)}    
                {this.renderSquare(6)}    
                {this.renderSquare(7)}    
                {this.renderSquare(8)}    
            </View>
        );
    }
}