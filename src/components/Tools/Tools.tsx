import styled from "styled-components";
import Marquees from "./Marquees";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--site-width);
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Title = styled.h2`
  width: 100%;
  text-align: end;
  font-size: 2.6rem;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Accent = styled.span`
  color: var(--color-accent);
  font-family: var(--font-mono);
`;

export default function Tools() {
  return (
    <Section>
      <Container>
        <Title>
          <Accent>2.</Accent> Tools of the trade
        </Title>
        <Content>
          <Marquees />
        </Content>
      </Container>
    </Section>
  );
}
