import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import styled from "styled-components";
import Marquees from "./Marquees";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition-duration: 0.5s;
  &.invisible {
    opacity: 0;
  }

  @media (max-width: 1366px) {
    padding: 1.5rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--site-width);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 100%;
  text-align: end;
  font-size: 2.6rem;
  user-select: none;
  @media (max-width: 1366px) {
    font-size: 1.7rem;
    text-align: center;
  }
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
  const element = useRef<HTMLElement>(null);
  const entry = useIntersectionObserver(element, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  return (
    <Section ref={element} className={isVisible ? "" : "invisible"}>
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
