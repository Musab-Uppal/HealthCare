function AppointmentSection() {
  return (
    <section id="services" className="bg-surface px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="sticky top-32 lg:col-span-5">
          <h2 className="mb-5 font-headline text-3xl font-extrabold text-primary md:text-4xl">
            Begin Your Journey to Wellness
          </h2>
          <p className="mb-8 text-base leading-relaxed text-on-surface-variant md:text-lg">
            Fill out our secure appointment request form. Our patient
            coordination team will contact you within 4 business hours to
            finalize your visit.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="mb-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  Direct Line
                </p>
                <p className="font-headline font-bold text-on-surface">
                  +1 (800) SANCTUARY
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-outline-variant/10 bg-surface-container-lowest p-4 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-primary">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="mb-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  Clinic Hours
                </p>
                <p className="font-headline font-bold text-on-surface">
                  Mon - Sat: 07:00 - 20:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="appointment-form" className="lg:col-span-7">
          <div className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container-lowest p-7 shadow-2xl md:p-10">
            <h3 className="mb-7 font-headline text-xl font-bold text-on-surface md:text-2xl">
              Request an Appointment
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    className="w-full border-0 border-b-2 border-outline-variant/30 bg-surface-container-lowest px-1 py-3 text-on-surface placeholder:text-outline-variant transition-colors focus:border-primary focus:ring-0"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="w-full border-0 border-b-2 border-outline-variant/30 bg-surface-container-lowest px-1 py-3 text-on-surface placeholder:text-outline-variant transition-colors focus:border-primary focus:ring-0"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    className="w-full border-0 border-b-2 border-outline-variant/30 bg-surface-container-lowest px-1 py-3 text-on-surface placeholder:text-outline-variant transition-colors focus:border-primary focus:ring-0"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      className="w-full cursor-pointer border-0 border-b-2 border-outline-variant/30 bg-surface-container-lowest px-1 py-3 text-on-surface transition-colors focus:border-primary focus:ring-0"
                      type="date"
                    />
                    <span className="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-outline-variant">
                      calendar_today
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="ml-1 text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  Reason for Visit (Optional)
                </label>
                <textarea
                  className="w-full resize-none border-0 border-b-2 border-outline-variant/30 bg-surface-container-lowest px-1 py-3 text-on-surface placeholder:text-outline-variant transition-colors focus:border-primary focus:ring-0"
                  placeholder="Briefly describe your concern..."
                  rows="3"
                />
              </div>

              <div className="pt-4">
                <button
                  className="w-full rounded-xl bg-primary py-4 font-headline text-lg font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary-container active:scale-[0.98]"
                  type="submit"
                >
                  Submit Request
                </button>
                <p className="mt-4 text-center text-[10px] font-label uppercase tracking-tighter text-on-surface-variant">
                  <span
                    className="material-symbols-outlined mr-1 align-middle text-[12px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                  Your data is protected by bank-level encryption and HIPAA
                  protocols
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppointmentSection;
