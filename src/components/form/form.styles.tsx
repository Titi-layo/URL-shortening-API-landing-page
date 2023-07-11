import styled from "@emotion/styled";

export const StyledForm = styled.form`
  background-color: var(--dark-violet);
  background-image: url("/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  gap: 15px;
  border-radius: 10px;
  flex-wrap: wrap;

  input {
    border-radius: 5px;
    flex: 1;
    padding: 10px;
  }

  .validation-active {
    color: var(--red);
  }

  input.validation-active {
    outline: 3px solid var(--red);
  }

  input.validation-active::placeholder {
    color: var(--red);
  }

  .validation-msg {
    width: 100%;
    font-style: italic;
  }

  @media (min-width: 768px) {
    padding: 50px;
    flex-direction: row;
    gap: 20px;

    input {
      padding: 20px;
    }
  }
`;
