"use client";

import { NextUIProvider } from "@nextui-org/system";

export default function NextUIProviders({ children }) {
 return <NextUIProvider>{children}</NextUIProvider>;
}
