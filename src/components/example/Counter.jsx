import axios from "axios";
import React from "react";

function Counter() {
  //   GET
  const data = axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => console.log(data));
  console.log(data);

  //   POST
  const newUser = {
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    address: {
      street: "1234 Elm St",
      suite: "Apt 101",
      city: "Somewhere",
      zipcode: "12345",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-800-555-5555",
    website: "johndoe.com",
    company: {
      name: "Doe Enterprises",
      catchPhrase: "Leading innovation",
      bs: "business solutions",
    },
  };

  axios
    .post("https://jsonplaceholder.typicode.com/users", newUser)
    .then((response) => {
      console.log("Created User:", response.data);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });

  // PUT
  const updatedUser = {
    name: "Johnathan Doe",
    username: "johnnydoe",
    email: "johnny.doe@example.com",
    address: {
      street: "5678 Oak St",
      suite: "Apt 202",
      city: "Anywhere",
      zipcode: "67890",
      geo: {
        lat: "37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-800-555-5555",
    website: "johnnydoe.com",
    company: {
      name: "Doe Corp",
      catchPhrase: "Innovating the future",
      bs: "leading-edge technology",
    },
  };

  axios
    .put("https://jsonplaceholder.typicode.com/users/1", updatedUser)
    .then((response) => {
      console.log("Updated User:", response.data);
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });

  // PATCH
  const updatedUserPart = { name: "Johnny Doe" };

  axios
    .patch("https://jsonplaceholder.typicode.com/users/1", updatedUserPart)
    .then((response) => {
      console.log("Partially Updated User:", response.data);
    })
    .catch((error) => {
      console.error("Error partially updating user:", error);
    });

  // DELETE
  axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
      console.log("Deleted User:", response.data);
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });

  return <div>Counter</div>;
}

export default Counter;
