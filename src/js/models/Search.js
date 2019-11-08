import axios from 'axios';

export default class search {
    constructor(query) {
        this.query = query;
    }

    async getResults() { //automatically returns a promise
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        } catch (error) {
            alert(error);
        }
    }
}