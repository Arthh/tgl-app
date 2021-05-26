import styled from 'styled-components/native';

export const BackGround = styled.View`
  z-index: 3;
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.View`
  width: 40%;
  height: 94%;
  background-color: #FFF;
  margin-top: 12%;
  margin-right: 25%;
  right: 0px;
  z-index: 3;
  opacity: 1;
`;

export const TitleCart = styled.Text`
  color: #707070;
  font-size: 22px;
  font-weight: bold;
  font-style:italic;
  padding: 10px 15px; 
  text-align: left;
  width: 265px;
  background-color: #FFF;
`;


export const CartView = styled.ScrollView`
  background-color: #FFF;
  width: 265px;
`;

export const TotalView = styled.View`
  width: 265px;
  background-color: #FFF;
  flex-direction: row;
  padding: 18px 25px;
`;

export const TotalCartText = styled.Text`
  color: #707070;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
`;

export const SubtitleTotal = styled.Text`
  color: #707070;
  font-size: 15px;
  font-weight: 900;
  font-style: italic;
  margin-left: 5px;
`;

export const PriceText = styled.Text`
  color: #707070;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  margin-left: 80px;
`;

export const FinalButton = styled.TouchableOpacity`
  width: 265px;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  height: 96px;
  border: none;
  border-radius: 10px;
`;

export const TextFinalButton = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #B5C401;
`;