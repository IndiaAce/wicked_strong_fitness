"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import type { ProgramId } from "@/lib/program-content"

const STORAGE_KEY = "ws-program"

type ProgramContextValue = {
  /** The active marketing program. SSR + first client render is always "fitness". */
  program: ProgramId
  /** Whether the visitor has explicitly chosen a program (drives the splash gate). */
  chosen: boolean
  /** True once mounted on the client — guards against hydration mismatch. */
  mounted: boolean
  setProgram: (program: ProgramId) => void
}

const ProgramContext = createContext<ProgramContextValue | null>(null)

export function ProgramProvider({ children }: { children: React.ReactNode }) {
  // SSR default is "fitness" so marketing copy is crawlable and the first
  // client render matches the server. localStorage is read after mount.
  const [program, setProgramState] = useState<ProgramId>("fitness")
  const [chosen, setChosen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === "fitness" || stored === "pd") {
        setProgramState(stored)
        setChosen(true)
      }
    } catch {
      // ignore unavailable storage
    }
  }, [])

  const setProgram = useCallback((next: ProgramId) => {
    setProgramState(next)
    setChosen(true)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore unavailable storage
    }
  }, [])

  return (
    <ProgramContext.Provider value={{ program, chosen, mounted, setProgram }}>
      {children}
    </ProgramContext.Provider>
  )
}

export function useProgram() {
  const ctx = useContext(ProgramContext)
  if (!ctx) {
    throw new Error("useProgram must be used within a ProgramProvider")
  }
  return ctx
}
