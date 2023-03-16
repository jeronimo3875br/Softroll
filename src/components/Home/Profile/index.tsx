import React from 'react';
import {
	ProfileContainer,
	ProfileAccount,
	ProfileAccountName,
	ProfileDefaultMessage,
	ProfileImage,
	ProfileImageButton
} from './style';

import { IProfileDTO } from '../../../dtos/IProfileDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ image, name }: IProfileDTO){

	return (
		<ProfileContainer>
			<ProfileImageButton onLongPress={async () => {
				alert('Sessão finalizada!');
				await AsyncStorage.clear();
			}}>
				<ProfileImage
					from={{
						opacity: 1,
						scale: 0
					}}

					animate={{
						opacity: 1,
						scale: 1
					}}

					delay={1000}
					source={image}
				/>
			</ProfileImageButton>
			<ProfileAccount>
				<ProfileDefaultMessage>Konichiwa,</ProfileDefaultMessage>
				<ProfileAccountName>{ name }</ProfileAccountName>
			</ProfileAccount>
		</ProfileContainer>
	);
}