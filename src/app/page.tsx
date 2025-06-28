import { ReactNode } from "react";
import WalletButton from "@/components/WalletButton";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
export default function Home(){
  return(<html>
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3x1 font-bold mb-4">Welcome to ZKVerse(We are building something intresting. Stay tuned guys)</h1>
             
              <ProgressBar percentage={40} color="red"><h1>Hello this is the progress bar test</h1></ProgressBar>
              <WalletButton></WalletButton>

      </div>
    </main>
    <body>
    </body>
  </html>)
}