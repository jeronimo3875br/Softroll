import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 3px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

export const ShortDetail = styled.TouchableOpacity`
    width: 75px;
    height: 75px;
    padding: 3px;
    border-radius: 50px;
    border: 1.5px solid #ad8f67;
    box-shadow: 0px 0px 10px #000000;
    elevation: 10;
    flex-shrink: 0;
`;

export const ShortImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    flex-shrink: 0;
`;

export const ShortTitle = styled.Text`
    margin-top: 5px;
    color: #ffffff;
    font-weight: bold;
    font-size: 14px;
`;