import styled from "styled-components";

const Text = styled.div`
  font-size: 2.6rem;
  font-family: var(--font-logo);
  user-select: none;
`;

const Name = styled.span`
  color: var(--color-accent);
`;

export default function Presentation() {
  return (
    <>
      <Text>
        <p>Hello 👋</p>
        <p>
          I'm <Name>Adam</Name>,
        </p>
        <p>web developer</p>
      </Text>
    </>
  );
}
