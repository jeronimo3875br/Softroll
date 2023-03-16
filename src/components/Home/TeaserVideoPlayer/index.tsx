import { useRecoilState } from 'recoil';
import React, { useRef, useState } from 'react';
import { AVPlaybackSource, Video } from 'expo-av';
import { videoTeaserEnd, videoTeaserSong } from '../../../store';

interface ITeaserVideoPlayer {
    video: AVPlaybackSource | undefined;
}

export default function TeaserVideoPlayer(videoSource: ITeaserVideoPlayer){
	const video = useRef(null);
	const [ status, setStatus ] = useState({});
	const [ teaserSong ] = useRecoilState(videoTeaserSong);
	const [ teaserEnd, setTeaserEnd ] = useRecoilState(videoTeaserEnd);
    
	return (
		<Video
			ref={video}
			source={videoSource.video}
			resizeMode="stretch"
			style={{
				position: 'absolute',
				width: '100%',
				height: 450
			}}
			onPlaybackStatusUpdate={status => {
				setStatus(() => status);
				if (status.didJustFinish){
					setTeaserEnd(true);
				}
			}}
			shouldPlay
			isMuted={teaserSong}
		/>
	);
}