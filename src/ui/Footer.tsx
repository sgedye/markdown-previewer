import australia from "../assets/images/australia.png";

export const Footer: React.FC<Record<string, never>> = () => {
  return (
    <footer
      className="container-fluid bg-dark text-center p-4 position-absolute"
      style={{ bottom: 0 }}
    >
      <div className="">
        <img
          src={australia}
          alt="Australia"
          width={150}
          height={150}
          className="img-fluid"
        />
      </div>
    </footer>
  );
};
