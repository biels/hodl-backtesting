
export function calculateDesiredWeights(topCurrencies) {
    // Implement correct formula
    let totalCap = Object.keys(topCurrencies)
        .map(k => topCurrencies[k].cap)
        .reduce((c, acc) => c + acc, 0)

    let rawWeights =  Object.keys(topCurrencies)
        .map(k => ({[k]: topCurrencies[k].cap / totalCap}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})

    let limitedWeights =  Object.keys(rawWeights)
        .map(k => ({[k]: Math.max(rawWeights[k], 0.1)}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})

    let limitedSum = Object.keys(limitedWeights)
        .map(k => limitedWeights[k])
        .reduce((pv, cv) => pv + cv, 0)

    let normalizedWeights = Object.keys(limitedWeights)
        .map(k => ({[k]: limitedWeights[k] / limitedSum}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})
    return normalizedWeights
}