import React from 'react';
import { AnimeContent, AnimeImage } from './style';
import { IAnime } from '../../../dtos/IAnimeDTO';

export default function Anime({ image }: IAnime){
	return (
		<AnimeContent>
			<AnimeImage 
				source={image}
				resizeMode="stretch"
			/>
		</AnimeContent>
	);  
}