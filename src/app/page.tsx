import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden antialiased">
      <Image
        src="/whatstherush.jpg"
        alt="What's the rush?"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </main>
  );
};

export default Home;
