import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'

import {
    marketplaceAddress
} from '../config'


import NFTMarketPlace from '../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json'

export default function MyAssets() {
    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    const router = useRouter()

    useEffect(() => {
        loadNFTs()
    }, [])
    
    return (
        <div className='flex justify-center'>
            <div className='p-4'></div>
        </div>
    )
}