function HeroSection() {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden px-4 sm:min-h-[760px] sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="z-10 py-8 lg:col-span-7">
          <span className="mb-6 inline-block rounded-full bg-secondary-container px-3 py-1 font-label text-[10px] uppercase tracking-widest text-on-secondary-container">
            World Class Medical Excellence
          </span>
          <h1 className="mb-5 font-headline text-3xl font-extrabold leading-[1.1] tracking-tight text-primary sm:text-4xl md:text-6xl">
            Precision care, <br />
            <span className="font-light italic text-on-surface-variant">
              Sanctuary comfort.
            </span>
          </h1>
          <p className="mb-7 max-w-xl text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-lg">
            Experience a healthcare environment designed to heal. We combine
            clinical rigor with an atmosphere of profound tranquility.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-primary px-6 py-3 font-headline text-sm font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:shadow-xl active:scale-95 sm:px-7 sm:py-3.5">
              Book Appointment
            </button>
            <button className="flex items-center gap-2 rounded-xl px-6 py-3 font-headline text-sm font-bold text-primary transition-all hover:bg-surface-container-low active:scale-95 sm:px-7 sm:py-3.5">
              <span className="material-symbols-outlined">play_circle</span>
              View Our Approach
            </button>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="aspect-[4/5] rotate-1 overflow-hidden rounded-[2rem] shadow-2xl transition-transform duration-700 hover:rotate-0">
            <img
              alt="Modern Clinic Interior"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ1uUGrSMI-v1ahfVnDXAomcVPfEkIw370TymM_bRQJH2fQonjzsokyv_P4-RmvIcy8ipzXc_pjblfqPxLwcY9PQyfpmsK9xaQGR2IlpAOyGfcye52sYIA_qavaXCXIV-MyEQ3s3DmGcbqZLuSZUG6PCbpBRkW3NiHlpvKZyzDF6J4W8C9SsOjq8DGjQt8xkwgTNmtX5C50vqpnf3l73ceUCTyKnwqEzft2VLXk6zi5BwLYC9_qSh3kqo6sP5wfhrCy5wwIIeTKgM5"
            />
          </div>
          <div className="absolute -bottom-4 -left-2 max-w-[200px] rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-xl sm:-bottom-5 sm:-left-8 sm:max-w-[220px] sm:p-5">
            <div className="mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary">
                verified_user
              </span>
              <span className="font-headline text-sm font-bold text-on-surface sm:text-base">
                99% Success Rate
              </span>
            </div>
            <p className="text-xs leading-tight text-on-surface-variant">
              Patient satisfaction scores across all surgical and clinical
              departments in 2023.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
