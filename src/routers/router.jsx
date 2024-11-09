// Router: 각 URL에 따른 page 컴포넌트 연결
import { createBrowserRouter } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import GroupMainPage from "../pages/GroupMainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    idnex: true,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    index: true,
  },
  {
    path: "/main",
    element: <GroupMainPage />,
    index: true,
  },
]);

export default router;
