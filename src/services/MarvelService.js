import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { request, loading, error, clearError } = useHttp();

  const url = "https://gateway.marvel.com:443/v1/public";
  const apiKey = "e7b055acb3b5ad1f6af031bcb628d4b0";
  const characterOffset = 210;

  const getAllCharacters = async (limit = 9, offset = characterOffset) => {
    const res = await request({
      url: `${url}/characters?limit=${limit}&offset=${offset}&apikey=${apiKey}`,
    });

    return res.data.results.map(transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request({
      url: `${url}/characters/${id}?apikey=${apiKey}`,
    });

    return transformCharacter(res.data.results[0]);
  };

  const transformCharacter = (character) => {
    const thumbnail =
      character.thumbnail.path + "." + character.thumbnail.extension;

    const homepage = character.urls[0].url;
    const wiki = character.urls[1].url;

    return {
      id: character.id,
      name: character.name,
      description: character.description
        ? `${character.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: thumbnail,
      homepage: homepage,
      wiki: wiki,
      comics: character.comics.items,
    };
  };

  return { loading, error, getAllCharacters, getCharacter, clearError };
};

export default useMarvelService;
