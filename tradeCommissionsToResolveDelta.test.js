import {tradeCommissionsToResolveDelta} from "./tradeCommissionsToResolveDelta";

describe('tradeCommissionsToResolveDelta', function () {
    it('case 1', function () {
        let delta = {
            BTC: -450,
            LTC: 44,
            ETH: 556
        }
        let tradeCommission = 0.016
        let commissions = tradeCommissionsToResolveDelta(delta, tradeCommission);
        let check = (c, target) => expect(commissions[c]).toBeCloseTo(target, 2)
        check('BTC', 450 * 0.016)
        check('LTC', 44 * 0.016)
        check('ETH', 556 * 0.016)
    });
});