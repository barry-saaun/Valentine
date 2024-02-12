"use client";
import { useState } from "react";
import Choices from "@/components/choices";
import Image from "next/image";

export default function Home() {
  const [isExploding, setIsExploding] = useState<boolean>(true);

  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center justify-center mx-auto space-y-12  "
        style={{
          backgroundImage: `url("/heart_bg.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Choices />
      </main>
    </>
  );
}
