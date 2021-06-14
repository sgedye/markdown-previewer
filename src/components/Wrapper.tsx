import React from "react";

interface WrapperProps {
  title: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ title, children }) => {
  return (
    <div className="d-flex flex-column mb-4">
      <div className="bg-danger d-flex align-items-center p-3">
        <h2 className="text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
};
