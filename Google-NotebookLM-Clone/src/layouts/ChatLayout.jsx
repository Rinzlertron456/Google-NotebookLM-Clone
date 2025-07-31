import Modal from "../components/Modal";
import Button from "../components/Button";
import QueryResponse from "../components/QueryResponse";
import CustomTextBox from "../components/CustomTextBox";

const ChatLayout = ({
  text,
  lastQuery,
  response,
  hasRespondedOnce,
  isLoading,
  setSelectedPage,
  handleQuerySize,
  handleQuerySubmit,
}) => {
  return (
    <>
      {!lastQuery ? (
        <Modal type="intro" />
      ) : (
        <Modal type="query" query={lastQuery} />
      )}

      <div style={{ flex: 1, margin: "1rem 0" }}>
        {(hasRespondedOnce || isLoading) && (
          <QueryResponse
            response={response}
            isLoading={isLoading}
            setSelectedPage={setSelectedPage}
          />
        )}
      </div>

      <div
        className="prompt-layout"
        style={{
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <CustomTextBox
          type="query"
          text={text}
          handleQuerySize={handleQuerySize}
        />
        <Button type="submit" handleQuerySubmit={handleQuerySubmit} />
      </div>
    </>
  );
};

export default ChatLayout;
