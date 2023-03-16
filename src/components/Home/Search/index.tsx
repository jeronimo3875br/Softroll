import React from 'react';
import { SearchButton, Container } from './style';
import { Ionicons } from '@expo/vector-icons';

export default function Search(){
	return (
		<Container
			from={{
				opacity: 0,
				translateY: 100,
				scale: 0
			}}

			animate={{
				opacity: 1,
				translateY: 0,
				scale: 1
			}}
		>
			<SearchButton activeOpacity={1}>
				<Ionicons
					name="search"
					size={30}
					color="#ffffff"
				/>
			</SearchButton>
		</Container>
	);
}