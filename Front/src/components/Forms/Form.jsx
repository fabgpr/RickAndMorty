import { useState } from "react";
import styled from "styled-components";
import validate from "./validation";

const Hr = styled.hr`
  visibility: hidden;
`;

const Sform = styled.form`
  margin-top: 100px;
`;

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(userData));
    console.log(errors);
  };

  return (
    <Sform>
      <label htmlFor="email" />
      <p>Username: </p>
      <input
        type="text"
        value={userData.email}
        onChange={handleInputChange}
        name="email"
      />

      <label htmlFor="password" />
      <p>Password: </p>
      <input
        type="password"
        value={userData.password}
        onChange={handleInputChange}
        name="password"
      />
      <Hr />
      <button>LogIn</button>
    </Sform>
  );
}
