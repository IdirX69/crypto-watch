import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HeaderInfos from "./components/HeaderInfos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderInfos />}>
      {/* <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} /> */}
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
