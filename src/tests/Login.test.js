import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Pages/Login";
import store from "../store";
import * as redux from "react-redux";
let spy;

beforeAll(() => {
  spy = jest.spyOn(redux, "useSelector");
});
//Verificación de usuario autenticado al ingresar a una ruta
describe("authenticationTests", () => {
  test("user is authenticated -> Show 'Ya estas logueado'", async () => {
    const credentials = { email: "dummyemail@email.com", password: "test" };
    spy.mockReturnValue({ user: credentials });
    render(
      <redux.Provider store={store}>
        <Login />
      </redux.Provider>
    );
    const loggedInText = await screen.findByText("Ya estás logueado");
    expect(loggedInText).toBeInTheDocument();
  });

  test("User is not authenticated -> Show <LoginForm/>", async () => {
    spy.mockReturnValue({ user: null });
    const result = render(
      <redux.Provider store={store}>
        <Login />
      </redux.Provider>
    );
    const isVisible = result.container.querySelector("#login_container");
    expect(isVisible).toBeInTheDocument();
  });
});
