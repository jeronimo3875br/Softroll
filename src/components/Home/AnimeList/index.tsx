import React from 'react';
import {
	Container,
	Header,
	Main,
	Operation,
	OperationText,
	Title
} from './style';

import Anime from '../Anime';
import { IAnime } from '../../../dtos/IAnimeDTO';

interface IAnimeList {
    title: string;
    animes: IAnime[]
}

export default function AnimeLIst({ title, animes }: IAnimeList){
	return (
		<Container
			from={{
				opacity: 0,
				translateX: 200
			}}

			animate={{
				opacity: 1,
				translateX: 0
			}}

			delay={1000}
		>
			<Header>
				<Title>{ title }</Title>
				<Operation>
					<OperationText>Visualizar</OperationText>
				</Operation>
			</Header>
			<Main 
				data={animes}
				horizontal
				renderItem={({ item }: { item: IAnime }) => <Anime image={item.image} />}
				keyExtractor={(item: IAnime) => item.anime}
			/>
		</Container>
	);
}