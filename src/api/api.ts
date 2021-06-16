import {Location} from "@/types/location";
import {Position} from "@/types/position";
import {JokeCollection} from "@/types/jokes";
import {QuotableQuote} from "@/types/quotablequotes";

const joke_url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10";
const astro_url = "http://api.open-notify.org/astros.json";
const quotable_url = "https://api.quotable.io/random";

async function getLocation(): Promise<Location> {
  return await (await fetch("http://api.open-notify.org/iss-now.json")).json();
}

export async function getPosition(): Promise<Position> {
  const loc: Location = await getLocation();
  return new Position(loc.timestamp, loc.iss_position);
}

async function getJokeData(): Promise<JokeCollection> {
  return await (await fetch(joke_url)).json();
}

async function getJokeDataWithPrompt(prompt: string): Promise<JokeCollection> {
  return await (await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&contains=${prompt}`)).json();
}

export async function getJokes(): Promise<string[]> {
  const jokeData = await getJokeData();
  return jokeData.jokes.map(it => it.joke);
}

export async function getJokesWithPrompt(prompt: string): Promise<string[]> {
  const jokeData = await getJokeDataWithPrompt(prompt);
  return jokeData.jokes.map(it => it.joke);
}

async function getAstroData(): Promise<AstronautCollection> {
  return await (await fetch(astro_url)).json();
}

export async function getAstronauts(): Promise<string[]> {
  const astroData = await getAstroData();
  return astroData.people.map(it => it.name);
}

export async function getQuotableQuote(): Promise<QuotableQuote> {
  return await (await fetch(quotable_url)).json();
}


