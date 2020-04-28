import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Board from '../components/board/Board';

const initialState = {
	winner: null,
    xIsNext: true,
    squares: Array(9).fill(null),
}

export default class Game extends React.Component {

    state = {  ...initialState };

    handleClick(i) {
        const xIsNext = this.state.xIsNext;
        const actual = xIsNext ? 'X' : 'O';
        const squares = this.state.squares.slice();

        if(squares[i] === null) {
          squares[i] = actual;
          this.setState({ xIsNext: !xIsNext, squares: squares });
		}

		const winner = this.calculateWinner(squares);

		if(winner) {
			this.setState({ winner: winner });
		}
	}

    calculateWinner(squares) {
		const lines= [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for(let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
				return squares[a];
			}
		}
		return null;
	}

    render() {
		const winner = this.calculateWinner(this.state.squares);

		let status;
		if(winner) {
			status = `Winner: ${winner}`;
		} else {
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
		}

		if(!winner){
			return (
				<View style={styles.tudo}>
				  <View style={styles.header}>
					<Text style={styles.text}>{status}</Text>
					<TouchableOpacity
						onPress={() => this.setState({ ...initialState })}
					>
						<Text 
							style={styles.restart}
						>
							Restart game
						</Text>
					</TouchableOpacity>
				  </View>
				  <Board 
					squares={this.state.squares}
					onClick={(i) => this.handleClick(i)}
				/>
				</View>
			  );
		} else {
			return (
				<View style={styles.tudo}>
				  <View style={styles.header}>
					<Text style={styles.text}>{status}</Text>
					<TouchableOpacity
						onPress={() => this.setState({ ...initialState })}
					>
						<Text 
							style={styles.restart}
						>
							Restart game
						</Text>
					</TouchableOpacity>
				  </View>
				  <Board 
					squares={this.state.squares}
					onClick={(i) => null }
				/>
				</View>
			  );
		}

    }
}