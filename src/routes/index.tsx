import React from 'react';
import { RootStackParamsList } from '../RootStackParamsList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from '../pages/Home';
import WelcomePage from '../pages/Welcome';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';

import HomeHeader from '../components/Home/Header';
import Search from '../components/Home/Search';

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamsList>();
const Tab = createBottomTabNavigator();

function StackRoutes(){
	return (
		<Stack.Navigator 
			initialRouteName={'welcome'}>
			<Stack.Screen 
				name="welcome"
				component={WelcomePage}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen 
				name="home"
				component={TabRoutes}
				options={{
					header: () => <HomeHeader />
				}}
			/>
			<Stack.Screen 
				name="login"
				component={LoginPage}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen 
				name="register"
				component={RegisterPage}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}

function TabRoutes(){
	return (
		<Tab.Navigator initialRouteName='Home'>
			<Tab.Screen 
				name="Home" 
				component={HomePage} 
				options={{
					headerShown: false,
					tabBarStyle: {
						height: 70,
						backgroundColor: '#212121',
						borderTopWidth: 0,
						paddingTop: 10,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
								marginBottom: 10
							}}>Home</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
							marginBottom: 10
						}}>Home</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="home"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="home-outline"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="MyList" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						height: 70,
						backgroundColor: '#212121',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
								marginBottom: 10
							}}>Minha lista</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
							marginBottom: 10
						}}>Minha lista</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="bookmark"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="bookmark-outline"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="Search" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>}
				options={{
					headerShown: false,
					tabBarLabel: '',
					tabBarIcon: () => <Search />
				}}
			/>
			<Tab.Screen 
				name="Catalog" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						height: 70,
						backgroundColor: '#212121',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
								marginBottom: 10
							}}>Categorias</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
							marginBottom: 10
						}}>Categorias</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="apps"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="apps-outline"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
			<Tab.Screen 
				name="Perfil" 
				component={() => <View style={{ flex: 1, backgroundColor: '#171717' }}></View>} 
				options={{
					headerShown: false,
					tabBarStyle: {
						height: 70,
						backgroundColor: '#212121',
						borderTopWidth: 0,
					},
					tabBarLabel({ focused }) {
						if (focused){
							return <Text style={{ 
								color: '#ad8f67',
								fontSize: 13,
								fontWeight: 'bold',
								marginBottom: 10
							}}>Perfil</Text>;
						}

						return  <Text style={{ 
							color: '#3f3e37',
							fontSize: 13,
							fontWeight: 'bold',
							marginBottom: 10
						}}>Perfil</Text>;
					},
					tabBarIcon: ({ focused }) => {
						if (focused){
							return <Ionicons 
								name="person"
								color="#ad8f67"
								size={23}
							/>;
						}

						return <Ionicons 
							name="person-outline"
							color="#3f3e37"
							size={23}
						/>;
					}
				}}
			/>
		</Tab.Navigator>
	);
}

export { TabRoutes, StackRoutes };