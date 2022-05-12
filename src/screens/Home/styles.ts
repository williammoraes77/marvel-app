import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperInput = styled.View`
  margin: ${RFValue(10)}px 0;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 ${RFValue(25)}px ${getBottomSpace()}px ${RFValue(25)}px;
`;
