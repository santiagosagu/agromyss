import React from "react";
import Gallery from "react-grid-gallery";
import { IMAGES } from "./constans";
import styled from "@emotion/styled";

const Component = styled.div`
  padding-bottom: 2rem;

  @media (min-width: 1200px) {
    width: 90%;
    height: 77rem;
    margin: 4rem auto;
  }
`;

const GaleriaComponent = () => {
  return (
    <Component>
      <Gallery
        images={IMAGES}
        showLightboxThumbnails
        style={{ marginBottom: "2rem" }}
      />
    </Component>
  );
};

export default GaleriaComponent;
