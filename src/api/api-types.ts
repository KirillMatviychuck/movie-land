export type GetMoviesData = {
    page?: number
}

export type MovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: [number, number],
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type GetMoviesResponse = {
    page: number
    results: MovieType[]
    total_pages: number
    total_results: number
}

export type GetDetailsResponse = {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: Array<{ id: number, name: string }>
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    revenue: number
    runtime: number
    status: string,
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type CreditsActor = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
}

export type GetCreditsResponse = {
    id: number
    cast: CreditsActor[]
}

export type GetActorDetailsResponse = {
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string
    gender: number
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string
}

export type ActorCreditsItem = {
    adult: boolean
    backdrop_path: string
    character: string
    credit_id: string
    genre_ids: number
    id: number
    order: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type ActorExternalIDsItem = {
    id: number
    freebase_mid: string
    freebase_id: string
    imdb_id: string
    tvrage_id: number
    wikidata_id: string
    facebook_id: string
    instagram_id: string
    tiktok_id: string
    twitter_id: string
    youtube_id: string
}

export type GetActorCreditsResponse = {
    cast: ActorCreditsItem[]
    id: number
}