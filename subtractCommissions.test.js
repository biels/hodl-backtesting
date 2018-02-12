import {subtractCommissions} from "./subtractCommissions";

describe('subtractCommissions', function () {
    it('case 1', function () {
        let holdings = {
            BTC: 3000,
            ETH: 3000,
            XRP: 4000,
        }
        let commissions = {
            BTC: 30,
            ETH: 400
        }
        let result = subtractCommissions(holdings, commissions);
        let check = (c, target) => expect(result[c]).toBeCloseTo(target, 2)
        check('BTC', 3000 - 30)
        check('ETH', 3000 - 400)
        check('XRP', 4000)
    });
});