
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
     return rec.results;
   }
 
   /**
    * Get person by it's id
    * @param {*} id 
    */
   async getPerson (id) {
     return this.getResource(`/people/${id}`);
   }
 
   /**
    * Get all planets from some source
    */
   async getAllPlanets () {
     const rec = await this.getResource('/planets/');
     return rec.results;
   }
 
   /**
    * Get planet by it's id
    * @param {*} id 
    */
   async getPlanet (id) {
     return this.getResource(`/planets/${id}`);
   }
 
   /**
    * Get all starships from some source
    */
   async getAllStarships () {
     const rec = await this.getResource('/starships/');
     return rec.results;
   }
 
   /**
    * Get starship by it's id
    * @param {*} id 
    */
   async getStarship (id) {
     return this.getResource(`/starships/${id}`);
   }
 }
 
 const swapi = new SwapiService();
 swapi.getPerson(1).then((res) => {
   console.log(res);
 });