import base91 from "node-base91";
import { Buffer } from 'buffer';

export const useBase91Hash = () => {
  const str2buf = (str: string) => {
    const tx = new TextEncoder()
    return tx.encode(str).buffer;
  }

  const hashing = async (seed: string) => {
    const hashvalue = await crypto.subtle.digest("SHA-256", str2buf(seed));
    return base91.encode(Buffer.from(hashvalue), 'utf-8').toString();
  };

  return {
    hashing,
  };
}
