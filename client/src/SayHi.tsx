import { useState } from "react";
import { trpc } from "./util/trpc";

const SayHi = () => {
  const [name, setName] = useState<string>();
  const [message, setMessage] = useState<string>();
  // typing breaks here when .merge is added in the server
  const sayHi = trpc.useQuery([
    "server1/user/sayHi",
    {
      name,
      message,
    },
  ]);

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
      <h1>Gateway + Server1</h1>
      <div
        style={{
          minWidth: "300px",
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <label htmlFor="message">message</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
        <p>server1/sayHi: {sayHi.data}</p>
      </div>
    </div>
  );
};

export default SayHi;
