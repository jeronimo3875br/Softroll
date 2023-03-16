import styled from 'styled-components/native';

import { MotiView } from 'moti';

export const Container = styled.TouchableOpacity`
    padding-left: 0px;
    padding-right: 0px;
    height: 450px;
`;

export const RecommendationBanner = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
`;

export const RecommendationContent = styled(MotiView)`
    padding: 10px;
    padding-bottom: 22px;
`;

export const RecommendationTitle = styled.Text`
    font-size: 25px;
    color: #ffffff;
    margin-bottom: 5px;
    font-weight: bold;
`;

export const RecommendationDescription = styled.Text`
    font-size: 15px;
    color: #ffffff;
    margin-bottom: 10px;
`;

export const RecommendationPlayButton = styled.TouchableOpacity`
    background-color: #ad8f67;
    width: 150px;
    padding: 10px;
    border-radius: 2px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const RecommendationPlayButtonText = styled.Text`
    font-size: 17px;
    color: #ffffff;
`;

export const RecommendationOperations = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const RecommendationMuteButton = styled.TouchableOpacity``;