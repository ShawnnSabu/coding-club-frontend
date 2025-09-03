export default function Register() {
  return (
    <div className="text-gray-100 bg-[#0b0b0c] min-h-screen w-full overflow-x-hidden">
      <div className="max-w-[1180px] mx-auto px-6 pt-14 pb-28 relative">
        {/* rails */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <span className="absolute top-10 bottom-10 left-[72px] w-[2px] rounded bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <span className="absolute top-10 bottom-10 right-[72px] w-[2px] rounded bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>

        {/* header */}
        <div className="flex items-center gap-2 mb-3 font-bold tracking-wide text-white">
          <span className="px-4 py-2 border-2 border-white rounded-lg text-lg">
            &lt;Coding Club&gt;
          </span>
          <span className="ml-2 font-semibold text-sm opacity-85">TKMCE</span>
        </div>

        <h1 className="text-[clamp(44px,6vw,84px)] font-extrabold tracking-tight my-2 mb-8">
          <span className="text-red-500">&lt;</span>Registration
          <span className="text-red-500">&gt;</span>
        </h1>

        {/* card */}
        <section className="relative rounded-[28px] border border-white/20 bg-gradient-to-b from-[#141419] to-[#1a1b22] shadow-[0_10px_30px_rgba(0,0,0,.35),inset_0_0_0_1px_rgba(255,255,255,.06)] p-[38px]">
          <div className="grid gap-[clamp(22px,3.5vw,40px)] grid-cols-1 md:grid-cols-[1.1fr_1fr]">
            {/* left copy */}
            <div>
              <h2 className="my-1 text-[clamp(28px,3.2vw,44px)] font-extrabold">
                JOIN US
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Collaborate &amp; connect with passionate coders and creators like you
              </p>
              <button
                type="button"
                onClick={() => alert('About Coding Club TKMCE')}
                className="mt-6 inline-block px-6 py-3 text-black bg-white rounded-full font-bold shadow hover:-translate-y-[1px] transition"
              >
                About us
              </button>
            </div>

            {/* form */}
            <FormBlock />
          </div>
        </section>
      </div>
    </div>
  );
}

function FormBlock() {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const fields = ['name', 'year', 'branch', 'email'];
    const missing = fields.filter((k) => !String(data.get(k) || '').trim());

    const status = e.currentTarget.querySelector('.status');
    if (missing.length) {
      status.textContent = 'Please fill all fields.';
      status.className = 'status text-red-400 mt-2 text-sm';
      return;
    }
    const email = String(data.get('email') || '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Enter a valid email address.';
      status.className = 'status text-red-400 mt-2 text-sm';
      return;
    }
    status.textContent = 'Registered! (Demo only — connect to your API)';
    status.className = 'status text-green-400 mt-2 text-sm';
    e.currentTarget.reset();
  }

  return (
    <form className="grid gap-4 content-start" onSubmit={onSubmit}>
      {[
        { id: 'name', label: 'Name', placeholder: 'Your name' },
        { id: 'year', label: 'Year', placeholder: '1st / 2nd / 3rd / 4th' },
        { id: 'branch', label: 'Branch', placeholder: 'CSE / ECE / ...' },
        { id: 'email', label: 'Email ID', placeholder: 'abc@tkmce.ac.in', type: 'email' },
      ].map((field) => (
        <div key={field.id} className="grid grid-cols-[auto_1fr] items-center gap-3">
          <label htmlFor={field.id} className="flex items-center gap-2 text-lg font-extrabold">
            {field.label} <span className="w-3.5 h-[3px] bg-red-500 rounded" />
          </label>
          <input
            id={field.id}
            name={field.id}
            type={field.type || 'text'}
            placeholder={field.placeholder}
            className="h-12 rounded-lg bg-[#2a2c36] border border-white/10 px-4 text-gray-100 placeholder-gray-400 focus:bg-[#353746] focus:border-white/30 focus:ring-4 focus:ring-white/10 outline-none transition"
          />
        </div>
      ))}

      <div className="flex justify-end mt-7">
        <button
          type="submit"
          className="h-[54px] px-7 text-lg font-extrabold text-black rounded-full cursor-pointer bg-gradient-to-r from-[#7b5cff] to-[#ff7b6e] shadow-[0_10px_24px_rgba(127,88,255,.35),0_6px_18px_rgba(255,123,110,.25)] hover:-translate-y-[1px] hover:brightness-105 transition"
        >
          Register
        </button>
      </div>
      <p className="status mt-2 text-gray-400 text-sm" />
    </form>
  );
}
