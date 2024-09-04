import { Contract , JsonRpcProvider , Wallet } from "ethers";

import details from './SCdata/deployed_addresses.json' assert {type :"json"};
import cert from './SCdata/Cert.json' assert {type :"json"};

// const provider = new JsonRpcProvider("http:127.1.0.8445");
// const signer = await provider.getSigner();

const provider = new JsonRpcProvider("https://sepolia.infura.io/v3/129df6e60dba4464831b233b9bdd3a00");
const wallet = new Wallet('9fdafbea5f9a2c0412427a77c5127734f384ba995a1767eac047aee2001ca9b9',provider);

export const instance = new Contract(details.certModuleCert,cert.abi,wallet);