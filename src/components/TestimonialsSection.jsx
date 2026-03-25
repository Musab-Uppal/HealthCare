function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-surface-container-low px-4 py-20 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Patient Testimonials
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-extrabold leading-tight tracking-tighter text-on-surface">
              Patient Stories:{" "}
              <span className="text-primary">Journeys to Wellness</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
              Discover how our clinical precision and compassionate care have
              transformed lives through recovery, resilience, and renewed
              vitality.
            </p>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZy4SptbOvvE-jo4IUJi3uAd1orl9OQFPGtumEmt0OHyZwB2h16bDa8Jfbvk7G9k8mJI4c4mjzi-egbXZW4CeyEuyi5gGqlVEvCtQUkaJ070XPxQ3DU_5LCv48Qi7FOWn50ShjPF1IhZS5OVVV3XwJuW4e-7FakgZPCmx99bwbPvGjsNaaa6kXPLj-1tOJ14D8NqOAjw1gwFQIUfjJDXgJxy5qC6Fjwdv0d79fnS93UPBiBz2-nMhbP7YgvD2Hgs4D9UXYqzyer9s6"
                alt="Modern clinical research facility"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 z-20 flex items-center gap-4 rounded-2xl bg-surface-container-lowest p-5 shadow-xl">
              <div className="flex -space-x-3">
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-200"></div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-300"></div>
                <div className="h-10 w-10 rounded-full border-2 border-white bg-slate-400"></div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-primary">500+ Patients</p>
                <p className="text-on-surface-variant">
                  Restored to full health
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 flex items-end justify-between">
          <div className="space-y-2">
            <h3 className="font-headline text-2xl font-bold tracking-tight text-on-surface md:text-3xl">
              Verified Experiences
            </h3>
            <p className="text-on-surface-variant">
              Hear directly from those who entrusted us with their health.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button className="rounded-full bg-surface-container-lowest p-3 text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary active:scale-95">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="rounded-full bg-surface-container-lowest p-3 text-primary shadow-sm transition-all hover:bg-primary hover:text-on-primary active:scale-95">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="mb-6 flex gap-1 text-tertiary-container">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="mb-7 text-xl italic leading-relaxed text-on-surface">
              The level of clinical expertise at Clinical Sanctuary is
              unmatched. They looked at my entire lifestyle and provided a path
              to recovery that actually worked.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMuA84KU8R6j-Tpi33kaZBmdytdQEpCiB-hCEfMX0ni0m6oazXI-2ChVfDzHIFfA6hG6z0zj_DbNiplXPPF-quuhzgwZhFiK4abY0xLi3xYYb5Uq4Le5_mW21b5LuPbDuz36FZp4v60Q9B_pBnZRR8wGpTo0wq3OhmC5QVFZqxDLtsoUBIlzUreGicfwFSyIVignnk-Sh8s7gazOOnT8BwxQyTb9N5lRUrqsoLfREdnzkqbDGvp8Qf1VjfeL1o5L7sXQ6V8ke5WP7"
                alt="Dr. Robert Chen"
              />
              <div>
                <h4 className="font-bold text-on-surface">Dr. Robert Chen</h4>
                <p className="text-sm text-on-surface-variant">
                  Cardiac Recovery Patient
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] bg-primary p-7 text-on-primary shadow-sm">
            <span className="material-symbols-outlined text-4xl opacity-50">
              format_quote
            </span>
            <p className="mb-7 text-base leading-relaxed md:text-lg">
              Finally, a medical facility that feels like a sanctuary. The
              atmosphere reduced my anxiety significantly before surgery.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full border-2 border-primary-container object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOWbxm6Tprb60J5JRQTBXj0WTwNjy_pfgoQp8czy-mI4SBLofG_qyQGflX2_6_f1I6F-1zjuWEc_X3qGGZKZtK7P5FX9c3q6pp0vVv2mVMBLWvBpGNTZQ5M5a5bbPNv1WQTX3cXVJZXsscBISpQFY1597Pdq5t7JFmf0KF0__2J8kwEw659__jfNjmRMcjHiW5V1GyRAUS9sfp_cE3W1FRGz2LRfbHdW0_-eUOrNc7BMePLkYC8ZL4D6DZjTPv_xOk0SJJPWWzc8Ak"
                alt="Sarah Jenkins"
              />
              <div>
                <h4 className="font-bold">Sarah Jenkins</h4>
                <p className="text-xs opacity-80">
                  Orthopedic Specialist Patient
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-7 shadow-sm">
            <div className="mb-4 flex gap-1 text-tertiary-container">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="mb-6 leading-relaxed text-on-surface-variant">
              Their patient portal made tracking my lab results easy.
              Communication was clear every step of the way.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsF_AV-8UhpyiITwQ1zfb9z5RiG-sh7XgcLxxj5yyDVbbDPfZ20KDSvoOKzuRtiNG4RZgPiP4-F0xubKmnVgpf4m-ivtmDvjh5EzWmELaMJr4NEPz8DIXRdVob4LmDZkXsK1Jl5CqHKoRoJ-15Pm6PxbJes040rwf_W-IQW5AFgo7WEE17edZBJMrOKP7qj7Di-LB_ObIKnPv4JQdwreB7zREjfdd7c4oJNWQeYJr66swX1itpXXHZ6OV7uxkpnfyg2H83CJTifSaJ"
                alt="Michael Vance"
              />
              <div>
                <h4 className="font-bold text-on-surface">Michael Vance</h4>
                <p className="text-xs text-on-surface-variant">
                  General Wellness Patient
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col items-center gap-6 rounded-[2rem] border border-outline-variant/10 bg-surface-container-lowest p-7 shadow-sm md:flex-row">
            <div className="aspect-square w-full overflow-hidden rounded-2xl md:w-1/3">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTFPX2_hp109Iw8vOETolbd4HIcOWTnUjQZ87pppWWZuT6Orh__0Rz_mY9c4moQrITUCZXMQMatiz_2W8wz6TVUxYl8XB88MbDzwK57j6tmDuBG9-2ezB3aplYrez5j5JXulIkhlF8AdrBLCx2E6qte9YJZ0lxCRxAwS4z0fFIYWAEujXmliXDRcZi0Zwox_1NZXMZxfcHHEipbU5XuSuIJcXDJPSgowb0KTKB8PGXOuHanip5Kd2_sVgEOGXpj-Hb5TCPf1lvVz2a"
                alt="Elena Rodriguez"
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="mb-4 flex gap-1 text-tertiary-container">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <p className="mb-4 text-lg leading-snug text-on-surface md:text-xl">
                The post-operative care team was incredible. They were available
                around the clock and made sure my pain management was perfect.
              </p>
              <h4 className="font-bold text-on-surface">Elena Rodriguez</h4>
              <p className="text-sm text-on-surface-variant">
                Post-Op Recovery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
