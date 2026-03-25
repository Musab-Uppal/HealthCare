function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:px-10 md:flex-row">
        <div className="flex flex-col gap-2">
          <div className="font-headline text-lg font-bold text-blue-900 dark:text-blue-100">
            Clinical Sanctuary
          </div>
          <p className="font-body text-sm tracking-wide text-slate-500 dark:text-slate-400">
            Copyright {new Date().getFullYear()} Clinical Sanctuary. Excellence
            in Editorial Medicine.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 font-body text-sm tracking-wide">
          <a
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
            href="#"
          >
            HIPAA Compliance
          </a>
          <a
            className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300"
            href="#"
          >
            Contact Support
          </a>
        </div>

        <div className="flex gap-4">
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 transition-all hover:bg-primary hover:text-white">
            <span className="material-symbols-outlined text-xl">language</span>
          </div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 transition-all hover:bg-primary hover:text-white">
            <span className="material-symbols-outlined text-xl">mail</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
