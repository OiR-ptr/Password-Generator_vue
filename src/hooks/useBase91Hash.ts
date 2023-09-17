import base91 from "node-base91";
import { Buffer } from "buffer";
import { ref } from "vue";
import { asyncComputed } from "@vueuse/core";

export const useBase91Hash = () => {
  const masterPasswordHash = ref("");
  const seedHash = ref("");

  const str2buf = (str: string) => {
    const tx = new TextEncoder();
    return tx.encode(str).buffer;
  };

  const hashFn = async (seed: string) => {
    const hashvalue = await crypto.subtle.digest("SHA-256", str2buf(seed));
    return base91.encode(Buffer.from(hashvalue), "utf-8").toString();
  };

  const setMasterPasswordAsync = async (masterPassword: string) => {
    masterPasswordHash.value = await hashFn(masterPassword);
  };

  const setSeedAsync = async (seed: string) => {
    seedHash.value = await hashFn(seed);
  };

  const computedHash = asyncComputed(async () => {
    const mixed = masterPasswordHash.value + seedHash.value;
    return await hashFn(mixed);
  }, null);

  return {
    hashFn,
    setMasterPasswordAsync,
    setSeedAsync,
    computedHash,
  };
};
