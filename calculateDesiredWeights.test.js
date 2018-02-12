import {calculateDesiredWeights} from "./calculateDesiredWeights";

describe('calculateDesiredWeights', function () {
    it('case 1', function () {
        let topCurrencies = {
            BTC: {cap: 3000000},
            ETH: {cap: 2500000},
            XRP: {cap: 2000000},
        }
        let desiredState = calculateDesiredWeights(topCurrencies);
        let check = (c, target) => expect(desiredState[c]).toBeCloseTo(target, 2)
        check('BTC', 0.4)
        check('ETH', 0.333)
        check('XRP', 0.266)
    });
    it('adds up to 100%', function () {
        let topCurrencies = {
            BTC: {cap: 3000000},
            ETH: {cap: 2500000},
            XRP: {cap: 2000000},
        }
        let desiredState = calculateDesiredWeights(topCurrencies);
        let sum = Object.keys(desiredState)
            .map(k => desiredState[k])
            .reduce((pv, nv) => pv + nv)
        expect(sum).toBeCloseTo(1, 2)
    });
});