import axios from "axios";
import { uploadUrl } from "../store/uploadReducer";

export const fileToUrl = async ({ file, dispatch }) => {
  if (file) {
    const newUrl = URL.createObjectURL(file);
    dispatch(uploadUrl(newUrl));
  }

  const formData = new FormData();
  formData.append("pdf", file);

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
      formData
    );
  } catch (error) {
    console.error("Upload failed:", error.response?.data || error.message);
  }
};
