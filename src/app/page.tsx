import { ReactNode } from "react";
import WalletButton from "@/components/WalletButton";
import PrgressBar from "@/components/ProgressBar"
import ProgressBar from "@/components/ProgressBar";

export default function Home(){
  return(<html>
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3x1 font-bold mb-4">Welcome to ZKVerse(We are building something intresting. Stay tuned guys)</h1>
              
              <ProgressBar percentage={30} color={"cue"}></ProgressBar>

      </div>
    </main>
    <body>
    </body>
  </html>)
}