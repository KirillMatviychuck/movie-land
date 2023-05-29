//Makes correct release date into MovieDetails and CardBackside components
export const fixDate = (date: string) => {
    if (date) {
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8);
        return `${day}-${month}-${year}`;
    } else return '10-10-2022';
};

//Makes correct movie rating
export const fixMovieRate = (rate: number) => rate ? +rate.toFixed(1) : 0;

//Makes correct movie duration in 00h00m format
export const fixDuration = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime - (hours * 60);
    return `${hours}h ${minutes}m`;
};

//Makes the border green, orange or crimson, depending on the rating value
export const fixColor = (movieRating: number) => movieRating >= 7 ? 'green' : movieRating >= 5 ? '#ffa703' : 'crimson';

//Return link of actor's photo
export const getProfileURL = (profilePath: string) => {
    return profilePath
        ? `https://www.themoviedb.org/t/p/w220_and_h330_face${profilePath}`
        : '';
};

//Return link of movie's poster 
export const getPosterURL = (posterPath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

