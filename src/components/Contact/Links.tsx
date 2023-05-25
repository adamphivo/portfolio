import styled from "styled-components";
import AnimatedLink from "../AnimatedLink";
import resume from "../../assets/docs/CV.pdf";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

export default function Links() {
  return (
    <>
      <Container>
        <AnimatedLink url="https://www.linkedin.com/in/adam-phi-vo/" label="LinkedIn" title="LinkedIn"></AnimatedLink>
        <AnimatedLink url="https://github.com/adamphivo" label="Github" title="Github"></AnimatedLink>
        <AnimatedLink url={resume} label="Resume" title="Resume"></AnimatedLink>
      </Container>
    </>
  );
}
