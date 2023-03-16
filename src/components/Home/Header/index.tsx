import React from 'react';
import Profile from '../Profile';
// import { View } from 'react-native';
import { Container, ProfileContainer } from './style';

import Notification from '../Notification';
// import Categorys from '../Categorys';
// import Search from '../Search';

import ProfileAccountImage from '../../../../assets/images/profile.jpg';

export default function Header(){
	return (
		<Container>
			<ProfileContainer>
				<Profile
					name="Gabriel J."
					image={ProfileAccountImage}
				/>
				<Notification />
			</ProfileContainer>
			{/* <Categorys /> */}
		</Container>
	);
}