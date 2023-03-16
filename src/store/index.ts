import { atom } from 'recoil';

export const videoTeaserSong = atom({
	key: 'videoTeaserSong',
	default: true,
});

export const videoTeaserEnd = atom({
	key: 'videoTeaserEnd',
	default: false
});