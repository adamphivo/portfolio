import styled from "styled-components";
import Links from "./Links";
import Location from "./Location";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 1366px) {
    justify-content: center;
    align-items: center;
  }
`;

const Mail = styled.a`
  font-family: var(--font-mono);
  font-size: 1.2rem;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition-duration: 0.3s;
  &:hover {
    border-bottom: 1px solid white;
  }
`;

export default function Infos() {
  return (
    <Container>
      <Mail href="mailto:adamphivo@gmail.com">adamphivo@gmail.com</Mail>
      <Links></Links>
      <Location />
    </Container>
  );
}
