type PopularMovieType = {
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

export type GetPopularMoviesResponse = {
    page: number
    results: PopularMovieType[]
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