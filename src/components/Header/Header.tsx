import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 4rem;
  height: 120px;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}
