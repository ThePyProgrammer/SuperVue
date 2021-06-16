import {Flags} from "@/types/flags";

export class Joke {
  category!: string
  type!: string
  joke!: string
  flags!: Flags
  id!: number
  safe!: boolean
  lang!: string
}
