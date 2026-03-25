function CaseStudySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
      <div className="flex flex-col overflow-hidden rounded-[3rem] bg-white shadow-xl lg:flex-row">
        <div className="relative h-[420px] lg:h-auto lg:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuARDdPB8W9uc4nsRiXPuzFe3Wsq4mbUelUl4u9tKoIwDe6RglCNauNH6FzI0V4v0aZ6x_NVNYQyWUzG_x0mDrHTiJsMdu5Ax7Yg7QJbG1f6nmgjU911zwt73eti-6t8z3YzQ4zEWZLOKrqc57vL46dYCEs7YJfFCdUx7OW5w95fLOGN5MQaM7jwzVLqN62nLra0CQZj17A77KX2SW1vF4xYyl_fHmMfUElaTegE3yTEwLP4nlIW252mheZiLkA30HTG9OJtpKMo6cRJ"
            alt="Medical professional reviewing an X-ray"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 text-white">
            <span className="mb-4 inline-block rounded-full bg-tertiary px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Case Study #482
            </span>
            <h3 className="font-headline text-2xl font-bold md:text-3xl">
              Complex Spinal Realignment
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-7 p-10 lg:w-1/2 lg:p-14">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
            The Journey of David Miller
          </h2>
          <div className="space-y-6 leading-relaxed text-on-surface-variant">
            <p>
              After years of chronic back pain that limited his mobility to less
              than 15 minutes of standing, David Miller came to Clinical
              Sanctuary seeking a definitive solution.
            </p>
            <div className="grid grid-cols-2 gap-8 border-y border-outline-variant/20 py-8">
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Diagnosis
                </p>
                <p className="font-semibold text-on-surface">L4-L5 Stenosis</p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Treatment
                </p>
                <p className="font-semibold text-on-surface">
                  Minimally Invasive ALIF
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Duration
                </p>
                <p className="font-semibold text-on-surface">
                  6 Months Recovery
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Outcome
                </p>
                <p className="font-semibold text-on-surface">
                  100% Mobility Restored
                </p>
              </div>
            </div>
            <p className="italic">
              I never thought I would hike with my kids again. Clinical
              Sanctuary gave me my life back.
            </p>
          </div>

          <button className="flex items-center gap-2 font-bold text-primary transition-all hover:gap-4 active:scale-95">
            Read the full recovery journal
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
