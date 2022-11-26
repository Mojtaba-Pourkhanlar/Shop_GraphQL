import SpinnerGIF from "../../images/Spinner.gif";

export const Spinner = () => {
  return (
    <>
      <img
        src={SpinnerGIF}
        className="d-block m-auto"
        style={{
          width: "200px",
          
        }}
        alt="spinner"
      />
    </>
  );
};
