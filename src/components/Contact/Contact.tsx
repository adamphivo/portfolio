import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
  z-index: 1000;
`;

export default function Contact() {
  return <Section />;
}
