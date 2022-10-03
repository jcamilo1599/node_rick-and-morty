export interface CharactersAPIResp {
    info: CharactersAPIRespInfo | undefined;
    results: Character[] | undefined;
    error: string | undefined;
}

export interface CharactersAPIRespInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterLocation;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface CharacterLocation {
    name: string;
    url: string;
}