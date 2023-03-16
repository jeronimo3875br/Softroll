import { StatusBar } from 'react-native';

export function getStatusBarHeight(): number {
	return StatusBar.currentHeight ? StatusBar.currentHeight : 60;
}