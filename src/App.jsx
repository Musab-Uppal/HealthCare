import { useEffect } from "react";
import "./App.css";

const mistVideoPrimary =
  "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4";
const mistVideoSecondary =
  "https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4";
const fakharBottleImage =
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80";

const ingredients = [
  {
    name: "Bergamot Peel",
    detail:
      "Cold-pressed Calabrian bergamot lifts the opening with a bright, polished citrus edge.",
    image:
      "https://images.unsplash.com/photo-1605217613423-0ff0f7b2f261?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Damask Rose",
    detail:
      "Hand-harvested petals create a soft floral haze that blends with the mist accord.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cedarwood",
    detail:
      "A dry cedarwood base adds depth, giving Fakhar a confident and clean finish.",
    image:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "White Musk",
    detail:
      "Refined white musk wraps the entire scent in smooth warmth that lingers for hours.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80",
  },
];

const testimonials = [
  {
    name: "Hadi M.",
    city: "Dubai",
    quote:
      "Fakhar opens clean, then turns warm and addictive. I wore it to dinner and everyone asked what I was wearing.",
  },
  {
    name: "Sana R.",
    city: "Lahore",
    quote:
      "Luxury feel without the heavy price tag. On my skin it lasts all evening and still feels elegant.",
  },
  {
    name: "Yusuf K.",
    city: "Riyadh",
    quote:
      "The misty amber dry-down is the standout. It smells expensive, smooth, and perfectly balanced.",
  },
];

function App() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const fixedHeaderOffset = 82;
    const top =
      target.getBoundingClientRect().top + window.scrollY - fixedHeaderOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    if (window.location.hash !== `#${targetId}`) {
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  return (
    <div className="fakhar-site">
      <header className="site-header">
        <div className="brand">FAKHAR</div>
        <nav className="site-nav" aria-label="Main navigation">
          <a
            href="#collection"
            onClick={(event) => scrollToSection(event, "collection")}
          >
            Collection
          </a>
          <a
            href="#signature"
            onClick={(event) => scrollToSection(event, "signature")}
          >
            Signature
          </a>
          <a
            href="#ingredients"
            onClick={(event) => scrollToSection(event, "ingredients")}
          >
            Ingredients
          </a>
          <a
            href="#testimonials"
            onClick={(event) => scrollToSection(event, "testimonials")}
          >
            Reviews
          </a>
          <a
            href="#purchase"
            onClick={(event) => scrollToSection(event, "purchase")}
          >
            Purchase
          </a>
        </nav>
        <a
          className="header-price"
          href="#purchase"
          onClick={(event) => scrollToSection(event, "purchase")}
          aria-label="Buy Fakhar for 70 dollars"
        >
          $70
        </a>
      </header>

      <main>
        <section className="hero section" id="collection">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="mist-video mist-video-main"
            src={mistVideoPrimary}
          />
          <div className="overlay" />
          <div className="section-content hero-content">
            <p className="label">Eau de Parfum</p>
            <h1>Fakhar</h1>
            <p className="hero-text">
              A velvet trail of bergamot, white musk, and amber woods designed
              for nights that stay unforgettable.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-gold"
                href="#purchase"
                onClick={(event) => scrollToSection(event, "purchase")}
              >
                Buy Now - $70
              </a>
              <a
                className="btn btn-clear"
                href="#signature"
                onClick={(event) => scrollToSection(event, "signature")}
              >
                Explore Notes
              </a>
            </div>
          </div>
        </section>

        <section className="showcase section" id="signature">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="mist-video mist-video-soft"
            src={mistVideoSecondary}
          />
          <div className="section-content showcase-grid">
            <div
              className="copy-block reveal"
              style={{ "--stagger-delay": "60ms" }}
            >
              <p className="label">Signature Blend</p>
              <h2>Elegant. Confident. Magnetic.</h2>
              <p>
                Fakhar opens with a polished citrus spark, deepens into floral
                smoke, then settles into warm, misty amber.
              </p>
              <ul className="notes-list" aria-label="Fragrance notes">
                <li>Top: Bergamot, Green Apple</li>
                <li>Heart: Jasmine, Rose Mist</li>
                <li>Base: Musk, Amber, Cedarwood</li>
              </ul>
            </div>

            <article
              className="product-card reveal"
              style={{ "--stagger-delay": "140ms" }}
              aria-label="Fakhar product card"
            >
              <div className="bottle-glow" />
              <img src={fakharBottleImage} alt="Fakhar perfume bottle" />
              <h3>Fakhar Eau de Parfum</h3>
              <p>100ml luxury edition with long-lasting projection.</p>
              <div className="price-row">
                <span className="price">$70</span>
                <a
                  className="btn btn-gold"
                  href="#purchase"
                  onClick={(event) => scrollToSection(event, "purchase")}
                >
                  Add to Cart
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="ingredients section" id="ingredients">
          <div className="section-content">
            <p className="label">Real Ingredients</p>
            <h2>The Composition Behind Fakhar</h2>
            <p className="ingredients-intro">
              Every note is selected to feel refined in the opening, rich at the
              center, and smooth in the lasting dry-down.
            </p>
            <div className="ingredient-grid">
              {ingredients.map((ingredient, index) => (
                <article
                  className="ingredient-card reveal"
                  style={{ "--stagger-delay": `${index * 90}ms` }}
                  key={ingredient.name}
                >
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    loading="lazy"
                  />
                  <div className="ingredient-copy">
                    <h3>{ingredient.name}</h3>
                    <p>{ingredient.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section" id="testimonials">
          <div className="section-content">
            <p className="label">Testimonials</p>
            <h2>What People Say After Wearing Fakhar</h2>
            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article
                  className="testimonial-card reveal"
                  style={{ "--stagger-delay": `${index * 110}ms` }}
                  key={testimonial.name}
                >
                  <p className="quote">"{testimonial.quote}"</p>
                  <p className="reviewer">
                    {testimonial.name} <span>{testimonial.city}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="purchase section" id="purchase">
          <div className="section-content purchase-panel">
            <p className="label">Limited Drop</p>
            <h2>Own The Scent Everyone Remembers</h2>
            <p>
              Fakhar is priced at <strong>$70</strong>. Delivery starts within
              24 hours.
            </p>
            <a
              className="btn btn-gold big"
              href="#collection"
              onClick={(event) => scrollToSection(event, "collection")}
            >
              Confirm Purchase - $70
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
