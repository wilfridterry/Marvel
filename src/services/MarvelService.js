import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { request, loading, error, clearError, process, setProcess } =
    useHttp();

  const url = "https://gateway.marvel.com:443/v1/public";
  const apiKey = "e7b055acb3b5ad1f6af031bcb628d4b0";
  const characterOffset = 610;
  const comicsOffset = 917;

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

  const findCharacterByName = async (name) => {
    const res = await request({
      url: `${url}/characters?name=${name}&apikey=${apiKey}`,
    });

    return res.data.results[0] ? transformCharacter(res.data.results[0]) : null;
  };

  const getAllComics = async (limit = 8, offset = comicsOffset) => {
    const res = await request({
      url: `${url}/comics?limit=${limit}&offset=${offset}&apikey=${apiKey}`,
    });

    return res.data.results.map(transformComics);
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

  const getComic = async (id) => {
    const res = await request({
      url: `${url}/comics/${id}?apikey=${apiKey}`,
    });

    return transformComics(res.data.results[0]);
  };

  const transformComics = (comic) => {
    const thumbnail = comic.thumbnail.path + "." + comic.thumbnail.extension;

    return {
      id: comic.id,
      title: comic.title,
      price: comic.prices[0].price,
      thumbnail: thumbnail,
      language: comic.language,
      pageCount: comic.pageCount,
      description: comic.description,
    };
  };

  return {
    loading,
    error,
    process,
    setProcess,
    getAllCharacters,
    getCharacter,
    findCharacterByName,
    getAllComics,
    clearError,
    getComic,
  };
};

export default useMarvelService;
