import styled from 'styled-components/native';

interface ICategoryText {
    color: string;
    fontWeight: string;
}

export const CategoryContent = styled.TouchableOpacity``;

export const CategoryText = styled.Text`
    font-size: 17px;
    color: ${(props: ICategoryText) => props.color};
    font-weight: ${(props: ICategoryText) => props.fontWeight}
`;