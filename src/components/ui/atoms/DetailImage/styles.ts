import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.Image.attrs({
  resiMode: 'cover',
})`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  border-radius: ${RFValue(10)}px;
`;

