import fs from "node:fs/promises"
import path from "node:path"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const decoded = decodeURIComponent(slug)
  const safeName = path.basename(decoded)
  if (safeName !== decoded) {
    return new NextResponse("Not found", { status: 404 })
  }

  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "newsletter",
    "newsletters",
    safeName
  )

  try {
    const file = await fs.readFile(filePath)
    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${safeName}"`,
      },
    })
  } catch {
    return new NextResponse("Not found", { status: 404 })
  }
}
