export const required = value => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = length => value => {
    if (value && value.length < length) return undefined
    return `text must be more ${length} symbols`
}