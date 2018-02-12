export function tradeCommissionsToResolveDelta(delta, tradeCommision) {
    return Object.keys(delta)
        .map(k => ({[k]: Math.abs(delta[k]) * tradeCommision}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})

}