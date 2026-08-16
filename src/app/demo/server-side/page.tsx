import { H1, P, Span } from '@/components/base/app-typography'
import { getAllPokemonData } from './_modules/utils/pokemon.utils'
import { POKEMON_COUNT } from './_modules/constants/pokemon.constants'
import PokemonCard from './_modules/components/pokemon-card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function ServerSidePokemonPage() {
  const pokemons = await getAllPokemonData(POKEMON_COUNT)

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-10 flex flex-col gap-4 text-center">
        <H1 className="mb-3">Server side example</H1>
        <P variant="muted" className="text-lg max-w-2xl mx-auto">
          Explore the first {POKEMON_COUNT} Pokemon species with detailed information,
          animated sprites, and their unique characteristics and fetch the API from server side
        </P>
        <Link href="/" className='flex items-center justify-center gap-2 hover:underline'>
          <ArrowLeft size={18} className='text-primary' />
          <Span>Back to home</Span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>

      <footer className="border-t border-border/50 py-8 text-center">
        <P variant="muted" className="text-sm">
          Data provided by{' '}
          <a
            href="https://pokeapi.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            PokeAPI
          </a>
        </P>
      </footer>
    </div>
  )
}