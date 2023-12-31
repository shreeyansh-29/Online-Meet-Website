import { useContext } from "react";
import { Button } from "@material-ui/core";
import { SocketContext } from "../../socketContext";

const Notifications = () => {
  // @ts-ignore
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is calling: </h1>
          <Button
            variant="contained"
            color="primary"
            onClick={answerCall}
          ></Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
