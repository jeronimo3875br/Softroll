import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ImageContainer } from './style';

interface IBanner {
    image: ImageSourcePropType;
    shadow?: boolean;
}

export default function Banner({ image, shadow = false }: IBanner){
	return (
		<ImageContainer
			source={image}>
			{
				shadow ? (
					<LinearGradient
						style={{ 
							height: '70%'
						}}
						colors={['rgb(33, 33, 33)', 'rgba(33, 33, 33, .8)', 'rgba(33, 33, 33, .5)', 'rgba(33, 33, 33, .3)', 'rgba(0, 0, 0, 0)'].reverse()}
					></LinearGradient>
				) : undefined
			}
		</ImageContainer>
	);
}