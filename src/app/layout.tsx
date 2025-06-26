"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import { mainnet, goerli, polygonMumbai } from "wagmi/chains"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const config = getDefaultConfig({
  appName: 'ZKVerse',
  projectId: 'bdcf1fe6bc36aab473b10d505dc21aa7',
  chains: [mainnet, goerli, polygonMumbai],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
    [polygonMumbai.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (<html lang="en"><body>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </body></html>);
}