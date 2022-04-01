import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';
import tw from 'tailwind-react-native-classnames';

export default function App() {
	return (
		<View>
			<MainScreen />
			<StatusBar style='auto' />
		</View>
	);
}
