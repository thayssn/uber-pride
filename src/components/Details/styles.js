import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  shadow-color: #de3856;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-radius: 10;
  elevation: 3;
  border: 1px solid #ddd;
  align-items: center;
  padding: 20px;
`;

export const TypeTitle = styled.Text`
  font-size: 20px;
  color: #de3856;
`;

export const TypeDescription = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const TypeImage = styled.Image`
  height: 80px;
  margin: 10px 0;
`;

export const RequestButton = styled.TouchableOpacity`
  background-color: #de3856;
  justify-content: center;
  align-items: center;
  height: 44px;
  align-self: stretch;
  margin-top: 10px;
`;

export const RequestButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;
