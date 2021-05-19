import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 93%;
  background-color: #F7F7F7;
`;

export const FormInfos = styled.View`
  align-items: center;
`;

export const LogoTgl = styled.Text`
  font-size: 44px;
  color: #707070;
  font-weight: 700;
  font-style: italic;
  margin-top: 30%;
`;

export const BorderBottom = styled.View`
  border: 4px solid #B5C401;
  width: 100px;
  border-radius: 6px;
  margin-bottom: 50px;
`;

export const FormTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
  opacity: 1
`;

export const FormBody = styled.View`
  display: flex;
  align-self: center;
  flex-direction: column;
  width: 80%;
  height: auto;

  background-color: #FFFF;
  box-shadow: 0px 3px 25px #F7F7F7;
  border-radius: 19px;
  border: 1px solid #DDD;

  margin: 25px 0px;
`;

export const ForgotText = styled.Text`
  text-align: right;
  padding: 20px 30px;

  font-size: 15px;
  font-style: italic;
  color: #C1C1C1;
`;


export const ButtonLogin = styled.Text`
  background-color: transparent;
  text-align: center;
  margin: 25px 0px;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  color: #B5C401;
`;

export const ButtonSignUp = styled.Text`
  background-color: transparent;
  text-align: center;
  margin: 25px 0px;
  font-size: 35px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`;