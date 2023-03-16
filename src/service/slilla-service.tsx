export default class SwapiService {

    _apiBase = "https://swapi.dev/api"; // "_" - это приватная часть класса, ее не следует использовать снаружи
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async(url: string) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    };

    getAllPeople = async() => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    getPerson = async(id: number) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async() => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    getPlanet = async(id: number) => { const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async() => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    getStarship = async(id: number) => {
        const ship = await this.getResource(`/starship/${id}/`);
        return this._transformStarship(ship);
    };



    getPersonImage = ({id}: {id: number}) => {
        return `${this._imageBase}/characters/${id}.jpg`
      };
    
    getStarshipImage = ({id}: {id: number}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    };

    getPlanetImage = ({id}: {id: number}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    };



    _extractId = (item: any) => {
        const idRegExp = /\/([0-9]*)\/$/; // используем https://regex101.com/, чтобы достать из url объекта планета цифру для id.
        return item.url.match(idRegExp)[1];
    };

    _transformPlanet = (planet: object | any) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter 
        }
    };

    _transformStarship = (starship: object | any) => {
        return {
            id: this._extractId(starship),
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson = (person: object | any) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor,
        }
    };
}

const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {
    console.log(p.name);
});