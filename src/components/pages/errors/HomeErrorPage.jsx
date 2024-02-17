import {useRouteError} from "react-router-dom";

const HomeErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      Home Page Error
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default HomeErrorPage;