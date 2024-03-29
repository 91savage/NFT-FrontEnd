import Caver, { AbiItem } from 'caver-js';

import { ABI, CONTRACTADDRESS } from '../../lib/web3/config';
import cntBlockNumber from './cntBlockNumber';

export const config: { rpcURL: string } = {
    rpcURL: window.klaytn,
};

export const caver = new Caver(config.rpcURL);

const cABI = new caver.klay.Contract(ABI as AbiItem[], CONTRACTADDRESS);

let mintIndexForSale = 0;
let maxSaleAmount = 0;
let mintPrice = 0;
let mintStartBlockNumber = 0;
let mintLimitPerBlock = 0;

export default async function check_status() {
    const myContract = cABI;
    await myContract.methods
        .mintingInformation()
        .call()
        .then(function (result: string[]) {
            //console.log(result); // CONTRACT 내용 (배열)
            mintIndexForSale = parseInt(result[1]);
            mintLimitPerBlock = parseInt(result[2]);
            mintStartBlockNumber = parseInt(result[4]);
            maxSaleAmount = parseInt(result[5]);
            mintPrice = parseInt(result[6]);
            // console.log(`${mintIndexForSale - 1} / ${maxSaleAmount}`);
            // console.log(`트랜잭션당 최대 수량: ${mintLimitPerBlock}개`);
            // console.log(`민팅 시작 블록: ${mintStartBlockNumber}`);
            // console.log(`최대 판매 물량: ${maxSaleAmount}`);
            // console.log(`민팅 가격: ${caver.utils.fromPeb(mintPrice, 'KLAY')} KLAY`);
        })
        .catch((error: any) => {
            console.log(error);
        });
    return {
        mintIndexForSale,
        mintLimitPerBlock,
        mintStartBlockNumber,
        maxSaleAmount,
        mintPrice,
    };
}
