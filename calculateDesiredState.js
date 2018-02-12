export function calculateDesiredState(previousState, weights) {
    let totalValue = Object.keys(previousState)
        .map(k => previousState[k])
        .reduce((pv, cv) => pv + cv)
    return Object.keys(weights)
        .map(k => ({[k]: weights[k] * totalValue}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})
}
