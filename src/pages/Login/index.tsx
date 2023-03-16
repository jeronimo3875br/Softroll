import React, { useState } from 'react';

import { 
	Container,
	Form,
	FormSubTitle,
	FormTitle,
	FormField,
	FormInput,
	FormInputText,
	FormLabel,
	FormSubmitButton,
	FormSubmitButtonText,
	FormFieldStatus,
	ImageContainer,
	FormOptions,
	ForgotPasswordButton,
	ForgotPasswordButtonText,
	RememberLoginContainer,
	RememberLoginText,
	VisiblePasswordButton
} from './style';

import CheckBox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamsList } from '../../RootStackParamsList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import LoginBackgroundImage from '../../../assets/images/login-background.jpg';

type Props = NativeStackScreenProps<RootStackParamsList, 'welcome'>;

interface IFieldStatus {
	message: string;
	color: string;
	visible: boolean;
}

export default function LoginPage({ navigation }: Props){
	const [ email, setEmail ] = useState('admin@animeland.com');
	const [ password, setPassword ] = useState('naosei');

	const [ hiddenPassword, setHiddenPassword ] = useState(true);

	const [ remember, setRemember ] = useState(false);

	const [ emailStatus, setEmailStatus ] = useState<IFieldStatus>({
		message: 'Esse campo é obrigatório!',
		color: '#dc143c',
		visible: true
	});

	const [ passwordStatus, setPasswordStatus ] = useState<IFieldStatus>({
		message: 'Esse campo é obrigatório!',
		color: '#dc143c',
		visible: true
	});

	return (
		<Container>
			<ImageContainer
				resizeMode='stretch'
				blurRadius={7}
				source={LoginBackgroundImage}>
				<LinearGradient
					style={{ 
						height: '100%',
					}}
					colors={['#212121','#212121', 'rgba(33, 33, 33, .9)', 'rgba(33, 33, 33, .8)', 'rgba(33, 33, 33, .7)', 'rgba(33, 33, 33, .6)','rgba(33, 33, 33, .5)', 'rgba(33, 33, 33, .4)', 'rgba(33, 33, 33, .3)', 'rgba(33, 33, 33, .2)', 'rgba(33, 33, 33, .1)', 'rgba(37, 35, 31, .0)'].reverse()}
				></LinearGradient>
			</ImageContainer>
			<Form>
				<FormTitle>Login</FormTitle>
				<FormSubTitle>Entre com seu email e senha.</FormSubTitle>
				<FormField>
					<FormLabel>E-mail</FormLabel>
					<FormInput>
						<Ionicons
							name="mail-outline"
							color="#ad8f67"
							size={18}
						/>
						<FormInputText 
							keyboardType='email-address'
							keyboardAppearance='dark'
							placeholder='exemple@gmail.com'
							placeholderTextColor="#808080"
							cursorColor="#ad8f67"
							value={email}
							onChangeText={value => {
								if (!value){
									setPasswordStatus({
										color: '#dc143c',
										message: 'Esse campo é obrigatório!',
										visible: true
									});
								}

								setEmail(value);
							}}
						/>
					</FormInput>
					{
						emailStatus.visible ? ( <FormFieldStatus color={emailStatus.color}>{ emailStatus.message }</FormFieldStatus> ): undefined
					}
				</FormField>
				<FormField>
					<FormLabel>Senha</FormLabel>
					<FormInput>
						<Ionicons
							name="lock-closed-outline"
							color="#ad8f67"
							size={18}
						/>
						<FormInputText 
							placeholder='Sua senha'
							placeholderTextColor="#808080"
							cursorColor="#ad8f67"
							keyboardAppearance='dark'
							secureTextEntry={hiddenPassword}
							maxLength={20}
							value={password}
							onChangeText={value => {
								if (!value){
									setPasswordStatus({
										color: '#dc143c',
										message: 'Esse campo é obrigatório!',
										visible: true
									});
								}

								setPassword(value);
							}}
						/>
						{
							!hiddenPassword ? (
								<VisiblePasswordButton 
									onPress={() => setHiddenPassword(!hiddenPassword)}
									activeOpacity={.5}>
									<Ionicons
										name="eye-outline"
										color="#ad8f67"
										size={19}
									/>
								</VisiblePasswordButton>
							) : (
								<VisiblePasswordButton 
									onPress={() => setHiddenPassword(!hiddenPassword)}
									activeOpacity={.5}>
									<Ionicons
										name="eye-off-outline"
										color="#ad8f67"
										size={19}
									/>
								</VisiblePasswordButton>
							) 
						}
					</FormInput>
					{
						passwordStatus.visible ? ( <FormFieldStatus color={passwordStatus.color}>{ passwordStatus.message }</FormFieldStatus> ): undefined
					}
				</FormField>
				<FormOptions>
					<RememberLoginContainer>
						<CheckBox 	
							style={{
								width: 18,
								height: 18,
								borderColor: '#ad8f67'
							}}
							value={remember}
							onValueChange={() => setRemember(!remember)}
							color={remember ? '#ad8f67' : undefined}
						/>
						<RememberLoginText>Lembre-se de mim</RememberLoginText>
					</RememberLoginContainer>
					<ForgotPasswordButton 
						activeOpacity={.5}
						onPress={() => alert('Essa opção não está disponível nessa demo!')}>
						<ForgotPasswordButtonText>Esqueci minha senha</ForgotPasswordButtonText>
					</ForgotPasswordButton>
				</FormOptions>
				<FormSubmitButton 
					activeOpacity={.5}
					onPress={async () => {
						if (email !== 'admin@animeland.com'){
							setEmailStatus({
								message: 'E-mail não identificado!',
								color: '#dc143c',
								visible: true
							});

							return false;
						}

						if (password !== 'naosei'){
							setPasswordStatus({
								message: 'A senha para essa conta está incorreta!',
								color: '#dc143c',
								visible: true
							});

							return false;
						}

						await AsyncStorage.setItem('authenticated', JSON.stringify(remember));

						navigation.navigate('home');
					}}>
					<FormSubmitButtonText>Acessar</FormSubmitButtonText>
					<Ionicons
						name="arrow-forward"
						color="#f3f3f3"
						size={18}
					/>
				</FormSubmitButton>
			</Form>
		</Container>
	);
}