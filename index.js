import {calculateDesiredWeights} from "./calculateDesiredWeights";
import {calculateDesiredState} from "./calculateDesiredState";
import {calculateDelta} from "./calculateDelta";
import {subtractCommissions} from "./subtractCommissions";
import {getTopNAtDate} from "./getTopNAtDate";

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
        ETH: 100, // In USD
        BTC: 300
    }
]

function progress(i) {
    if (i % 10) console.log(dates.length * 100 / i + "%")
}

let result = dates.reduce((date, history, i) => {
    let previousState = history[history.length - 1];
    let topCurrencies = getTopNAtDate(date, n);
    //Calculate desired state
    let desiredWeights = calculateDesiredWeights(topCurrencies);
    let desiredState = calculateDesiredState(previousState, desiredWeights)
    //Calculate delta
    let delta = calculateDelta(previousState, desiredState);
    //Delta: BTC -0.3 (-30%) LTC 5.5 (+10%) XRP +4500 (+20%)
    //Trade to resolve delta
    let commissions = tradeCommissionsToResolveDelta(delta, tradeCommision);
    let nextState = subtractCommissions(previousState, commissions)
    //Return nextState
    //Progress
    progress(i);
    return history.concat(nextState);
}, initialState)





