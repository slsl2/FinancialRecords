import styled from "styled-components";

const Button = ({ backgroundColor, color, contents }) => {
  return (
    <StyledButton $backgroundColor={backgroundColor} $color={color}>
      {contents}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  line-height: 150%;
  font-size: 1.4rem;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

export default Button;
