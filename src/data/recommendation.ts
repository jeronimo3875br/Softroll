import RecommendationTrailerOne from '../../assets/videos/trailer1.mp4';
import RecommendationBannerOne from '../../assets/images/recommendation1.jpg';
import { IRecommendation } from '../dtos/IAnimeRecommendationDTO';

export default [
	{ 
		name: 'Kobayashi-san',
		description: 'Kobayashi vivia sozinha em um apartamento, até que um dia, Tooru apareceu e elas acabaram vivendo juntas. Tooru, que é uma garota dragão, encara os seres...',
		banner: RecommendationBannerOne,
		video: RecommendationTrailerOne
	}
] as IRecommendation[];