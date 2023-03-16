import React from 'react';
import { CategoryText, CategoryContent } from './style';

interface ICategory {
    title: string;
    active?: boolean;
}

export default function Category({ active = false, title }: ICategory){
	return (
		<CategoryContent activeOpacity={ active ? .3 : 1 }>
			<CategoryText 
				fontWeight={ active ? 'bold' : '0' } 
				color={ active ? '#ad8f67' : '#3f3e37' }>{ title }</CategoryText>
		</CategoryContent>
	);
}