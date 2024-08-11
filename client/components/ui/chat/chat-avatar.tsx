import { User2 } from "lucide-react";
import Image from "next/image";

export default function ChatAvatar({ role }: { role: string }) {
  if (role === "user") {
    return (
      <div className="flex h-[35px] w-[35px] shrink-0 select-none items-center justify-center rounded-md border bg-background shadow">
        <User2 className="h-4 w-4" />
      </div>
    );
  }

  return (
    <div className="flex h-[35px] w-[35px] shrink-0 select-none items-center justify-center rounded-md bg-transparent text-white shadow">
      <Image
        className="rounded-md"
        src="/Moti.png"
        alt="MNNIT Logo"
        width={35}
        height={35}
        priority
      />
    </div>
  );
}
