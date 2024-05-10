import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  gap: 16px;
  padding: 12px;
  border-radius: 12px;

  align-items: center;
  flex-direction: row;
  background-color: ${({theme}) => theme.COLORS.BG_WHITE};
`;

export const CardImage = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 8px;
`;

export const CardWrapper = styled.View`
  flex: 1;
  gap: 12px;
  flex-shrink: 1;
`;

export const CardWhen = styled.Text`
  color: #999;

  text-align: right;
  font-size: ${RFValue(10)}px;
`;

export const CardTitle = styled.Text`
  color: #000;

  font-size: ${RFValue(12)}px;
`;

export const CardInfoWrapper = styled.View`
  gap: 8px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const CardInfoAuthor = styled.Text`
  color: #999;

  flex-shrink: 1;
  font-size: ${RFValue(9)}px;
`;

export const CardInfoScore = styled.Text`
  color: #999;

  flex-shrink: 1;
  font-size: ${RFValue(9)}px;
`;

export const CardInfoComments = styled.Text`
  color: #999;

  flex-shrink: 1;
  font-size: ${RFValue(9)}px;
`;
