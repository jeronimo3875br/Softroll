import { AVPlaybackSource } from 'expo-av';
import { ImageSourcePropType } from 'react-native';

export interface IRecommendation {
    name: string;
    description: string;
    banner: ImageSourcePropType;
    video: AVPlaybackSource;
}