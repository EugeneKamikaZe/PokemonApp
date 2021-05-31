function stringToCapitalize(text: string) {
    return text[0].toUpperCase() + text.toLowerCase().slice(1)
}

export default stringToCapitalize