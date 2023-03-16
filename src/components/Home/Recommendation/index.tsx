import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { 
	Container, 
	RecommendationBanner,
	RecommendationContent,
	RecommendationDescription,
	RecommendationPlayButton,
	RecommendationPlayButtonText,
	RecommendationTitle,
	RecommendationMuteButton,
	RecommendationOperations
} from './style';

import { useRecoilState } from 'recoil';

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { videoTeaserEnd, videoTeaserSong } from '../../../store/index';

interface IRecommendation {
	title: string;
	description: string;
    image: ImageSourcePropType;
}

export default function Recommendation({ image, description, title }: IRecommendation){
	const [ teaserSong, setTeaserSong ] = useRecoilState(videoTeaserSong);
	const [ teaserEnd, _ ] = useRecoilState(videoTeaserEnd);

	return (
		<Container activeOpacity={1}>
			<RecommendationBanner source={teaserEnd ? image : undefined} resizeMode="stretch">
				<LinearGradient 
					style ={{ 
						height: '70%', 
						justifyContent: 'flex-end',
						transform: [
							{
								translateY: 2
							}
						]
					}}
					colors={['#212121', 'rgba(33, 33, 33, .8)', 'rgba(33, 33, 33, .5)', 'rgba(33, 33, 33, .3)', 'rgba(0, 0, 0, 0)'].reverse()}>
					<RecommendationContent 
						from={{
							opacity: 0,
							translateY: 100
						}}

						animate={{
							opacity: 1,
							translateY: 0
						}}
						
						delay={1000}>
						<RecommendationTitle>{ title }</RecommendationTitle>
						<RecommendationDescription>{ description }</RecommendationDescription>
						<RecommendationOperations>
							<RecommendationPlayButton>
								<Ionicons
									name="play-outline"
									size={22}
									color="#ffffff"
								/>
								<RecommendationPlayButtonText>Assistir agora</RecommendationPlayButtonText>
							</RecommendationPlayButton>
							<RecommendationMuteButton onPress={() => {
								const isMuted = teaserSong;
								setTeaserSong(!isMuted);
							}}>
								{
									!teaserSong ? 
										(
											<Ionicons
												name="volume-high"
												size={25}
												color="#ffffff"
											/>
										) :
										(
											<Ionicons
												name="volume-mute"
												size={25}
												color="#ffffff"
											/>
										)
								}
							</RecommendationMuteButton>
						</RecommendationOperations>
					</RecommendationContent>
				</LinearGradient>
			</RecommendationBanner>
		</Container>
	);
}