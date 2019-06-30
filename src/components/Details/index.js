import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText
} from "./styles";

import uberx from "../../assets/uberx.png";

// import { Container } from './styles';

export default class Details extends Component {
  render() {
    const { duration } = this.props;
    return (
      <Container>
        <TypeTitle>Orgulho LGBTQ+</TypeTitle>
        <TypeDescription>Siga bem, caminhoneiro.</TypeDescription>
        <TypeImage source={uberx} />
        <TypeTitle>Uber Pride</TypeTitle>
        <TypeDescription>
          {`R$ ${(Math.max(duration, 15) * 0.4)
            .toFixed(2)
            .toString()
            .replace(".", ",")}`}
        </TypeDescription>
        <RequestButton onPress={() => {}}>
          <RequestButtonText>Solicitar UberPride</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
