import styled from 'styled-components/native';

interface IButtonProps {
  addToCart?: boolean;
}

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
  flex-direction: row;
`;

export const GameButtonOptions = styled.TouchableOpacity<IButtonProps>`
  width: ${props => props.addToCart ? '135px' : 'auto'};
  height: 32px;
  border: 1px solid #B5C401;
  border-radius: 7px;
  padding: 5px;

  justify-content: center;
  align-items: center;

  margin: 0px 4px;

  font-size: 16px;
  font-weight: normal;
  font-style: normal;

  background-color: ${props => props.addToCart ? '#B5C401' : '#F7F7F7'};

`;


export const GameButtonText = styled.Text<IButtonProps>`
  color: ${props => props.addToCart ? '#FFF' : '#B5C401'};
`;