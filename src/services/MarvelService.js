
class MarvelService {

    #url;
    #apiKey;

    constructor() {
        this.#url = 'https://gateway.marvel.com:443/v1/public';
        this.#apiKey = 'e7b055acb3b5ad1f6af031bcb628d4b0'
    }

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    
    getAllCharacters = async (limit = 9, offset = 0) => {
        const res = await this.getResource(
                `${this.#url}/characters?limit=${limit}&offset=${offset}&apikey=${this.#apiKey}`
            );

        return res.data.results.map(this.#transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(
                `${this.#url}/characters/${id}?apikey=${this.#apiKey}`
            );

        return this.#transformCharacter(res.data.results[0]);
    }

    #transformCharacter = (character) => {
        const thumbnail = (
            character.thumbnail.path + '.' + character.thumbnail.extension
        );

        const homepage = character.urls[0].url;
        const wiki = character.urls[1].url;

        return {
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: thumbnail,
            homepage: homepage,
            wiki: wiki,
            comics: character.comics.items
        };
    }
}

export default MarvelService;