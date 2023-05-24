import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { devIcons, designIcons } from "./Icons";

const Icon = styled.img`
  height: 75px;
  width: auto;
  /* filter: grayscale(100%); */
  transition: 0.2s;
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 1366px) {
    height: 50px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  padding: 0 25px;
`;

const MarqueesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  width: 100%;
`;

export default function Marquees() {
  return (
    <>
      <MarqueesContainer>
        <Marquee autoFill={true}>
          <IconsContainer>
            {devIcons.map((icon) => (
              <Icon src={icon} />
            ))}
          </IconsContainer>
        </Marquee>
        <Marquee direction="right" autoFill={true}>
          <IconsContainer>
            {designIcons.map((icon) => (
              <Icon src={icon} />
            ))}
          </IconsContainer>
        </Marquee>
      </MarqueesContainer>
    </>
  );
}
