import {calculateDesiredState} from "./calculateDesiredState";

describe('calculateDesiredState', function () {
    it('case 1', function () {
        let previousState = {
            BTC: 1000,
            ETH: 1000,
            XRP: 2000
        }
        let weights = {
            BTC: 0.5,
            ETH: 0.25,
            XRP: 0.25
        }
        let desiredState = calculateDesiredState(previousState, weights);
        let check = (c, target) => expect(desiredState[c]).toBeCloseTo(target, 2)
        check('BTC', 2000)
        check('ETH', 1000)
        check('XRP', 1000)
    });
});