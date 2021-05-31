import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', () => {
    test('Должна принимать два аргумента "getPokemons" и пустой объект, на выходе получить {uri} с полями pathname, protocol, host и пустым query', () => {
        const url = getUrlWithParamsConfig('getPokemons', {})

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {},
            },
            body: {}
        })
    })

    test('Должна принимать два аргумента "getPokemons" и { name }, на выходе получить {uri} с полями pathname, protocol, host и query с полем name', () => {
        const url = getUrlWithParamsConfig('getPokemons', {name: 'Pikachu'})

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemons',
                query: {name: 'Pikachu'},
            },
            body: {}
        })
    })

    test('Должна принимать два аргумента "getPokemon" и { id }, на выходе получить {uri} с полями pathname, protocol, host и пустой query', () => {
        const url = getUrlWithParamsConfig('getPokemon', {id: 25})

        expect(url).toEqual({
            method: 'GET',
            uri: {
                protocol: 'http',
                host: 'zar.hosthot.ru',
                pathname: '/api/v1/pokemon/25',
                query: {},
            },
            body: {}
        })
    })
})