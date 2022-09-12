import { trpc } from "./util/trpc";

const Test = () => {
  const hello = trpc.useQuery([
    "hello",
    {
      name: "world",
    },
  ]);

  return (
    <div>
      <h1>Test</h1>
      <p>{hello.data}</p>
    </div>
  );
};

export default Test;
