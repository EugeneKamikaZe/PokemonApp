import stringToCapitalize from './stringToCapitalize'

describe('stringToCapitalize', () => {
    test('Функция должна возвращать не пустую строку, начинающуюся с заглавной', () => {
        const result = stringToCapitalize('some String')

        expect(result).toBe('Some string')
        expect(result).not.toBeNull()
    })
})