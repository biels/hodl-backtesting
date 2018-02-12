const cc = require('cryptocompare')
//let coins = cc.coinList()
export function getTopNAtDate(date, n) {

    return cc.histoDay('COIN', 'USD')
}