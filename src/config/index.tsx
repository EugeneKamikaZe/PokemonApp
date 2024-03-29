export const config = {
    client: {
        server: {
            protocol: 'http',
            host: 'zar.hosthot.ru'
        },
        endpoint: {
            getPokemons: {
                method: 'GET',
                uri: {
                    pathname: '/api/v1/pokemons'
                }
            },
            getPokemon: {
                method: 'GET',
                uri: {
                    pathname: '/api/v1/pokemon/{id}'
                }
            },
            getPokemonsTypes: {
                method: 'GET',
                uri: {
                    pathname: '/api/v1/types'
                }
            }
        }
    }
}

export enum configEndpoint {
    getPokemonsTypes = 'getPokemonsTypes',
    getPokemon = 'getPokemon',
    getPokemons = 'getPokemons'
}

export default config