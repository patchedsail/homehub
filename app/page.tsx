import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1>Welcome Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
