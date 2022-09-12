import { createRouter } from "./context";

export const appRouter = createRouter().query("status/ping", {
  resolve() {
    const wordBase = [
      "Hello",
      "Hi",
      "Hey",
      "Ping",
      "Pong",
      "Ping To Pong",
      "Pong To Ping",
      "Ping Pong",
      "Pong Ping",
      "Ping Ping",
      "Pong Pong",
      "Yeet",
      "Ya",
      "Ya Yeet",
      "Yeet Ya",
      "Ya Ya",
      "Yeet Yeet",
      "Ya Ya Ya",
      "Yeet Yeet Yeet",
    ];
    // and current time
    return (
      wordBase[Math.floor(Math.random() * wordBase.length)] +
      "!" +
      " " +
      new Date().toLocaleTimeString()
    );
  },
});

export type AppRouter = typeof appRouter;
