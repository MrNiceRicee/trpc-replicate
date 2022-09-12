import { createReactQueryHooks } from "@trpc/react";
// import type { AppRouter } from "../../../server1/server/server";
import type { AppRouter } from "../../../gateway/server/mergedServers";
export const trpc = createReactQueryHooks<AppRouter>();
