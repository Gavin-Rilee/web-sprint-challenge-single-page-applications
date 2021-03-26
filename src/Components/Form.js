import React, { useEffect, useState } from "react";
import axios from "axios";
import Schema from "./Schema";
import * as yup from "yup";

export default function Form() {
  const initialState = {
    name: "",
    size: "",
    Pepperoni: false,
    Cheese: false,
    Jalapeno: false,
    Sausage: false,
    Onions: false,
    Chicken: false,
    Mushroom: false,
    Futa: false,
    Spinach: false,
    special: "",
  };
  const initialErrors = {
    name: "",
    size: "",
    special: "",
  };
  const initialDisabled = true;
  const initialOrder = [];

  const [order, setOrder] = useState(initialOrder);
  const [createForm, setCreateForm] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [buttonDisabled, setButtonDisabled] = useState(initialDisabled);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newOrder = {
      name: createForm.name,
      size: createForm.size,
      Pepperoni: createForm.Pepperoni,
      Cheese: createForm.Cheese,
      Jalapeno: createForm.Jalapeno,
      Sausage: createForm.Sausage,
      Onions: createForm.Onions,
      Chicken: createForm.Chicken,
      Mushroom: createForm.Mushroom,
      Futa: createForm.Futa,
      Spinach: createForm.Spinach,
      special: createForm.special,
    };
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrder(res.data, ...order);
        setCreateForm(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = (evt) => {
    const { name, type, value, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
    setCreateForm({ ...createForm, [name]: valueToUse });
  };

  const inputChange = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  useEffect(() => {
    Schema.isValid(createForm).then((valid) => setButtonDisabled(!valid));
  }, [createForm]);

  return (
    <form onSubmit={onSubmit}>
      {/* <div className="errors">
        <div>{formErrors.name}</div>
        <div>{formErrors.size}</div>
        <div>{formErrors.special}</div>
      </div> */}

      <label>
        Your Name Here!
        <input
          value={createForm.name}
          onChange={onChange}
          name="name"
          type="text"
        />
      </label>

      <label>
        Pizza size!
        <select id='size' name='size' onChange={onChange}>
          <option value="">Select your size!</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>

      <label>
        Pepperoni
        <input
          type="checkbox"
          name="Pepperoni"
          onChange={onChange}
          checked={createForm.Pepperoni}
        />
      </label>

      <label>
        Cheese
        <input
          type="checkbox"
          name="Cheese"
          onChange={onChange}
          checked={createForm.Cheese}
        />
      </label>

      <label>
        Jalapeno
        <input
          type="checkbox"
          name="Jalapeno"
          onChange={onChange}
          checked={createForm.Jalapeno}
        />
      </label>

      <label>
        Sausage
        <input
          type="checkbox"
          name="Sausage"
          onChange={onChange}
          checked={createForm.Sausage}
        />
      </label>

      <label>
        Onions
        <input
          type="checkbox"
          name="Onions"
          onChange={onChange}
          checked={createForm.Onions}
        />
      </label>

      <label>
        Chicken
        <input
          type="checkbox"
          name="Chicken"
          onChange={onChange}
          checked={createForm.Chicken}
        />
      </label>
      <label>
        Futa
        <input
          type="checkbox"
          name="Futa"
          onChange={onChange}
          checked={createForm.Futa}
        />
      </label>

      <label>
        Mushroom
        <input
          type="checkbox"
          name="Mushroom"
          onChange={onChange}
          checked={createForm.Mushroom}
        />
      </label>

      <label>
        Spinach
        <input
          type="checkbox"
          name="Spinach"
          onChange={onChange}
          checked={createForm.Spinach}
        />
      </label>

      <label>
        Special Instructions
        <input
          value={createForm.special}
          onChange={onChange}
          name="special"
          type="text"
          rows={5}
          cols={30}
        />
      </label>

      <button disabled={buttonDisabled}>Add to Order! $25.99</button>
    </form>
  );
}
