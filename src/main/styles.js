import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tudo: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	header: {
		backgroundColor: '#fff',
		height: 260,
	},

	text: {
		alignSelf: 'center',
		paddingTop: 80,
		paddingBottom: 80,
		fontSize: 48,
	},

	restart: {
		width: 100,
		fontSize: 16,
		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 10,
		backgroundColor: '#000',
		color: '#fff',
		alignSelf: 'center',
	},
});

export default styles;