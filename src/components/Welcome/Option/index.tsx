import React from 'react';
import { OptionText, OptionContent } from './style';

interface IOption {
    text: string;
    color: string;
    backgroundColor: string; 
    onClick: () => any;
}

export default function Option({ backgroundColor, color, text, onClick }: IOption){
	return (
		<OptionContent
			onPress={onClick}
			backgroundColor={backgroundColor}>
			<OptionText color={color}>{ text }</OptionText>
		</OptionContent>
	);
}