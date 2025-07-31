import axios from "axios";
import { uploadUrl } from "../store/uploadReducer";

export const fileToUrl = async ({ file, dispatch }) => {
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
  if (file) {
    const newUrl = URL.createObjectURL(file);
    dispatch(uploadUrl(newUrl));
  }

  const formData = new FormData();
  formData.append("pdf", file);

  await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, formData);
};
