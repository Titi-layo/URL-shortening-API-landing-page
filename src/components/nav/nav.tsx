import { StyledNav } from "./nav.styles";
import { Button } from "../button/button";

type NavProps = {
  showNav: boolean;
};

export const Nav = (props: NavProps) => {
  return (
    <StyledNav showNav={props.showNav}>
      <div>
        <a>Features</a>
        <a>Pricing</a>
        <a>Resources</a>
      </div>
      <hr />
      <div>
        <a>Login</a>
        <Button shape="round" size="small" width="100%">
          Sign Up
        </Button>
      </div>
    </StyledNav>
  );
};
