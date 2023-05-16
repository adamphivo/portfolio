import styled from "styled-components";
import Logo from "./Logo";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5rem;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
}
