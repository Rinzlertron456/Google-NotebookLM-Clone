import axios from "axios";
import { uploadUrl } from "../store/uploadReducer";

export const fileToUrl = async ({ file, dispatch }) => {
  if (file) {
    const newUrl = URL.createObjectURL(file);
    dispatch(uploadUrl(newUrl));
  }

  const formData = new FormData();
  formData.append("pdf", file);

  await axios.post("http://localhost:5000/api/upload", formData);
};
