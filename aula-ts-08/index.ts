type Game = {
    id: number;
    platform: Platform;
    title: string;
    publisher: string;
    launch?: string | Date;

}

type Platform = {
    id: number;
    name: string;
}

const game: Game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" 
}
  
  const games: Game[]  = [game];
  
  function play(game: Game){
    // runs the game
    console.log(game);
  }