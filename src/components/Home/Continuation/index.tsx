import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { 
	Container,
	ContinueButton,
	ContinueButtonText,
	Frame,
	Header,
	Info,
	Time,
	Title,
	Footer,
	InnerFrame
} from './style';

import { Ionicons } from '@expo/vector-icons';

interface IContinuation {
    title: string;
    info: string;
    time: string;
    frame: ImageSourcePropType;
}

export default function Continuation({ frame, info, time, title }: IContinuation){
	return (
		<Container>
			<Frame source={frame} borderRadius={10}>
				<InnerFrame>
					<Header>
						<Title>{ title }</Title>
						<Info>{ info }</Info>
					</Header>
					<Footer>
						<ContinueButton>
							<Ionicons 
								name="play"
								size={20}
								color="#ad8f67"
							/>
							<ContinueButtonText>Continue de onde parou</ContinueButtonText>
						</ContinueButton>
						<Time>{time} restantes</Time>
					</Footer>
				</InnerFrame>
			</Frame>
		</Container>
	);
}