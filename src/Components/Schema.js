import * as yup from "yup"



 const Schema = yup.object().shape({
    name: yup
    .string()
    .required("Must include a name.")
    .min(2, "Must include at least 2 characters."),
    size:yup
    .string()
    .required("Must include size."),
    Pepperoni:yup.boolean(),
    Cheese: yup.boolean(),
    Jalapeno: yup.boolean(),
    Sausage: yup.boolean(),
    Onions: yup.boolean(),
    Chicken: yup.boolean(),
    Mushroom: yup.boolean(),
    Futa: yup.boolean(),
    Spinach: yup.boolean(),
    special: yup.string(),
})
export default Schema