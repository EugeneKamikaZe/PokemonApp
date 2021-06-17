export interface IPokemons {
    total?: number,
    name_clean?: string,
    abilities?: string[],
    stats: Stats,
    types: string[],
    img: string,
    name: string,
    base_experience?: number,
    height?: number,
    id?: number,
    is_default?: boolean,
    order?: number,
    weight?: number,
    pokemons?: [],
}

export interface Stats {
    hp: number,
    attack: number,
    defense: number,
    special_attack: number,
    special_defense: number,
    speed: number,
}

export type ITypeRequest = string[]
export type IPokemonRequest = [string]
