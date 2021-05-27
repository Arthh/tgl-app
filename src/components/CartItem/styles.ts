import styled from 'styled-components/native';

interface IProps {
  color: string;
}

export const Container = styled.View<IProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 5px 2px 10px 5px;
  border-left-width: 6px;
  border-left-color: ${props => props.color};
`;

export const RemoveButtonArea = styled.View<IProps>`
  display: flex;
  width: 30px;
  height: auto;
  justify-content: center;
  border-right-width: 6px;
  border-right-color: ${props => props.color};
`;

export const InfoGameArea = styled.View`
  display: flex;
  /* word-wrap: break-word; */
  margin: 0px 10px;
  width: 80%;
  flex-direction: column;
  opacity: 1;
`;

export const Numbers = styled.Text`
  margin: 8px 10px;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  color: #868686;
`;

export const GameType = styled.Text<IProps>`
  margin: 5px 10px;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.color};
`;

export const GamePrice = styled.Text`
  font-size: 13px;
  font-weight: normal;
  font-style: italic;
  color: #868686;
  margin-left: 6px;
`;