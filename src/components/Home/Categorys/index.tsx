import React from 'react';
import { Container } from './style';

import Category from '../Category';

export default function Categorys(){
	return (
		<Container 
			from={{
				opacity: 0,
			}}

			animate={{
				opacity: 1,
			}}
		>
			<Category
				title='Animes'
				active
			/>
			<Category
				title='Mangás'
			/>
			<Category
				title='Shorts'
			/>
			<Category
				title='Comunidade'
			/>
		</Container>
	);
}