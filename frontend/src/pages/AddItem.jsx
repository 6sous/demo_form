import React from "react";
import { Form, redirect } from "react-router-dom";
import "../styles/AddItem.scss";
import Input from "../components/Input";

/**
 |--------------------------------------------------
 | post with Form component from react-router-dom
 |--------------------------------------------------
 */

/** 
 1. import du composant Form de react-router-dom

 2. La prop 'method' précise le type de mutation: "post" ou "put"

 3. La prop 'action' indique l'url vers laquelle la requête sera envoyée et déclenche la fonction attachée à la prop 'action' de la route associée (ici "/add") à la sumission du formaulaire.

 4. Ajout de la prop 'action' à la route "/add" dans le router

 5. Création de la fonction de post qui sera passée à la prop 'action' de la route associée

 6. Récupération des données du formulaire à l'aide de l'objet 'request' et de la méthode formData(). 
 On utilise la méthode 'Object.fromEntries()' pour convertir les entrées du formulaire en objet.
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
  const token = localStorage.getItem("token");

  const data = Object.fromEntries(form);

  const apiURL = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${apiURL}/api/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
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

/** 
 1. création d'un formulaire html classique

 2. La prop 'method' précise le type de mutation: "post" ou "put"

 3. création de la fonction de post

 4. Récupération des données du formulaire:
  - nouvelle instance de la classe FormData à laquelle il faut passer le formulaire
  (e.target)
  - si peu d'entrées, on peut utiliser la méthode 'get()' dans laquelle on passe le nom de l'entrée
  - si beaucoup d'entrées, utiliser Object.fromEntries()
  On utilise la méthode 'Object.fromEntries()' pour convertir les entrées du formulaire en objet.

 5. La fonction de post est passée à la prop 'onSubmit' du formulaire et non pas du bouton!
 */

// import { useNavigate } from "react-router-dom";

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
