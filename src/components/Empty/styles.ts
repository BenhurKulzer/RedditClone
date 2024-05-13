import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  gap: 16px;

  align-items: center;
  justify-content: center;
`;

export const EmptyDescription = styled.Text`
  color: #0e0e0e;

  text-align: center;
  font-size: ${({ theme }) => RFValue(theme.FONT_SIZE.M)}px;
`;
