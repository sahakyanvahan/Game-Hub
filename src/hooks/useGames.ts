import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform{
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number;
    slug: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => 
    useData<Game>("/games", {params: 
        {
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id, 
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchInput
        }}, 
    [gameQuery]);

export default useGames;