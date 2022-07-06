const __HOSTNAME = 'http://localhost:3001';
const __URL_RECIPES = `${__HOSTNAME}/recipes`;
const __URL_SPECIALS = `${__HOSTNAME}/specials`;

export const API_recipe = () => {    
    return fetch(`${__URL_RECIPES}`);
}

export const SPECIAL_recipe = () => {
    return fetch(`${__URL_SPECIALS}`);
}

export const IMAGE_path = __HOSTNAME;