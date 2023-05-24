import styled from "styled-components";
import CTAComponent from "./CTA";
import InfosComponent from "./Infos";
import Experience from "../Experience/Canvas";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0c0c0c;
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  @media (max-width: 1366px) {
    grid-template-colums: 1fr;
    grid-template-rows: repeat(2, 1fr);
    max-width: unset;
  }
`;

const CTA = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: 1366px) {
    grid-area: 1 / 1 / 2 / 3;
    justify-content: center;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const Infos = styled.div`
  grid-area: 2 /1 /3 / 2;
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  @media (max-width: 1366px) {
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
  }
`;

const Form = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  position: relative;
  @media (max-width: 1366px) {
    display: none;
  }
`;

export default function Contact() {
  return (
    <Section>
      <Grid>
        <CTA>
          <CTAComponent></CTAComponent>
        </CTA>
        <Infos>
          <InfosComponent></InfosComponent>
        </Infos>
        <Form>
          <Experience />
        </Form>
      </Grid>
    </Section>
  );
}
