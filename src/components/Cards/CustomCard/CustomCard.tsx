import { Card } from "@radix-ui/themes";
import React from "react";

export default function CustomCard({
  children,
  className,
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Card
      className={`p-10 border-0 ${className} bg-graybg ${
        onClick ? "cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
