import httpClient from '@services/client/httpClient';

export async function getHeroes(nameStartsWith: string, offset:number) {
  try {
    const params = nameStartsWith ? { nameStartsWith } : {};
    const response = await httpClient({
      url: 'characters',
      method: 'GET',
      offset,
      params,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getHero(character_id: number) {
  try {
    const responses = Promise.all([
      await httpClient({
        url: `characters/${character_id}`,
        method: 'GET',
        offset: 0,
      }),
      await httpClient({
        url: `characters/${character_id}/comics`,
        method: 'GET',
        offset: 0,
      }),
      await httpClient({
        url: `characters/${character_id}/series`,
        method: 'GET',
        offset: 0,
      }),
      await httpClient({
        url: `characters/${character_id}/events`,
        method: 'GET',
        offset: 0,
      }),
    ]);

    return responses;
  } catch (error) {
    throw error;
  }
}

