import styled from "@emotion/styled";

type NavProps = {
  showNav: boolean;
};

export const StyledNav = styled.nav<NavProps>`
  background-color: var(--dark-violet);
  color: white;
  display: ${(props) => (props.showNav ? "block" : "none")};
  border-radius: 10px;
  overflow: hidden;
  padding: 15px;
  margin-top: 15px;

  > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    font-weight: 700;
  }

  * + * {
    margin-top: 20px;
  }

  @media (min-width: 760px) {
    color: var(--gray);
    background-color: unset;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 0;
    padding: 0 15px;

    * + * {
      margin-top: 0;
    }

    > div {
      display: flex;
      gap: 25px;
      align-items: center;
    }

    hr {
      display: none;
    }
  }
`;
