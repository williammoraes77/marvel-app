import httpClient from '@services/client/httpClient';

export async function getHeroes(name: string) {
  try {
    const params = name ? { name } : {};
    const response = await httpClient({
      url: 'characters',
      method: 'GET',
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
      }),
      await httpClient({
        url: `characters/${character_id}/comics`,
        method: 'GET',
      }),
    ]);

    return responses;
  } catch (error) {
    throw error;
  }
}

