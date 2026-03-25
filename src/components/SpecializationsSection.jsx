function SpecializationsSection() {
  return (
    <section
      id="specializations"
      className="bg-surface-container-low px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 font-headline text-2xl font-extrabold text-on-surface md:text-3xl">
              Our Specializations
            </h2>
            <p className="max-w-md text-sm text-on-surface-variant md:text-base">
              Comprehensive medical solutions delivered by leading experts using
              cutting-edge diagnostic technology.
            </p>
          </div>
          <button className="flex items-center gap-1 font-headline font-bold text-primary transition-all hover:gap-2 active:scale-95">
            View all services{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-4">
          <div className="group flex cursor-pointer flex-col justify-between rounded-[2rem] border border-outline-variant/5 bg-surface-container-lowest p-6 transition-all hover:shadow-xl sm:p-8 md:col-span-2 md:row-span-2">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed text-on-primary-fixed transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">
                  stethoscope
                </span>
              </div>
              <h3 className="mb-3 font-headline text-xl font-bold text-on-surface">
                General Medicine
              </h3>
              <p className="mb-6 text-sm text-on-surface-variant md:text-base">
                Personalized primary care focused on preventative health and
                long-term wellness strategies for all life stages.
              </p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-lg text-primary">
                  check_circle
                </span>
                Annual Screenings
              </li>
              <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-lg text-primary">
                  check_circle
                </span>
                Chronic Disease Management
              </li>
            </ul>
          </div>

          <div className="group rounded-[2rem] border border-outline-variant/5 bg-white p-6 transition-colors hover:bg-primary sm:p-7">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
              <span className="material-symbols-outlined">child_care</span>
            </div>
            <h3 className="mb-2 font-headline text-lg font-bold text-on-surface group-hover:text-white">
              Pediatrics
            </h3>
            <p className="text-sm text-on-surface-variant group-hover:text-white/80">
              Caring and gentle medical attention for our youngest patients.
            </p>
          </div>

          <div className="group rounded-[2rem] border border-outline-variant/5 bg-white p-6 transition-colors hover:bg-primary sm:p-7">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container text-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
              <span className="material-symbols-outlined">neurology</span>
            </div>
            <h3 className="mb-2 font-headline text-lg font-bold text-on-surface group-hover:text-white">
              Neurology
            </h3>
            <p className="text-sm text-on-surface-variant group-hover:text-white/80">
              Advanced neurological care for brain and spinal health.
            </p>
          </div>

          <div className="flex items-center gap-5 rounded-[2rem] border border-outline-variant/5 bg-surface-container-highest p-6 sm:p-7 md:col-span-2">
            <div className="hidden h-32 w-32 shrink-0 overflow-hidden rounded-2xl sm:block">
              <img
                alt="Laboratory"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOjon4F1mNC6SQD8nCqHVBvDTJfZNfGJnSkiVHUL-t1yY7QP7PUuqE-woTnxY0_x5VE3H0Iic78czFTo9T9hn7qPp9JWm06szuraVvgYH6YY2M4wMJjUFibg2S3e3DmC9DcHLQQKxX3sZb2vxDRcjK4MDUwfc8f-eT2Xemug6vc-Pw2L3deT0p5ps2lAZOg_4BwGKZMe384CaV3gxLB2peh7QZpj-B_qSeo1ipjLaWFmCZCYxFcQ2iCcgjQGEJpclLqDtCYJBjUKAV"
              />
            </div>
            <div>
              <h3 className="mb-2 font-headline text-lg font-bold text-on-surface">
                Specialized Care
              </h3>
              <p className="mb-4 text-sm text-on-surface-variant">
                Access to rare diagnostics and unique treatment protocols for
                complex conditions.
              </p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-transform active:scale-95">
                Explore Specialties{" "}
                <span className="material-symbols-outlined text-sm">
                  north_east
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecializationsSection;
