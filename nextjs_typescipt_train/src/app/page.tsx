import Link from "next/link";

export default function Hello() {
  return (
    <>
      <h1>hello World</h1>
      <div className="bg-black">
         <li><Link href="/home" className="text-xl">Gogo</Link></li>
      </div>
    </>
  );
}
