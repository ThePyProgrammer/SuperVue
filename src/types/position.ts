import {convertTimestampToDate} from "@/util/datetimeutils";
import {Coordinates} from "@/types/coordinates";

export class Position {
  date!: Date
  latitude!: string
  longitude!: string

  constructor(unix_timestamp: number, coordinates: Coordinates) {
    this.date = convertTimestampToDate(unix_timestamp);
    const { latitude, longitude } = coordinates;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
