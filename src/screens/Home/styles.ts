import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import {Feather} from '@expo/vector-icons';

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

export const Paginate = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding: ${RFValue(10)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bottomSheet};
  border-radius: ${RFValue(12)}px;
  z-index: -1;
`;

export const PageButton = styled.TouchableOpacity`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(10)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PageButtonSelected = styled.TouchableOpacity`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;
  border-radius: ${RFValue(15)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const NumericButtonContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const NumericButtonText = styled.Text`
     font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.card};
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.card};
`;


