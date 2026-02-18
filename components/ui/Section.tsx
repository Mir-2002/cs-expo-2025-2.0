import React from "react";

export default function Section({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section className={`min-h-screen w-full ${className}`}>{children}</section>
  );
}
