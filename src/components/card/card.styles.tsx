import styled from "@emotion/styled";

export const StyledCard = styled.div`
  padding: 70px 40px 30px;
  background: white;
  border-radius: 5px;
  position: relative;

  h3 {
    font-size: 1.5rem;
  }

  p {
    color: var(--gray);
    margin-top: 15px;
    font-weight: 700;
  }

  .ident {
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    .ident {
      left: unset;
      transform: unset;
    }
  }
`;
