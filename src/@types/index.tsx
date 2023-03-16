declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

declare module '*.jpeg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

declare module '*.mp4' {
    import { AVPlaybackSource } from 'expo-av';
    const value: AVPlaybackSource;
    export default value;
}