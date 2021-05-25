import styled from 'styled-components/native';

interface iContainerProps {
  color: string;
  isActive: boolean;
}

export const Container = styled.TouchableOpacity<iContainerProps>`
  width: 63px;
  height: 65px;
  border-radius: 100px;

  justify-content: center;
  align-items: center;

  color:  ${props => props.isActive ? props.color :  'white' };
  background-color:  ${props => props.isActive ? props.color : 'white' };
  
  border: none;  
  margin: 0px 12px 15px 0px;
  
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
`;

export const CustomText = styled.Text<iContainerProps>`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: ${props => props.isActive ?  'white'  : props.color  };
`;