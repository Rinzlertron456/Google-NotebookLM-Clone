import { useState } from "react";
import NoteBookLmContainer from "./containers/NoteBookLmContainer";
import HomeContainer from "./containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [isFileUploaded, setFileUploaded] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const handleFileUpload = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      console.log(file);

      const newUrl = url.concat("#toolbar=0&view=fitH");
      setPdfUrl(newUrl);
      setFileUploaded(true);
    }
  };
  return (
    <>
      {!isFileUploaded ? (
        <HomeContainer handleFileUpload={handleFileUpload} />
      ) : (
        <NoteBookLmContainer pdfUrl={pdfUrl} />
      )}
    </>
  );
};

export default App;
