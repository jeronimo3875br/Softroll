import React from 'react';
import Option from '../Option';
import { OptionContainer } from './style';

import { RootStackParamsList } from '../../../RootStackParamsList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamsList, 'welcome'>;

export default function Options({ navigation }: Props){
	async function checkAuthenticationStatus(){
		const getSession = await AsyncStorage.getItem('authenticated');

		if (getSession === null || Boolean(getSession) !== true || getSession !== 'true')
			return;

		return navigation.navigate('home');
	}

	return (
		<OptionContainer>
			<Option 
				text='Entrar na plataforma'
				backgroundColor='#ad8f67'
				color='#f3f3f3'
				onClick={() => {
					checkAuthenticationStatus();
					navigation.navigate('login');
				}}
			/>
		</OptionContainer>
	);
}