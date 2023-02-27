import * as yup from "yup";

export const sponserSchema = yup.object().shape({
  title: yup.string().min(2).required(),
  description: yup.string().min(20).max(1000).required(),
  img: yup.string().required(),
  url: yup.string().url(),
});
