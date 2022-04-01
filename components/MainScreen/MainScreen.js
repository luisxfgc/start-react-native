import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';

const MainScreen = () => {
	return (
		<SafeAreaView style={tw`bg-gray-800 h-full`}>
			<Text style={tw`text-white font-bold text-4xl pt-20 px-8`}>
				Bem vindo ao HelpWE
			</Text>
			<Text style={tw`text-xl p-8`}>
				Seu aplicativo perfeito para ajudar você caso precise de ajuda.
			</Text>
		</SafeAreaView>
	);
};

export default MainScreen;
