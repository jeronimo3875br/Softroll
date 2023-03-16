import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 350px;
    height: 200px;
    box-shadow: 0px 0px 10px #000000;
    elevation: 10;
    margin-right: 20px;
    background-color: #212121;
`;


export const Frame = styled.ImageBackground`
    flex: 1;
`;

export const Header = styled.View``;

export const Title = styled.Text`
    color: #ffffff;
    font-size: 23px;
    font-weight: bold;
`;

export const Info = styled.Text`
    font-size: 17px;
    color: #ffffff;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ContinueButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ContinueButtonText = styled.Text`
    color: #d6b384;
    font-size: 15px;
    margin-left: 3px;
`;

export const Time = styled.Text`
    color: #ffffff;
    font-size: 13px;
    background-color: #212121;
    padding: 2px 4px;
    border-radius: 2px;
`;

export const InnerFrame = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    padding-bottom: 20;
    justify-content: space-between;
    border-radius: 10px;
`;