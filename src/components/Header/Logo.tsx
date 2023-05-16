import styled from "styled-components";

const Title = styled.h1`
  font-family: var(--font-logo);
  font-size: 2rem;
  width: max-content;
  user-select: none;
`;

const Accent = styled.span`
  color: var(--color-accent);
`;

export default function Logo() {
  return (
    <Title>
      A<Accent>V</Accent>
    </Title>
  );
}
