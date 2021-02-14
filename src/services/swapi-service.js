
/**
 *  Class for data fetching from some resourse
 */

 // main part of requested resource addresse
 const MAIN_URL = 'https://swapi.dev/api';
 
 export default class SwapiService {
   
   /**
    * Asunc function to get data
    * @param {*} url 
    */
   async getResource (url) {
     const result = await fetch(MAIN_URL + url);
   
     if (!result.ok){
       throw new Error(`Could not fetch ${url} with status ${result.status}`);
     }
   
     return await result.json();
   }
 
   /**
    * Get all people from some source
    */
   async getAllPeople () {
     const rec = await this.getResource('/people/');
     return rec.results.map(this._transformPerson);
   }
 
   /**
    * Get person by it's id
    * @param {*} id 
    */
   async getPerson (id) {
     const rec = await this.getResource(`/people/${id}`);
     return this._transformPerson(rec);
   }
 
   /**
    * Get all planets from some source
    */
   async getAllPlanets () {
     const rec = await this.getResource('/planets/');
     return rec.results.map(this._transformPlanet);
   }
 
   /**
    * Get planet by it's id
    * @param {*} id 
    */
   async getPlanet (id) {
     const planet = await this.getResource(`/planets/${id}`);
     return this._transformPlanet(planet);
   }
 
   /**
    * Get all starships from some source
    */
   async getAllStarships () {
     const rec = await this.getResource('/starships/');
     return rec.results.map(this._transformStarship);
   }
 
   /**
    * Get starship by it's id
    * @param {*} id 
    */
   async getStarship (id) {
     const res = this.getResource(`/starships/${id}`); 
     return this._transformStarship(res);
   }

   /**
    * Get item id from Url
    * @param {*} item 
    */
   _getIdFromUrl(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  /**
   * Transorm url data to convinient view for planets
   * @param  planet 
   */
   _transformPlanet(planet) {
     return {
       id:  this._getIdFromUrl(planet),
       name: planet.name,
       population: planet.population,
       rotationPeriod: planet.rotation_period,
       diameter: planet.diameter
     }
   }

   /**
    * Transform starship info to convinie9
    * @param {*} starship 
    */
   _transformStarship(starship) {
    return {
      id: this._getIdFromUrl(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity  
    }
   }

   _transformPerson(person) {
    return {
      id:  this._getIdFromUrl(person),
      name: person.name,
      gender: person.gender,
      birthYeart: person.birth_year,
      diameter: person.diameter,
      eyeColor: person.eyeColor,

    }
   }
 }
 
 const swapi = new SwapiService();
 swapi.getPerson(1).then((res) => {
   console.log(res);
 });