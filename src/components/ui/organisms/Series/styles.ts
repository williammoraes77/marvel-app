import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { Props } from '.';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(FlatList as new () => FlatList<Props>).attrs({})`
  flex: 1;
`;

export const Separator = styled.View`
  margin: 10px;
`;

export const SerieContent = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.card};
`;

