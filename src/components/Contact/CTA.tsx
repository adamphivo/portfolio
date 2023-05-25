import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Title = styled.h3`
  font-size: 2.4rem;
  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.h4`
  font-size: 2.4rem;
  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }
`;

const Accent = styled.span`
  background-color: #94e734;
  padding: 5px;
  color: #0c0c0c;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  user-select: none;
`;

export default function CTAComponent() {
  return (
    <>
      <Container>
        <Fade direction="up" cascade>
          <Title>
            Have a <Accent>great</Accent> idea ?
          </Title>
          <SubTitle>Tell me about it</SubTitle>
        </Fade>
      </Container>
    </>
  );
}
