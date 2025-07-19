const teams = [
  {
    name: "Team A",
    players: [
      { name: "Alex", goals: 7 },
      { name: "John", goals: 4 }
    ]
  },
  {
    name: "Team B",
    players: [
      { name: "Max", goals: 3 },
      { name: "Leo", goals: 9 }
    ]
  }
];

const topscorer=teams.map((team)=>{
    const topplayer=team.players
    .sort((a,b)=>{
        return b.goals-a.goals
    })
    .slice(0,1)[0]
    return{team:team.name,players:topplayer.name,goals:topplayer.goals}
})
console.log(topscorer);

const students = [
  { name: "Asha", scores: [90, 80, 85] },
  { name: "Ravi", scores: [70, 75, 78] },
  { name: "Neha", scores: [95, 92, 90] }
];
const toppers=students.map(s=>({
    name:s.name,
    scores:s.scores.reduce((a,b)=>a+b)/s.scores.length
}))
.sort((a,b)=>{
    return b.scores-a.scores
})
.slice(0,1)[0]
console.log(toppers);
const songs = [
  { title: "Song A", plays: 120 },
  { title: "Song B", plays: 300 },
  { title: "Song C", plays: 250 }
];
const players=songs.sort((a,b)=>{
    return b.plays-a.plays
})
.slice(0,1)[0]
console.log(players);
const cities = [
  { name: "City A", population: 1200000 },
  { name: "City B", population: 5000000 },
  { name: "City C", population: 2200000 }
];
const city=cities.sort((a,b)=>{
    return b.population-a.population
})
.slice(0,1)[0]
console.log(city);





