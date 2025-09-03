export default function Login() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0c] text-[#f5f5f5]">
      <div className="relative mx-auto max-w-[1180px] px-6 pt-14 pb-28">
        {/* Decorative rails */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <span className="absolute left-[72px] top-10 bottom-10 w-[2px] rounded bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <span className="absolute right-[72px] top-10 bottom-10 w-[2px] rounded bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* Branding */}
        <div className="mb-3 flex items-center gap-2 font-bold">
          <span className="rounded-lg border-2 border-white px-[14px] py-2 text-lg">
            &lt;Coding Club&gt;
          </span>
          <span className="ml-2 text-sm font-semibold opacity-85">TKMCE</span>
        </div>

        {/* Title */}
        <h1 className="my-2 mb-8 text-[clamp(44px,6vw,84px)] font-extrabold tracking-tight">
          <span className="text-[#ff2b2b]">&lt;</span>Login
          <span className="text-[#ff2b2b]">&gt;</span>
        </h1>

        {/* Card */}
        <section className="relative rounded-[28px] border border-white/20 bg-gradient-to-b from-[#141419] to-[#1a1b22] p-10 shadow-xl">
          <div className="grid gap-[clamp(22px,3.5vw,40px)] md:grid-cols-[1.1fr,1fr]">
            {/* Left pitch */}
            <div>
              <h2 className="mb-3 text-[clamp(28px,3.2vw,44px)] font-extrabold">
                WELCOME BACK
              </h2>
              <p className="text-[#bdbdbf] leading-relaxed">
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
  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") || "").trim();
    const password = String(f.get("password") || "");
    const status = e.currentTarget.querySelector(".status");

    if (!email || !password) {
      status.textContent = "Please enter email and password.";
      status.className = "status text-[#ff8b8b]";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = "Please enter a valid email.";
      status.className = "status text-[#ff8b8b]";
      return;
    }

    setTimeout(() => {
      status.textContent = "Signed in! (Demo — wire this to your backend)";
      status.className = "status text-[#7ef29a]";
      e.currentTarget.reset();
    }, 450);
  }

  return (
    <form className="grid gap-4 content-start" onSubmit={onSubmit}>
      {/* Email */}
      <div className="grid grid-cols-[auto,1fr] items-center gap-4">
        <label
          htmlFor="email"
          className="flex items-center gap-2 text-lg font-extrabold"
        >
          Email ID <span className="h-[3px] w-4 rounded bg-[#ff2b2b]" />
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="abc@college.edu"
          className="h-12 rounded-lg border border-white/10 bg-[#2a2c36] px-4 text-white placeholder-[#a4a6b3] focus:border-white/30 focus:bg-[#353746] focus:outline-none focus:ring-4 focus:ring-white/10"
        />
      </div>

      {/* Password */}
      <div className="grid grid-cols-[auto,1fr] items-center gap-4">
        <label
          htmlFor="password"
          className="flex items-center gap-2 text-lg font-extrabold"
        >
          Password <span className="h-[3px] w-4 rounded bg-[#ff2b2b]" />
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter Your password"
          className="h-12 rounded-lg border border-white/10 bg-[#2a2c36] px-4 text-white placeholder-[#a4a6b3] focus:border-white/30 focus:bg-[#353746] focus:outline-none focus:ring-4 focus:ring-white/10"
        />
      </div>

      {/* Extras */}
      <div className="mt-1 flex items-center justify-between text-sm text-[#bdbdbf]">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="accent-[#cfcfcf]" /> Remember me
        </label>
        <a href="#" className="hover:underline">
          Forgot password?
        </a>
      </div>

      {/* Actions */}
      <div className="flex justify-end pt-6">
        <button
          type="submit"
          className="h-[54px] rounded-full bg-gradient-to-r from-[#7b5cff] to-[#ff7b6e] px-7 text-lg font-extrabold text-black shadow-lg transition hover:-translate-y-0.5 hover:brightness-105"
        >
          Sign in
        </button>
      </div>

      {/* Register */}
      <p className="mt-3 text-sm text-[#bdbdbf]">
        Don’t have an account?{" "}
        <a href="/register" className="font-bold text-white hover:underline">
          Register
        </a>
      </p>

      {/* Status */}
      <p className="status mt-2 text-sm text-[#bdbdbf]" />
    </form>
  );
}
