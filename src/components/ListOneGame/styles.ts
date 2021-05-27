import styled from 'styled-components/native';

interface IContainerProps {
  color: string;
}

interface IGameType {
  color: string;
}

export const GameType = styled.Text<IGameType>`
  margin-top: 5px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.color};
`;

export const GameNumbers = styled.Text`
  flex-wrap: wrap;
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
`;

export const GameInfos = styled.Text`
  font-size: 15px;
  font-weight: normal;
  font-style: italic;
  color: #868686;
`;

export const GamePrice = styled.Text`
  font-size: 17px;
  font-weight: normal;
  font-style: italic;
  color: #868686;
  margin-left: 10px;
`;


export const InfoGameArea = styled.View`
  display: flex;
  margin: 0px 10px;
  width: 100%;
  flex-direction: column;
  opacity: 1;
`;

export const Container = styled.View<IContainerProps>`
  display: flex;
  margin: 5px 2px 15px 2px;
  border-left-color: ${props => props.color};
  border-left-width: 6px;
`;
