import {Location} from "@/types/location";
import {Position} from "@/types/position";
import {Joke} from "@/types/joke";

async function getLocation(): Promise<Location> {
  return await (await fetch("http://api.open-notify.org/iss-now.json")).json();
}

export async function getPosition(): Promise<Position> {
  const loc: Location = await getLocation();
  return new Position(loc.timestamp, loc.iss_position);
}

async function getJokeData(): Promise<Joke> {
  return await (await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")).json();
}

export async function getJoke(): Promise<string> {
  const jokeData = await getJokeData();
  return jokeData.joke;
}
