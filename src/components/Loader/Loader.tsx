import styled from "styled-components";
import { useProgress } from "@react-three/drei";

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export default function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return (
    <>
      <Container>
        <div>{progress} %</div>
        <div>{active}</div>
        <div>{item}</div>
        <div>{loaded}</div>
        <div>{total}</div>
        <div>{errors}</div>
      </Container>
    </>
  );
}
