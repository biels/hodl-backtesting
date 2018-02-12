import {getDates} from "./utils";
import fetch from 'node-fetch';
global.fetch = fetch
const cc = require('cryptocompare')
export async function getCoinList() {
    return (await cc.coinList()).Data
}
export function harvestCoin(coin, startDate, endDate) {
    let dates = getDates(startDate, endDate);
    let coinHistory = dates
        .map((date) => ({
            [date]: cc.priceHistorical(coin, 'USD', date)
        }))
        .reduce((pv, cv) => Object.assign(pv, cv), {})
}