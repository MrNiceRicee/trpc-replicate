import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../../server1/server/server";
export const trpc = createReactQueryHooks<AppRouter>();
