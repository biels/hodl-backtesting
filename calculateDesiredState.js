
export function calculateDesiredState(topCurrencies) {
    // Implement correct formula
    let totalCap = topCurrencies.reduce((c, acc) => c.cap + acc, 0)
    return topCurrencies.map(c => c.cap)
}