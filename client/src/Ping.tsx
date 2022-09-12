import { useState } from "react";
import { trpc } from "./util/trpc";

const Ping = () => {
  const [name, setName] = useState<string>();
  // typing breaks here when .merge is added in the server
  const pinging = trpc.useQuery(["server2/status/ping"]);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Gateway + Server2</h1>
      <div
        style={{
          minWidth: "300px",
        }}
      >
        <button
          onClick={() => {
            pinging.refetch();
          }}
        >
          Ping
        </button>
        <p>server2/ping: {pinging.data}</p>
      </div>
    </div>
  );
};

export default Ping;
