const capitalize = (x: string) => `${x[0].toUpperCase()}${x.slice(0)}`
const decode = (x: string) => capitalize(x.split('-').join(' '))

export {
    capitalize,
    decode,
}
