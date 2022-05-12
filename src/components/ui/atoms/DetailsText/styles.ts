import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Title = styled.Text`
  font-size: ${RFValue(11)}px;
  color: #000;
  font-family: ${({theme}) => theme.fonts.regular};
`;
