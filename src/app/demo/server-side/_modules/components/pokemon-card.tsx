'use client'

import AppImageFallback from '@/components/base/app-image-fallback'
import { H3, Span } from '@/components/base/app-typography'
import { Pokemon } from '../types/pokemon.type'
import { TYPE_COLORS } from '../constants/pokemon.constants'

interface PokemonCardProps {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-card text-card-foreground shadow-lg ring-1 ring-foreground/5 transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] dark:ring-foreground/10 cursor-pointer">
      <div className="relative flex items-center justify-center bg-linear-to-b from-muted/50 to-muted p-6 pb-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_70%)]" />

        <AppImageFallback
          src={pokemon.imageUrl}
          placeholderSrc={pokemon.imageUrl}
          alt={`${pokemon.name} animated sprite`}
          width={100}
          height={100}
          className="relative z-10 h-20 w-20 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition-transform duration-200 ease-out group-hover:scale-110 mx-auto"
        />

        <div className="absolute left-4 top-4 flex gap-1.5">
          {pokemon.types.map((type) => (
            <Span
              key={type}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white capitalize ${TYPE_COLORS[type] || 'bg-stone-500'}`}
            >
              {type}
            </Span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 pt-4">
        <div className="flex items-center justify-between">
          <H3 className="text-lg font-semibold text-foreground">
            {pokemon.name}
          </H3>
          <Span className="text-sm font-medium tabular-nums text-muted-foreground">
            #{String(pokemon.id).padStart(3, '0')}
          </Span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {pokemon.description}
        </p>

        <div className="mt-2 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-linear-to-r from-primary to-accent"
              style={{ width: `${(pokemon.id / 100) * 100}%` }}
            />
          </div>
          <Span className="text-xs text-muted-foreground shrink-0">
            #{pokemon.id}
          </Span>
        </div>
      </div>
    </div>
  )
}