import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  border-radius: ${RFValue(35)}px;
  border: ${RFValue(3)}px solid white;
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  justify-content: center;
  align-items: center;
`;

