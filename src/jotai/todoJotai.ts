import { atom } from 'jotai'
import { TNote } from '@/interfaces/interfaces'

export const notesAtom = atom<TNote[]>([])
export const idDefaultAtom = atom<number>(0)
