export type PokemonSpecies = {
  id: number
  name: string
  flavor_text_entries: Array<{
    flavor_text: string
    language: { name: string }
  }>
  types: Array<{ slot: number; type: { name: string } }>
}

export type PokemonSprites = {
  id: number
  name: string
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string
          }
        }
      }
    }
  }
  types: Array<{
    slot: number
    type: { name: string }
  }>
}

export type Pokemon = {
  id: number
  name: string
  imageUrl: string
  types: string[]
  description: string
}
