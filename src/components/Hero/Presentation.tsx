import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import hi from "../../assets/imgs/hi.png";

const Text = styled.div`
  font-size: 2.6rem;
  font-family: var(--font-logo);
  user-select: none;
`;

const Name = styled.span`
  color: var(--color-accent);
  font-family: var(--font-mono);
`;

const Hi = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const HiContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default function Presentation() {
  return (
    <>
      <Text>
        <Fade direction="up" cascade>
          <HiContainer>
            <p>Hi</p>
            <Hi src={hi}></Hi>
          </HiContainer>
          <p>
            I'm <Name>Adam</Name>,
          </p>
          <p>web developer</p>
        </Fade>
      </Text>
    </>
  );
}
