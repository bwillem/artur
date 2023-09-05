const capitalize = (x: string) => `${x[0].toUpperCase()}${x.slice(1)}`
const removeUnderscores = (x: string) => x.split('_').join(' ')
const removeDashes = (x: string) => x.split('-').join(' ')
const decode = (x: string) => capitalize(removeUnderscores(removeDashes(x)))

export {
    capitalize,
    decode,
}
