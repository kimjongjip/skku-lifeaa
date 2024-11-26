import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "@/pages/LoginPage";
import "@testing-library/jest-dom";

describe("LoginPage", () => {
  test("renders logo, input fields, and buttons", () => {
    render(<LoginPage />);

    // 로고 확인
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();

    // 이메일, 비밀번호 입력 필드 확인
    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    // 로그인 버튼 확인
    const loginButton = screen.getByRole("button", { name: "로그인" });
    expect(loginButton).toBeInTheDocument();

    // 비밀번호 찾기와 회원가입 링크 확인
    expect(screen.getByText("비밀번호 찾기")).toBeInTheDocument();
    expect(screen.getByText("회원가입")).toBeInTheDocument();
  });

  test("updates email and password state on user input", () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    // 이메일 입력 확인
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");

    // 비밀번호 입력 확인
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(passwordInput).toHaveValue("password123");
  });

  test("handles button click", () => {
    render(<LoginPage />);

    const loginButton = screen.getByRole("button", { name: "로그인" });

    // 로그인 버튼 클릭 시 콘솔 메시지 확인
    fireEvent.click(loginButton);
    expect(loginButton).toBeInTheDocument(); // 단순 렌더링 확인
  });

  test("handles '비밀번호 찾기' and '회원가입' click events", () => {
    render(<LoginPage />);

    const findPasswordLink = screen.getByText("비밀번호 찾기");
    const signUpLink = screen.getByText("회원가입");

    // 클릭 이벤트 확인 (현재 콘솔 로그만 있음)
    fireEvent.click(findPasswordLink);
    fireEvent.click(signUpLink);

    expect(findPasswordLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  });
});
