import { Suspense, lazy, useState } from "react";
import Loading from "./Loading";

const LoadingPage = lazy(() => import ("./LoadingPage"));

export default function HomePage() {
  const [clicked, setClicked] = useState(false);

  function btnClickHandler() {
    setClicked(!clicked);
  }

  return (
    <>
      <h2>Home page</h2>
      <button onClick={btnClickHandler}>Click here</button>

      {clicked && (
        <Suspense fallback={<Loading />}>
          <LoadingPage />
        </Suspense>
      )}
    </>
  );
}
