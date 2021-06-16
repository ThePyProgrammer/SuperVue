import { getPosition, getJoke } from "@/api/api";
import {formatDate} from "@/util/datetimeutils";

async function main(): Promise<string> {
  const pos = await getPosition();
  const {date, latitude, longitude} = pos;
  const dateAsString = formatDate(date);
  return `On ${dateAsString}, The ISS was at a latitude of ${latitude} and longitude of ${longitude}`;
  // return "Hello, world!";
}

export default {
  main, home: getJoke
};
