import styled from "styled-components";
import Links from "./Links";
import Location from "./Location";
import AnimatedLink from "../AnimatedLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1366px) {
    justify-content: center;
    align-items: center;
  }
`;

export default function Infos() {
  return (
    <Container>
      <AnimatedLink url="mailto:adamphivo@gmail.com" label="adamphivo@gmail.com" title="Mail"></AnimatedLink>
      <Links></Links>
      <Location />
    </Container>
  );
}
