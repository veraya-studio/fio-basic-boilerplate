import { Pokemon, PokemonSpecies, PokemonSprites } from '../types/pokemon.type'
import {
  POKEAPI_SPECIES_URL,
  POKEAPI_POKEMON_URL,
  POKEAPI_SPRITES_URL,
} from '../constants/pokemon.constants'

export async function getPokemonData(pokemonId: number): Promise<Pokemon> {
  const [speciesRes, pokemonRes] = await Promise.all([
    fetch(`${POKEAPI_SPECIES_URL}/${pokemonId}`, {
      next: { revalidate: 604800 },
    }),
    fetch(`${POKEAPI_POKEMON_URL}/${pokemonId}`, {
      next: { revalidate: 604800 },
    }),
  ])

  if (!speciesRes.ok || !pokemonRes.ok) {
    throw new Error(`Failed to fetch Pokemon ${pokemonId}`)
  }

  const species: PokemonSpecies = await speciesRes.json()
  const pokemon: PokemonSprites = await pokemonRes.json()

  const englishEntry = species.flavor_text_entries.find(
    (entry) => entry.language.name === 'en'
  )
  const description = englishEntry
    ? englishEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ')
    : `${species.name} is a Pokemon species.`

  return {
    id: pokemon.id,
    name: species.name.charAt(0).toUpperCase() + species.name.slice(1),
    imageUrl: `${POKEAPI_SPRITES_URL}/${pokemon.id}.gif`,
    types: pokemon.types.map((t) => t.type.name),
    description,
  }
}

export async function getAllPokemonData(count: number): Promise<Pokemon[]> {
  const pokemonPromises = Array.from({ length: count }, (_, i) =>
    getPokemonData(i + 1)
  )

  const pokemonResults = await Promise.allSettled(pokemonPromises)

  return pokemonResults
    .filter(
      (
        r
      ): r is PromiseFulfilledResult<Pokemon> =>
        r.status === 'fulfilled'
    )
    .map((r) => r.value)
}