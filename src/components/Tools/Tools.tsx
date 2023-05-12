import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Tools() {
  return (
    <Section>
      <div>Tools of the trade</div>
      <Marquee>
        <div>Toto</div>
      </Marquee>
    </Section>
  );
}
