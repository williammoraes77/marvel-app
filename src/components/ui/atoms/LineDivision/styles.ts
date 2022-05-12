import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Division = styled.View`
  width: 100%;
  height: ${RFValue(4)}px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${RFValue(8)}px;
`;

