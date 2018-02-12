import {calculateDesiredWeights} from "./calculateDesiredWeights";

global.fetch = require('node-fetch')
const cc = require('cryptocompare')

//cc.price('BTC', 'USD')


/*
 + Get rebalance dates
 + Load data at rebalance dates
 + Set initial state
 + Execute rebalancings
 */
let dates = getRebalanceDates(startDate, frequency)
let topN = getTopN(date, n) //From memory or web
let initialState = [
    { // Implicit snapshot ID of 0
        ETH: 100,
        BTC: 300
    }
]
dates.reduce((date, history) => {
    let previousState = history.last();
    let topCurrencies = getTopNAtDate(date, n);
    //Calculate desired state
    let desiredState = calculateDesiredWeights(topCurrencies);
    //Calculate delta
    let delta = calculateDelta(previousState, desiredState);
    //Delta: BTC -0.3 (-30%) LTC 5.5 (+10%) XRP +4500 (+20%)
    //Trade to resolve delta
    let nextState = tradeToResolveDelta(delta, tradeCommision);
    //Return nextState
    return history.concat(nextState);
}, initialState)




