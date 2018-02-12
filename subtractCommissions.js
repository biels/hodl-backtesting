export function subtractCommissions(holdings, commissions) {
    return Object.keys(holdings)
        .map(k => ({[k]: holdings[k] - (commissions[k] || 0)}))
        .reduce((pv, cv) => Object.assign(pv, cv), {})
}