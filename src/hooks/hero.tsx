import React, { ReactNode, createContext, useContext, useState } from 'react';

import { getHeroes, getHero } from '@services/source/api/MarvelService';

type HeroProviderProps = {
  children: ReactNode;
};
export interface ComicProps {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export interface HeroProps {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: ComicProps;
}

interface IHeroContextData {
  hero: HeroProps;
  heroes: HeroProps[];
  loadHeroes(name?: string): void;
  loadHero(character_id: number): void;
  clearHero(): void;
}

const HeroContext = createContext({} as IHeroContextData);

function HeroProvider({ children }: HeroProviderProps) {
  const [hero, setHero] = useState<HeroProps>({} as HeroProps);
  const [heroes, setHeroes] = useState<HeroProps[]>([]);

  async function loadHeroes(name: string) {
    try {
      const response = await getHeroes(name);

      setHeroes(response.data.data.results);
    } catch (error) {}
  }

  async function loadHero(character_id: number) {
    try {
      const response = await getHero(character_id);

      const heroParsed = {
        ...response[0].data.data.results[0],
        comics: [...response[1].data.data.results],
      };

      setHero(heroParsed);
    } catch (error) {}
  }

  function clearHero() {
    setHero({} as HeroProps);
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
        heroes,
        loadHeroes,
        loadHero,
        clearHero,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
}

function useHero() {
  const context = useContext(HeroContext);

  return context;
}

export { HeroProvider, useHero };

