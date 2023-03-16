import React from 'react';
import { AccountNotifications, NotificationValue, NotificationValueText } from './style';

import { Ionicons } from '@expo/vector-icons';

export default function Notification(){
	return (
		<AccountNotifications>
			<NotificationValue
				from={{
					width: 0,
					height: 0,
					opacity: 0
				}}

				animate={{
					width: 21,
					height: 21,
					opacity: 1
				}}
				delay={1000}>
				<NotificationValueText>10</NotificationValueText>
			</NotificationValue>
			<Ionicons
				name='notifications'
				size={30}
				color="#ffffff"
			/>
		</AccountNotifications>
	);
}