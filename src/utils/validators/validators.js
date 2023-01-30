export const required = (value) => {
    if (value) return undefined
    return 'There is no symbols, please put text.'
}
export const maxLength=(number)  => (value=1) => {
    if (value.length > number) return 'Its very long text this post. Max '+ number +' symbols.' 
    return undefined
}