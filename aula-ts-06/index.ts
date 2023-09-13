const game: {id:number, platform: number|string, title: string, publisher: string, launch: string|Date } = {
    id: 1,
    // platform: {
    //     id: 1,
    //     name: "Playstation"
    // },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" 
}

const games = [game];

function play(game: any){
    // runs the game
    console.log(game);
}