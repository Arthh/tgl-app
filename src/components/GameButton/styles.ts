import styled from 'styled-components/native';

interface iContainerProps {
  color: string;
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<iContainerProps>`
  width: 113px;
  height: 34px;

  justify-content: center;
  align-items: center;

  color:  ${props => props.isActive ? 'white' : props.color};
  background-color:  ${props => props.isActive ? props.color : 'white'};
  
  border: 2px solid ${props => props.color};
  border-radius: 100px;
  opacity: 1;
  
  margin: 0px 8px;
  
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
`;

export const CustomText = styled.Text<iContainerProps>`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.color};
`;