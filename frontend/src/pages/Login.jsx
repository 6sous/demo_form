import React from "react";
import { Form, redirect } from "react-router-dom";
import Input from "../components/Input";

function Login() {
  return (
    <div>
      <div className="login-page">
        <h1>Login</h1>
        <Form method="post" action="/login" replace>
          <Input labelName="Email" type="email" />
          <Input labelName="Password" type="password" />

          <button type="submit">Login</button>
        </Form>
      </div>
    </div>
  );
}

export default Login;

export const authenticate = async ({ request }) => {
  const form = await request.formData();

  const formData = Object.fromEntries(form);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error("Wrong password or email");
    }

    const data = await response.json();

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.error(error);
  }

  return redirect("/");
};
