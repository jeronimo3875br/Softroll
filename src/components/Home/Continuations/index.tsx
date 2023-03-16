import React from 'react';
import { Container } from './style';
import Continuation from '../Continuation';

import FrameOne from '../../../../assets/images/frames/frame1.jpg';
import FrameTwo from '../../../../assets/images/frames/frame2.jpg';

export default function Continuations(){
	return (
		<Container 
			from={{
				opacity: 0,
				translateY: 100
			}}

			animate={{
				opacity: 1,
				translateY: 0
			}}

			delay={1000}
			horizontal>
			<Continuation 
				frame={FrameTwo}
				info="S1 E1 - O fim do começo e o começo do fim"
				time='3m'
				title='RE: Zero'
			/>
			<Continuation 
				frame={FrameOne}
				info="S1 E9 - Caminho"
				time='15m'
				title='Black Clover'
			/>
		</Container>
	);
}