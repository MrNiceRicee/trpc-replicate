import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "./util/trpc";
import Test from "./Test";

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
      url: "http://localhost:8081/api",
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
        <Test />
      </QueryClientProvider>
    </trpc.Provider>
  );
};

export default App;
