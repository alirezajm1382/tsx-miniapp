import { atom } from 'jotai'
import { TNote } from '@/interfaces/interfaces'

export const notesAtom = atom<TNote[]>([])
export const nameDefaultAtom = atom<string>('')
export const emailDefaultAtom = atom<string>('')
export const idDefaultAtom = atom<number>(0)
