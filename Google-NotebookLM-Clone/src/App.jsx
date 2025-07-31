import { useState } from "react";
import NoteBookLmContainer from "./containers/NoteBookLmContainer";
import HomeContainer from "./containers/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/index";
const App = () => {
  const [isFileUploaded, setFileUploaded] = useState(false);
  const handleUploadStatus = () => {
    setFileUploaded(true);
  };
  return (
    <Provider store={store}>
      {!isFileUploaded ? (
        <HomeContainer handleUploadStatus={handleUploadStatus} />
      ) : (
        <NoteBookLmContainer />
      )}
    </Provider>
  );
};

export default App;
