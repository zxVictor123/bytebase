import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Button asChild className="w-20 h-20"><Link href="sign-in">去登录</Link></Button>
    </div>
  );
}
