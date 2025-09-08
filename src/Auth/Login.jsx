export default function Login() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white flex flex-col">
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-28 w-full">
        {/* Branding */}
        <div className="mb-3 flex items-center gap-2 font-bold">
          <span className="rounded-lg border-2 border-white px-3 py-2 text-lg">
            &lt;Coding Club&gt;
          </span>
          <span className="ml-2 text-sm font-semibold opacity-85">TKMCE</span>
        </div>

        {/* Title */}
        <h1 className="my-2 mb-10 text-[clamp(44px,6vw,84px)] font-extrabold tracking-tight">
          <span className="text-[#ff2b2b]">&lt;</span>Login
          <span className="text-[#ff2b2b]">&gt;</span>
        </h1>

        {/* Card */}
        <section className="rounded-2xl border border-white/20 bg-gradient-to-b from-[#141419] to-[#1a1b22] p-10 shadow-xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left pitch */}
            <div>
              <h2 className="mb-3 text-[clamp(28px,3vw,44px)] font-extrabold">
                WELCOME BACK
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Sign in to continue collaborating with passionate coders and creators
              </p>
              <button
                type="button"
                onClick={() => alert("About Coding Club TKMCE")}
                className="mt-6 inline-block rounded-full bg-white px-6 py-2 font-bold text-black shadow-md transition hover:-translate-y-0.5"
              >
                About us
              </button>
            </div>

            {/* Right form */}
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="space-y-4">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 flex items-center gap-2 font-bold text-lg"
        >
          Email ID <span className="h-[3px] w-4 rounded bg-[#ff2b2b]" />
        </label>
        <input
          id="email"
          type="email"
          placeholder="abc@college.edu"
          className="w-full rounded-lg border border-white/10 bg-[#2a2c36] px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-[#353746] focus:outline-none focus:ring-4 focus:ring-white/10"
        />
      </div>

      {/* Password */}
      <div>
        <label
          htmlFor="password"
          className="mb-1 flex items-center gap-2 font-bold text-lg"
        >
          Password <span className="h-[3px] w-4 rounded bg-[#ff2b2b]" />
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter Your password"
          className="w-full rounded-lg border border-white/10 bg-[#2a2c36] px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-[#353746] focus:outline-none focus:ring-4 focus:ring-white/10"
        />
      </div>

      {/* Extras */}
      <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-gray-300" /> Remember me
        </label>
        <a href="#" className="hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-[#7b5cff] to-[#ff7b6e] px-6 py-3 font-extrabold text-black shadow-lg transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Sign in
        </button>
      </div>

      {/* Register */}
      <p className="pt-2 text-sm text-gray-400">
        Don’t have an account?{" "}
        <a href="/register" className="font-bold text-white hover:underline">
          Register
        </a>
      </p>
    </form>
  );
}
