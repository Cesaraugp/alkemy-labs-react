// myForm.test.js
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import store from "../store";
import * as redux from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";

describe("<LoginForm/> Field validations", () => {
  let result, emailInput, passwordInput, loginButton;
  beforeEach(() => {
    result = render(
      <redux.Provider store={store}>
        <LoginForm />
      </redux.Provider>
    );
    emailInput = result.getByTestId("emailInput");
    passwordInput = result.getByTestId("passwordInput");
    loginButton = result.getByTestId("loginButton");
  });
  test("invalidMailFormat", async () => {
    userEvent.type(emailInput, "dummyemail");
    userEvent.type(passwordInput, "CESAR");
    userEvent.click(loginButton);

    await waitFor(() => {
      const invalidEmail = screen.getByText(
        "Por favor ingresa un correo valido"
      );
      expect(invalidEmail).toBeInTheDocument();
    });
  });
  test("Password Required", async () => {
    userEvent.type(emailInput, "cesar@correo.com");
    userEvent.click(loginButton);

    await waitFor(() => {
      const requiredPassword = screen.getByText("Contraseña Requerida");
      expect(requiredPassword).toBeInTheDocument();
    });
  });

  test("Email Required", async () => {
    userEvent.type(passwordInput, "CESAR");
    userEvent.click(loginButton);

    await waitFor(() => {
      const requiredEmail = screen.getByText("Email Requerido");
      expect(requiredEmail).toBeInTheDocument();
    });
  });
});
