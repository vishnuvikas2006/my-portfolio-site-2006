"use client";

import dynamic from "next/dynamic";

const Background3D = dynamic(
  () => import("./Background3D").then((module) => module.Background3D),
  { ssr: false },
);

export function BackgroundCanvas() {
  return <Background3D />;
}
