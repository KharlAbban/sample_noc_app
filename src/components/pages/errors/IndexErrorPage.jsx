import {useRouteError} from "react-router-dom"

const IndexErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      Index Page Error
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default IndexErrorPage
