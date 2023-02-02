import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();

  console.log(status, statusText);
  return (
    <div>
      <h1>Something went wrong!!</h1>
    </div>
  );
};

export default Error;
