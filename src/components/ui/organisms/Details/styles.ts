import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Props } from '.';

export const Container = styled(FlatList as new () => FlatList<Props>).attrs({})`
  flex: 1;
`;

export const Separator = styled.View`
  margin: 10px;
`;

