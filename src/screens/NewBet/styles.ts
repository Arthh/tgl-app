import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: auto;
  /* margin-top: 30%; */
  padding: 20px;
  background-color: #F7F7F7;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-size: 22px;
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

export const GameTypeArea = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 0 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  height: auto;
`;

export const ListGamesArea = styled.ScrollView.attrs({
  contentContainerStyle: { paddingVertical: 0 },
  vertical: true,
  showsVerticalScrollIndicator: false,
})`
  background-color: #F7F7F7;
  padding: 20px;
  width: 100%;
  height: 100%;
`;
