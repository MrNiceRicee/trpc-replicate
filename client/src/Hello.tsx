import { useState } from "react";
import { trpc } from "./util/trpc";

const Hello = () => {
  const [name, setName] = useState<string>();
  // typing breaks here when .merge is added in the server
  const hello = trpc.useQuery([
    "server1/user/hello",
    {
      name: name,
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
          placeholder="rice"
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <p>server1/hello: {hello.data}</p>
      </div>
    </div>
  );
};

export default Hello;
