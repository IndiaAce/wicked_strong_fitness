import { signIn } from "./actions"

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-md px-6 py-16">
        <h1 className="text-3xl font-semibold">Member login</h1>

        {searchParams.error ? (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {decodeURIComponent(searchParams.error)}
          </p>
        ) : null}

        <form action={signIn} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl border px-3 py-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              required
              className="mt-2 w-full rounded-xl border px-3 py-2"
            />
          </div>

          <button className="w-full rounded-xl bg-black px-4 py-3 text-white hover:opacity-90">
            Sign in
          </button>
        </form>
      </div>
    </main>
  )
}
