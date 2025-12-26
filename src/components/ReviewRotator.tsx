"use client"

import { useEffect, useMemo, useState } from "react"

type ReviewRotatorProps = {
  reviews: string[]
  pageSize?: number
}

function shuffleReviews(items: string[]) {
  const list = [...items]
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }
  return list
}

export function ReviewRotator({ reviews, pageSize = 3 }: ReviewRotatorProps) {
  const cleaned = useMemo(
    () => reviews.map((review) => review.trim()).filter(Boolean),
    [reviews]
  )
  const [ordered, setOrdered] = useState(cleaned)
  const [page, setPage] = useState(0)
  const total = ordered.length

  useEffect(() => {
    setOrdered(cleaned)
    setPage(0)
  }, [cleaned])

  useEffect(() => {
    if (cleaned.length < 2) return
    setOrdered(shuffleReviews(cleaned))
  }, [cleaned])

  if (total === 0) {
    return (
      <p className="mt-6 text-sm text-[color:var(--ws-muted)]">
        Member feedback will appear here soon.
      </p>
    )
  }

  const clampedPageSize = Math.max(1, pageSize)
  const totalPages = Math.max(1, Math.ceil(total / clampedPageSize))
  const safePage = Math.min(page, totalPages - 1)
  const start = safePage * clampedPageSize
  const current = ordered.slice(start, start + clampedPageSize)

  return (
    <div className="mt-6 space-y-3">
      <div className="space-y-4 text-sm text-[color:var(--ws-muted)]">
        {current.map((review, i) => (
          <div
            key={`${review}-${start + i}`}
            className="rounded-2xl border border-black/5 bg-[color:var(--ws-pearl)] p-4 shadow-sm"
          >
            "{review}"
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[color:var(--ws-navy)]">
        <span>
          Page {safePage + 1} of {totalPages}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(0, prev - 1))}
            className="rounded-full border border-black/10 px-3 py-1 text-[color:var(--ws-ink)] hover:bg-black/5"
            disabled={safePage === 0}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(totalPages - 1, prev + 1))}
            className="rounded-full border border-black/10 px-3 py-1 text-[color:var(--ws-ink)] hover:bg-black/5"
            disabled={safePage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
