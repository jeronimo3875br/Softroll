import { RecoilRoot } from 'recoil'; 
import 'react-native-gesture-handler';
import React from 'react';
import { StackRoutes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import 'react-native-reanimated';
import 'react-native-gesture-handler';

export default function App() {
	return (
		<NavigationContainer>
			<RecoilRoot>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<StackRoutes/>
				</GestureHandlerRootView>
				<StatusBar 
					backgroundColor='#212121' 
					style="light" 
				/>
			</RecoilRoot>
		</NavigationContainer>
	);
}