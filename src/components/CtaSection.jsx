function CtaSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-primary-container p-8 text-center sm:p-10 md:p-14">
        <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-white/5"></div>
        <div className="absolute -mb-16 -ml-16 bottom-0 left-0 h-32 w-32 rounded-full bg-white/5"></div>

        <h2 className="mb-4 font-headline text-2xl font-bold tracking-tight text-on-primary-container sm:text-3xl md:text-4xl">
          Ready to begin your journey?
        </h2>
        <p className="mx-auto mb-7 max-w-2xl text-sm text-primary-fixed opacity-90 sm:text-base md:text-lg">
          Schedule a comprehensive evaluation with our specialists and discover
          the personalized care path that is right for you.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-surface-container-lowest px-10 py-4 text-lg font-bold text-primary transition-all hover:shadow-lg active:scale-95">
            Schedule Your Consultation
          </button>
          <button className="rounded-xl border border-primary-container bg-primary px-10 py-4 text-lg font-bold text-on-primary transition-all hover:bg-primary-container active:scale-95">
            Speak with an Advocate
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
