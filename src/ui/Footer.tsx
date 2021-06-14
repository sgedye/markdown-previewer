import styled from "styled-components";
import australia from "../assets/images/australia.png";

export const Footer: React.FC<Record<string, never>> = () => {
  return (
    <StyledFooter className="container-fluid bg-dark d-flex justify-content-center align-items-center">
      <div className="">
        <img
          src={australia}
          alt="Australia"
          width={100}
          height={100}
          className="img-fluid"
        />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: -8rem;
  min-height: 8rem;
  max-height: 8rem;
`;
