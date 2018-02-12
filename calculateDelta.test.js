import {calculateDelta} from "./calculateDelta";

describe('calculateDelta', function () {
    it('basic case', function () {
        let previousState = {
            BTC: 3,
            ETH: 5,
        };
        let desiredState = {
            BTC: 2,
            ETH: 8,
        };
        expect(calculateDelta(previousState, desiredState)).toEqual({
            BTC: -1,
            ETH: 3
        })
    });
    it('one enters', function () {
        let previousState = {
            BTC: 3,
            ETH: 5,
        };
        let desiredState = {
            BTC: 2,
            ETH: 1,
            XRP: 1
        };
        expect(calculateDelta(previousState, desiredState)).toEqual({
            BTC: -1,
            ETH: -4,
            XRP: 1
        })
    });

    it('one leaves', function () {
        let previousState = {
            BTC: 4,
            ETH: 1,
            XRP: 30
        };
        let desiredState = {
            BTC: 8,
            ETH: 5,
        };
        expect(calculateDelta(previousState, desiredState)).toEqual({
            BTC: 4,
            ETH: 4,
            XRP: -30
        })
    });
    it('enter and leave', function () {
        let previousState = {
            BTC: 4,
            ETH: 1,
            XRP: 30
        };
        let desiredState = {
            XLM: 8,
            ETH: 5,
            NEO: 5,
        };
        expect(calculateDelta(previousState, desiredState)).toEqual({
            BTC: -4,
            ETH: 4,
            XRP: -30,
            XLM: 8,
            NEO: 5,
        })
    });

});