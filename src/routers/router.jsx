// Router: 각 URL에 따른 page 컴포넌트 연결
import { createBrowserRouter } from "react-router-dom";
import HtmlLoader from "../components/common/HtmlLoader";

import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HtmlLoader file="/html/templates/login.html" />,
    index: true,
  },
  {
    path: "/signup",
    element: <HtmlLoader file="/html/templates/signup.html" />,
    index: true,
  },
]);

export default router;
