import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./util/trpc";
import Hello from "./Hello";
import SayHi from "./SayHi";
import Ping from "./Ping";

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:8080/api",
      // optional
      headers() {
        return {
          authorization: "secret",
        };
      },
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Hello />
        <SayHi />
        <Ping />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
