function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-900/80 dark:shadow-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <div className="font-headline text-xl font-bold tracking-tighter text-blue-900 dark:text-blue-100 sm:text-2xl">
          Clinical Sanctuary
        </div>

        <div className="hidden items-center gap-6 font-headline font-semibold tracking-tight md:flex">
          <a
            className="text-slate-600 transition-colors duration-300 ease-in-out hover:text-blue-600 dark:text-slate-400"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-slate-600 transition-colors duration-300 ease-in-out hover:text-blue-600 dark:text-slate-400"
            href="#specializations"
          >
            Specialists
          </a>
          <a
            className="border-b-2 border-blue-700 pb-1 text-blue-700 transition-colors duration-300 ease-in-out dark:text-blue-400"
            href="#testimonials"
          >
            Testimonials
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#appointment-form">
            <button className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-on-primary transition-all duration-300 hover:bg-primary-container active:scale-95 sm:px-6 sm:py-2.5">
              Book Appointment
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
