import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";

export default function ResellNFT() {
  const [formInput, updateFormInput] = router.query;
  const router = useRouter();
  const { id, tokenURI } = router.query;
  const { image, price } = formInput;

  return <div className="flex justify-center"></div>;
}
