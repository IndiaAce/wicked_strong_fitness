"use client"

import { useEffect } from "react"

export function InviteRedirect() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const params = new URLSearchParams(hash.slice(1))
    const accessToken = params.get("access_token")
    if (!accessToken) return
    if (window.location.pathname !== "/set-password") {
      window.location.replace(`/set-password${hash}`)
    }
  }, [])

  return null
}
