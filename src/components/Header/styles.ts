import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  padding: 30px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FEFEFE;
`;

export const LogoArea = styled.View`
  /* background-color: red; */
`;

export const HeaderOptions = styled.View`
  flex-direction: row;
  width: 30%;
  margin-top: 32px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #707070;
  font-weight: 700;
  font-style: italic;
  margin-top: 30px;
  border-color: red;
`;

export const BorderBottom = styled.View`
  border: 4px solid #B5C401;
  width: 100px;
  border-radius: 6px;
  margin-top: 3px;
`;
