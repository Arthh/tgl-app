import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 136px;
  margin-top: 30%;
  padding: 20px;
  background-color: #F7F7F7;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 23px;
  font-weight: bold;
  font-style: italic;
  color: #707070;
`;

export const FilterText = styled.Text`
  text-transform: capitalize;
  font-size: 18px;
  font-style: italic;
  color: #868686;
  margin: 15px 0px;
`;

export const FilterButtonArea = styled.View`
  display: flex;
  flex-direction: column;
`;