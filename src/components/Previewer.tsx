import styled from "styled-components";

export const Previewer: React.FC<Record<string, never>> = () => {
  return <StyledEditor id="preview">hi</StyledEditor>;
};

const StyledEditor = styled.textarea`
  height: 20rem;
`;
