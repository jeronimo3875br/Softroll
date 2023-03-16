import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Container, ShortDetail, ShortImage, ShortTitle } from './style';

interface IShort {
    title: string;
    image: ImageSourcePropType;
}

export default function Short({ image, title }: IShort){
	return (
		<Container>
			<ShortDetail>
				<ShortImage 
					source={image}
					resizeMode="cover"
				/>
			</ShortDetail>
			<ShortTitle>{ title }</ShortTitle>
		</Container>
	);
}