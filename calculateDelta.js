export function calculateDelta(previousState, desiredState) {
    let totalKeys = Object.keys(previousState).concat(Object.keys(desiredState))
    let delta = totalKeys.map(k => {
        let desiredStateK = desiredState[k] || 0;
        let previousStateK = previousState[k] || 0;
        let deltaK = desiredStateK - previousStateK;
        return deltaK !== 0 ? {[k]: deltaK} : {}
    }).reduce((pv, cv, i) => Object.assign(pv, cv), {})

    return delta
}