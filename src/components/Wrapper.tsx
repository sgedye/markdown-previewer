import styled from "styled-components";

interface WrapperProps {
  title: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ title, children }) => {
  return (
    <StyledWrapper className="d-flex flex-column mb-4">
      <div className="bg-danger d-flex align-items-center p-3">
        <StyledTitle className="text-white">{title}</StyledTitle>
      </div>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  box-shadow: 0.5rem 0.5rem 0.5rem grey;
  overflow: auto;
  border: 1px solid black;
  border-radius: 0.75rem;
  textarea,
  div {
    box-shadow: 0 1rem 4.5rem 0px black;
  }
`;

const StyledTitle = styled.h2`
  text-shadow: 2px 2px 2px #111;
`;
