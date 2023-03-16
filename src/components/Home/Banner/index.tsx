import React from 'react';
import { ImageSourcePropType } from 'react-native';
import {
	BannerImage,
	Container
} from './style';

interface IBanner {
    image: ImageSourcePropType;
}

export default function Banner({ image }: IBanner){
	return (
		<Container>
			<BannerImage resizeMode='stretch' source={image} borderRadius={10}/>
		</Container>
	);
}