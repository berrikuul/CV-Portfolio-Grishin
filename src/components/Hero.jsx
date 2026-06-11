import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>
        Артемий Гришин
        <br />
        Python & React Developer
      </h1>

      <p>
        Разрабатываю веб-приложения, backend-сервисы,
        AI-инструменты и коммерческие проекты.
      </p>

      <div className="hero-buttons">
        <a
          href="/portfolio"
          className="primary-btn"
        >
          Портфолио
        </a>

        <a
          href="/about"
          className="secondary-btn"
        >
          Резюме
        </a>
      </div>

      <div className="stats">

        <div className="stat-card">
          <h3>1+</h3>
          <p>Год опыта</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>Опубликованных проекта</p>
        </div>

        <div className="stat-card">
          <h3>2</h3>
          <p>Победы на хакатонах</p>
        </div>

        <div className="stat-card">
          <h3>10+</h3>
          <p>Технологий в стеке</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;    