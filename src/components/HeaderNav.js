import styled from "styled-components";
import { PageScroll } from "../utils/pageScroll";
const HeaderNavStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3rem;
  padding: 1rem 2rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 96%;
  background: #ffffff91;
  border-radius: 10rem;
  z-index: 100;
`;

function HeaderNav() {
  return (
    <HeaderNavStyle>
      <a
        href="#none"
        onClick={() => {
          PageScroll(1);
        }}
      >
        Home
      </a>
      <a href="#none" onClick={() => {}}>
        Profile
      </a>
      <a
        href="#none"
        onClick={() => {
          PageScroll(2);
        }}
      >
        Project
      </a>
      <a
        href="#none"
        onClick={() => {
          PageScroll(3);
        }}
      >
        contact
      </a>
    </HeaderNavStyle>
  );
}
export default HeaderNav;
