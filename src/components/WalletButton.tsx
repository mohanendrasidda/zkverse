'use client'

/* imported defined button from rainbow-me library that implements wallet logic underhood. */


// import{ConnectButton} from '@rainbow-me/rainbowkit'

// export default function WalletButton() {
//     return(
//         <div className='p-4'>
//             <ConnectButton/>
//         </div>
//     )
// }

/* implementing customized wallet logic based on our needs */

import { useState } from "react"
/*The below typescript syntax is a type Aliases */

type WalletInfo={
    address: string
    isConnected: boolean 
}

function WalletButton(){
    const [wallet, setWallet] = useState<WalletInfo>({
        address: '',
        isConnected:false
    })


const connectWallet = async()=>{
    if((window as any).ethereum){
        try{
            const accounts = await (window as any).ethereum.request({
                method:'eth_requestAccounts'
            })
            setWallet({address:accounts[0],isConnected:true})
        }catch(error){
            console.error('Connection error:',error)
        }
    }else {
        alert('Please install MetaMask!')
    }
}

const disConnectWallet = ()=>{
    setWallet({address:accounts[0],isConnected:false})

}
return(<button onClick={connectWallet} className='p-2 bg-blue-600 text-white rounded'> {wallet.isConnected?`Connected:${wallet.address.slice(0,6)}...`:'Connect Wallet'}</button>)
}

export default WalletButton;