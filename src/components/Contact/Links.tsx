import styled from "styled-components";
import resume from "../../assets/docs/CV.pdf";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled.a`
  border-bottom: 1px solid transparent;
  transition-duration: 0.3s;
  &:hover {
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;

export default function Links() {
  return (
    <>
      <Container>
        <Link href="https://www.linkedin.com/in/adam-phi-vo/" target="_blank">
          LinkedIn
        </Link>
        <Link href="https://github.com/adamphivo" target="_blank">
          Github
        </Link>
        <Link href={resume} download={true} target="_blank">
          Resume
        </Link>
      </Container>
    </>
  );
}
