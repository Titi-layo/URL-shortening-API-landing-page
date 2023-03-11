import { StyledHeader } from "./header.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo/logo";
import { Nav } from "../nav/nav";
import { useState } from "react";
import { Container } from "../container/container";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <Container>
      <StyledHeader>
        <div className="wrapper">
          <Logo />
          <button className="faBars" onClick={() => setShowNav(!showNav)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <Nav showNav={showNav} />
      </StyledHeader>
    </Container>
  );
};
