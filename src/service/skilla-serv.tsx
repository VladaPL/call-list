// export default class SwapiService {

//     _apiBase = "https://api.skilla.ru/mango/getList"; // "_" - это приватная часть класса, ее не следует использовать снаружи


//     getResource = async(url: string) => {
//         const res = await fetch(`${this._apiBase}${url}`);

//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, received ${res.status}`);
//         }
//         return await res.json();
//     };

//     getAllPeople = async() => {
//         const res = await this.getResource(`/people/`);
//         return res.results.map(this._transformPerson);
//     };

//     getPerson = async(id: number) => {
//         const person = await this.getResource(`/people/${id}/`);
//         return this._transformPerson(person);
//     };
    


//     _extractId = (item: any) => {
//         const idRegExp = /\/([0-9]*)\/$/; // используем https://regex101.com/, чтобы достать из url объекта планета цифру для id.
//         return item.url.match(idRegExp)[1];
//     };


//     _transformPerson = (person: object | any) => {
//         return {
//             id: this._extractId(person),
//             name: person.name,
//             gender: person.gender,
//             birthYear: person.birthYear,
//             eyeColor: person.eyeColor,
//         }
//     };
// }


export default class SwapiService {

    _apiBase = 'https://api.skilla.ru/mango/getList';

    async getResourse(url: string) {
        const res = await fetch(`${this._apiBase}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer testtoken',
                'Content-Type': 'application/json',
            },
            //body: data,
        });

        if(!res.ok) {
            throw new Error(`Couldn not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPeople() {
        const res: any = this.getResourse(this._apiBase);
        return res;
    }

}

const swapi = new SwapiService();

swapi.getAllPeople().then((result) => {
    console.log(typeof result);

    const arrOfData = result['results'];
    //console.log(result['results']);

    arrOfData.forEach((item: any) => {
        console.log(item['partner_data']);
    });


    // for(let key in result) {
    //     console.log(result[key]);

    // }
});