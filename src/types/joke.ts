import {Flags} from "@/types/flags";

export class Joke {
  error!: boolean
  category!: string
  type!: string
  joke!: string
  flags!: Flags
  id!: number
  safe!: boolean
  lang!: string
}
