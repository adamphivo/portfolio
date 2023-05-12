import styled from "styled-components";

const Title = styled.h1`
  font-family: var(--font-logo);
  font-size: 3rem;
  letter-spacing: -20px;
  width: max-content;
  user-select: none;
`;

export default function Logo() {
  return <Title>AV</Title>;
}
