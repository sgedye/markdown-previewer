import styled from "styled-components";

export const Editor: React.FC<Record<string, never>> = () => {
  return <StyledEditor id="editor">hi</StyledEditor>;
};

const StyledEditor = styled.textarea`
  height: 20rem;
`;
