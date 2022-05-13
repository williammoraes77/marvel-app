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
export interface SeriesProps {
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface EventsProps {
  title: string;
  startYear: string;
  endYear: string;
  modified: string;
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
  series: SeriesProps;
  events: EventsProps;
}

interface IHeroContextData {
  hero: HeroProps;
  heroes: HeroProps[];
  loadHeroes(name?: string): void;
  loadHero(character_id: number): void;
  clearHero(): void;
  handlePaginate(num: number): void;
  paginate: number;
}

const HeroContext = createContext({} as IHeroContextData);

function HeroProvider({ children }: HeroProviderProps) {
  const [hero, setHero] = useState<HeroProps>({} as HeroProps);
  const [heroes, setHeroes] = useState<HeroProps[]>([]);
  const [paginate, setPaginate] = useState(0 || null);

  async function loadHeroes(name: string) {
    try {
      const response = await getHeroes(name, paginate ? paginate : 0);

      setHeroes(response.data.data.results);
    } catch (error) {}
  }

  async function loadHero(character_id: number) {
    try {
      const response = await getHero(character_id);
      // console.log(response[2].data.data.results);
      const heroParsed = {
        ...response[0].data.data.results[0],
        comics: [...response[1].data.data.results],
        series: [...response[2].data.data.results],
        events: [...response[3].data.data.results],
      };

      setHero(heroParsed);

    } catch (error) {}
  }

  function clearHero() {
    setHero({} as HeroProps);
  }

  function handlePaginate(num: number){
    setPaginate(num);
  }

  return (
    <HeroContext.Provider
      value={{
        hero,
        heroes,
        loadHeroes,
        loadHero,
        clearHero,
        handlePaginate,
        paginate,
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

