import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import web3Modal from 'web3modal'

import { marketplaceAddress } from '.../config'

export default function ResellNFT() {
  const [formInput, updateFormInput] = useState({price: '', image: ''});
  const router = useRouter();
  const { id, tokenURI } = router.query;
  const { image, price } = formInput;

  return (
    <div className="flex justify-center">
      <input
        placeholder="Asset Price in Eth"
        className="mt-2 border rounded p-4"
        onChange={(e) =>
          updateFormInput({ ...formInput, price: e.target.value })
        }
        {
            image && (
                <img className="rounded mt-4" width="350" src={image}/>
            )
        }
      />
    </div>
  );
}
