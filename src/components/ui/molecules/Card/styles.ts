import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({})`
  flex-direction: row;
  width: 100%;
  /* height: ${RFValue(116)}px; */
  border-radius: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${RFValue(18)}px ${RFValue(9)}px;
  justify-content: space-between;
`;

export const DataContent = styled.View`
  flex: 2;
`;

export const ImageContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SeriesContent = styled.View`
  /* flex-direction: row; */
  margin-top: ${RFValue(6)}px;
`;

export const SeriesWrapper = styled.View`
  flex-direction: row;
`;

export const EventsContent = styled.View`
  /* flex-direction: row; */
  margin-top: ${RFValue(6)}px;
`;

export const EventsWrapper = styled.View`
  flex-direction: row;
`;

