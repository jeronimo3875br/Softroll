import styled from 'styled-components/native';

interface IOptionStyle {
    backgroundColor?: string;
    color?: string;
}

export const OptionContent = styled.TouchableOpacity`
    background-color: ${(props: IOptionStyle) => props.backgroundColor};
    width: 85%;
    margin-bottom: 20px;
    height: 60px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
`;

export const OptionText = styled.Text`
    color: ${(props: IOptionStyle)  => props.color};
    font-weight: bold;
    font-size: 18px;
`;