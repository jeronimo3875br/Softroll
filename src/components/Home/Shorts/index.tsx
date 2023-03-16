import React from 'react';
import { Container } from './style';
import Short from '../Short';

import FrameOne from '../../../../assets/images/frames/frame3.jpg';
import FrameTwo from '../../../../assets/images/frames/frame6.jpg';
import FrameThree from '../../../../assets/images/frames/frame4.jpg';
import FrameFour from '../../../../assets/images/frames/frame5.jpg';
import FrameSix from '../../../../assets/images/frames/frame7.jpg';
import FrameSeven from '../../../../assets/images/frames/frame8.jpg';
import FrameEight from '../../../../assets/images/frames/frame9.jpg';

export default function Shorts(){
	return (
		<Container 
			from={{
				opacity: 0,
				translateX: -200
			}}

			animate={{
				opacity: 1,
				translateX: 0
			}}
			
			delay={1000}
			horizontal>
			<Short 
				image={FrameOne}
				title="Engraçados"
			/> 
			<Short 
				image={FrameTwo}
				title="Badass"
			/> 
			<Short 
				image={FrameThree}
				title="Românticos"
			/> 
			<Short 
				image={FrameFour}
				title="Terror"
			/>
			<Short 
				image={FrameEight}
				title="Quentes"
			/>
			<Short 
				image={FrameSix}
				title="Melhores"
			/>
			<Short 
				image={FrameSeven}
				title="Top 10"
			/>
		</Container>
	);
}