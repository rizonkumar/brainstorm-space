import { UserButton } from "@clerk/nextjs";
console.log("check ");

export default function Home() {

    
 return (
  <div className="flex flex-col gap-y-4">
    <div>
    This is a screen for authenticated users only

    </div>
    <div>
        <UserButton />
    </div>
  </div>
 )
}
