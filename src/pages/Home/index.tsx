import React from 'react';
import { Container, CategorysScroll } from './style';

import { LinearGradient } from 'expo-linear-gradient';
import AnimeList from '../../components/Home/AnimeList';
import Continuations from '../../components/Home/Continuations';
import Recommendations from '../../components/Home/Recommendations';

import AnimeTrailer from '../../../assets/videos/trailer1.mp4';

import { useRecoilState } from 'recoil';
import { videoTeaserEnd } from '../../store';
import TeaserVideoPlayer from '../../components/Home/TeaserVideoPlayer';
import Shorts from '../../components/Home/Shorts';
import animeList from '../../data/animes';

export default function HomePage(){
	const [ teaserEnd ] = useRecoilState(videoTeaserEnd);

	return (
		<Container>
			<LinearGradient colors={['#212121','#212121']} style={{ flex: 1 }}>
				<CategorysScroll>
					{ !teaserEnd ? <TeaserVideoPlayer video={AnimeTrailer} /> : undefined }
					<Recommendations />
					<Shorts />
					<AnimeList 
						title='Recomendados para você'
						animes={animeList.animeListOne}
					/>
					<Continuations/>
					<AnimeList 
						title='Meus favoritos'
						animes={animeList.animeListTwo}
					/>
					<AnimeList 
						title='Novos animes'
						animes={animeList.animeListThree}
					/>
					<AnimeList 
						title='Populares'
						animes={animeList.animeListFour}
					/>
				</CategorysScroll>
			</LinearGradient>
		</Container>
	);
}