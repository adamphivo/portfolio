import styled from "styled-components";
import Presentation from "./Presentation";
import ScrollDownIcon from "./ScrollDownIcon";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Hero() {
  return (
    <>
      <Section>
        <Presentation />
        <ScrollDownIcon />
      </Section>
    </>
  );
}
