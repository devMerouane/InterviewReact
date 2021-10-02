export const DITTO_FETCHED = 'DITTO_FETCHED';
export const PIKACHU_FETCHED = 'PIKACHU_FETCHED';
export const CHARMANDER_FETCHED = 'CHARMANDER_FETCHED';

export const ditto = (payload) => ({ type: DITTO_FETCHED, payload });
export const pikachu = (payload) => ({ type: PIKACHU_FETCHED, payload });
export const charmander = (payload) => ({ type: CHARMANDER_FETCHED, payload });
