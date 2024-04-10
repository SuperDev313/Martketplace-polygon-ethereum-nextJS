import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Web3Modal from 'web3modal'
import { useRouter } from 'next/router'

import {
    marketplaceAddress
} from '../config'


import NFTMarketPlace from '../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json'