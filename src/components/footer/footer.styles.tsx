import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;

  h4 {
    margin-bottom: 20px;
  }

  .extLinks {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 30px;
    text-align: center;
  }

  .list-col {
    * + * {
      margin-top: 10px;
    }
  }

  a {
    cursor: pointer;
    display: block;
    text-decoration: none;
  }

  a:hover {
    color: var(--cyan);
  }

  @media (min-width: 760px) {
    flex-direction: row;
    align-items: start;

    .extLinks {
      flex-direction: row;
      margin-left: 250px;
      margin-top: unset;
      gap: 80px;
      text-align: unset;
      margin-right: 80px;
    }
  }
`;
