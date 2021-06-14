import infinity from "../assets/svg/infinity.svg";

export const Header: React.FC<Record<string, never>> = () => {
  return (
    <header
      className="container-fluid d-flex flex-column flex-md-row align-items-center p-5 mb-5"
      style={{ backgroundColor: "pink" }}
    >
      <img
        src={infinity}
        alt="infinity logo"
        style={{ display: "inline-block", marginRight: "2rem" }}
      />
      <h1 className="d-none d-md-block">Markdown Previewer</h1>
    </header>
  );
};
