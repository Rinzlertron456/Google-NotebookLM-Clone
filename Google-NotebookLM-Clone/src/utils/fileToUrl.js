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

  try {
    await axios.post(`${backendUrl}/api/upload`, formData);
  } catch (error) {
    console.error("Upload failed:", error.response?.data || error.message);
  }
};
