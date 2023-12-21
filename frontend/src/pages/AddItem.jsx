import React from "react";
import { Form, redirect } from "react-router-dom";
import "../styles/AddItem.css";
import Input from "../components/Input";
// import { useNavigate } from "react-router-dom";

/**
|--------------------------------------------------
| post with Form component from react-router-dom
|--------------------------------------------------
*/

function AddItem() {
  return (
    <div className="add-item">
      <Form method="post" action="/add" replace>
        <Input labelName="Title" type="text" />
        <Input labelName="Description" type="text" />

        <button type="submit">Add</button>
      </Form>
    </div>
  );
}

export default AddItem;

export const postItem = async ({ request }) => {
  const form = await request.formData();

  const data = Object.fromEntries(form);

  const apiURL = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${apiURL}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return redirect("/");
  }

  return true;
};

/**
|--------------------------------------------------
| post with formData
|--------------------------------------------------
*/

// function AddItem() {
//   const navigate = useNavigate();

//   const dataToPost = async (e) => {
//     e.preventDefault();

//     const apiURL = import.meta.env.VITE_BACKEND_URL;

//     const form = e.target;

//     const formData = new FormData(form);

//     const data = {
//       title: formData.get("title"),
//       description: formData.get("description"),
//     };

//     console.log(data);

//     const response = await fetch(`${apiURL}/api/items`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (response.ok) {
//       navigate("/");
//     }
//   };

//   return (
//     <div className="add-item">
//       <form method="post" onSubmit={dataToPost}>
//         <Input labelName="Title" type="text" />
//         <Input labelName="Description" type="text" />

//         <button type="submit">Add</button>
//       </form>
//     </div>
//   );
// }

// export default AddItem;
