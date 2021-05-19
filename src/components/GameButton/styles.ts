import styled from 'styled-components/native';

interface iContainerProps {
  color: string;
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<iContainerProps>`
  width: 113px;
  height: 34px;
  color:  ${props => props.isActive ? 'white' : props.color};
  background-color:  ${props => props.isActive ? props.color : 'white'};
  
  border: 2px solid ${props => props.color};
  border-radius: 100px;
  opacity: 1;
  margin: 0px 10px;
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
`;

export const CustomText = styled.Text<iContainerProps>``;