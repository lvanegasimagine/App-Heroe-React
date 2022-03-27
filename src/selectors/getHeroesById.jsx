import { heroes } from "../data/Heroes";

export const getHeroesById = (id) => {
    return heroes.find(hero => hero.id === id)
}