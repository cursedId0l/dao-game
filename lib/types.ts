export type Character = 'humpy' | 'goldenboyz' | 'patrick' | 'guardian' | 'narrator' | 'system'

export type Stats = {
  votes: number      // 0-100+ (100 = quorum)
  reputation: number // 0-100
}

export type Choice = {
  label: string
  next: string
  effect?: Partial<Stats>
  hint?: string
}

export type LessonCard = {
  term: string
  definition: string
  example?: string
  link?: string
}

export type Scene = {
  id: string
  actTitle?: string
  character?: Character
  dialogue: string
  choices?: Choice[]
  next?: string
  effect?: Partial<Stats>
  lesson?: LessonCard
}
