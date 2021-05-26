import styled from 'styled-components/native';


export const NumbersArea = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 0 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  padding-top: 20px;
`;

export const ButtonsOptions = styled.View`
  width: 100%;
  /* height: 100px; */

  display: flex;
  flex-direction: column;
`;