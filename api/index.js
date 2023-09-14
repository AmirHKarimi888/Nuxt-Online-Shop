export const url = "https://api.storerestapi.com";

class Actions {
    constructor() {

    }

    async get(url, id) {
        await useFetch(url, id);
    }
}

export const Action = new Actions();