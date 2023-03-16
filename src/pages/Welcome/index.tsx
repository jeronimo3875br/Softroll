import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStackParamsList } from '../../RootStackParamsList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { 
	Container, 
	Content, 
	SubTitle, 
	Title, 
	CreateAccountLink, 
	CreateAccountLinkText, 
	CreateAccountLinkTextDetail
} from './style';

import Banner from '../../components/Welcome/Banner';
import Options from '../../components/Welcome/Options';
import WelcomeBannerImage from '../../../assets/images/welcome-image.jpg';

type Props = NativeStackScreenProps<RootStackParamsList, 'welcome'>;

export default function WelcomePage({ navigation, route }: Props){
	useEffect(() => {
		checkAuthenticationStatus();
	}, []);

	async function checkAuthenticationStatus(){
		const getSession = await AsyncStorage.getItem('authenticated');

		if (getSession === null || Boolean(getSession) !== true || getSession !== 'true')
			return;

		return navigation.navigate('home');
	}

	return (
		<Container>
			<Banner
				image={WelcomeBannerImage}
				shadow
			/>
			<Content
				from={{
					opacity: 0,
					translateY: 100
				}}

				animate={{
					opacity: 1,
					translateY: 0
				}}
			>
				<Title>Softroll</Title>
				<SubTitle>A maior e melhor plataforma para Otakus do mundo!</SubTitle>
				<Options 
					navigation={navigation} 
					route={route} 
				/>
				<CreateAccountLink>
					<CreateAccountLinkText onPress={() => alert('Essa opção não está disponível nessa demo!')}>ou 
						<CreateAccountLinkTextDetail> criar conta</CreateAccountLinkTextDetail>
					</CreateAccountLinkText>
				</CreateAccountLink>
			</Content>
		</Container>
	);
}