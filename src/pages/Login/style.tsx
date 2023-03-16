import styled from 'styled-components/native';

interface IFormFieldStatus {
    color: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: #212121;
    align-items: center;
    justify-content: center;
`;

export const ImageContainer = styled.ImageBackground`
    flex: 2;
    width: 100%;
    justify-content: flex-end;
`;

export const Form = styled.View`
    width: 85%;
    flex: 1;
    transform: translateY(-300px);
`;

export const FormTitle = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #ad8f67;
`;

export const  FormSubTitle = styled.Text`
    font-size: 20px;
    color: #f3f3f3;
    margin-bottom: 20px;
`;

export const FormField = styled.View`
    width: 100%;
    margin-top: 20px;
`;

export const FormLabel = styled.Text`
    font-size: 20px;
    color: #f3f3f3;
`;

export const FormInput = styled.View`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color: #ad8f67;
    flex-direction: row;
    align-items: center;
    background-color: #171717;
    padding: 3px;
    padding-left: 10px;
    margin-top: 7px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

export const FormInputText = styled.TextInput`
    padding-bottom: 5px;
    height: 45px;
    color: #808080;
    font-size: 17px;
    margin-left: 10px;
    width: 100%;
`;

export const FormSubmitButton = styled.TouchableOpacity`
    margin-top: 20px;
    background-color: #ad8f67;
    align-items: center;
    justify-content: center;
    width: 130px;
    border-radius: 4px;
    height: 50px;
    align-self: flex-end;
    flex-direction: row;
`;

export const FormSubmitButtonText = styled.Text`
    font-size: 17px;
    color: #f3f3f3;
    font-weight: bold;
    margin-right: 5px;
`;

export const FormFieldStatus = styled.Text`
    margin-top: 10px;
    font-size: 15px;
    color: ${(props: IFormFieldStatus) => props.color};
`;

export const FormOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
`;

export const ForgotPasswordButton = styled.TouchableOpacity``;

export const ForgotPasswordButtonText = styled.Text`
    font-size: 15px;
    color: #f3f3f3;
`;

export const RememberLoginContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const RememberLoginText = styled.Text`
    font-size: 15px;
    color: #f3f3f3;
    margin-left: 10px;
`;

export const VisiblePasswordButton = styled.TouchableOpacity`
    position: absolute;
    right: 0;
    margin-right: 10px;
`;