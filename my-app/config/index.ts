import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
    return new Contract(
        "0x247De49d58dAc97BB948d3AECdb50fadadB8E97F", // adddress of the deployed contract
        abi as any,
        signer
    );
}