export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="text-xl font-black tracking-tight">Dr<span className="text-orange">Geo.</span></a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/blog">Insights</a>
        </nav>
        <a href="/contact" className="rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white">Let&apos;s talk ↗</a>
      </header>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.05fr_.95fr] md:items-center md:pt-24">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.18em]">GEO · AEO · AI Search</p>
          <h1 className="max-w-4xl text-6xl font-black leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-[6.5rem]">Be visible where your customers <span className="text-orange">ask AI.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-black/65">Strategic GEO and AEO solutions that help businesses become more discoverable, understandable, and reference-worthy across AI-powered search experiences.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="/services" className="rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white">Explore GEO services ↗</a>
            <a href="/case-studies" className="rounded-full border border-black/15 px-6 py-4 text-sm font-semibold">View my work</a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[.16em] text-black/45">Independent specialist · Lahore, Pakistan · Working worldwide</p>
        </div>
        <div className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute right-4 top-4 h-64 w-64 rounded-full bg-orange/90 blur-[1px] md:h-80 md:w-80" />
          <div className="relative w-full max-w-lg rotate-[-3deg] rounded-[2rem] border border-black/10 bg-white p-4 shadow-2xl shadow-black/10">
            <div className="flex items-center gap-2 border-b border-black/10 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-orange"/><span className="h-2.5 w-2.5 rounded-full bg-black/15"/><span className="h-2.5 w-2.5 rounded-full bg-black/15"/><span className="ml-auto text-xs text-black/40">AI visibility workspace</span></div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[.16em] text-orange">Search presence overview</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Make your expertise easier to find.</h2>
              <div className="mt-7 space-y-3">{["Clear business entities","Helpful answer-first content","Consistent structured information"].map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl bg-cream p-4"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange text-sm font-bold text-white">0{index+1}</span><span className="text-sm font-semibold">{item}</span></div>)}</div>
            </div>
          </div>
          <div className="absolute -bottom-2 -left-2 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl"><p className="text-xs text-black/45">The focus</p><p className="font-bold">Clarity over claims.</p></div>
        </div>
      </section>
    </main>
  );
}
