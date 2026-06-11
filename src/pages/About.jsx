import "../styles/about.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <h1>Артемий Гришин</h1>

        <h2>Python Developer & React Developer</h2>

        <div className="contacts">
          <a href="tel:+79227201922">+7 922 720 19 22</a>
          <a href="mailto:timastiy2006@gmail.com">
            ✉ timastiy2006@gmail.com
          </a>
          <a
            href="https://github.com/berrikuul"
            target="_blank"
            rel="noreferrer"
          >
            github.com/berrikuul
          </a>
        </div>
      </section>

      <section className="about-section">
        <h3>О себе</h3>

        <p>
          Студент направления «Программная инженерия»
          университета «Дубна».
        </p>

        <p>
          Специализируюсь на backend-разработке,
          автоматизации процессов и создании
          веб-приложений на React.
        </p>

        <p>
          Работаю с Python, Docker, PostgreSQL,
          Airflow, Telegram Bot API и AI-системами.
        </p>
      </section>

      <section className="about-section">
        <h3>Опыт работы</h3>

        <div className="timeline-card">
          <div className="timeline-header">
            <h4>Votyakov Education</h4>
            <span>2024 — настоящее время</span>
          </div>

          <ul>
            <li>Проверка и ревью Python-проектов и домашних заданий</li>
            <li>Помощь ученикам в освоении Python и backend-разработки</li>
            <li>Улучшение и поддержка учебных материалов</li>
            <li>Проведение технических собеседований</li>
            <li>Работа с платформой GetCourse</li>
            <li>Управление командой кураторов</li>
          </ul>
        </div>
      </section>

      <section className="about-section">
        <h3>Навыки</h3>

        <div className="skills-grid">

          <div className="skill-block">
            <h4>Языки</h4>

            <div className="tags">
              <span>Python</span>
              <span>JavaScript</span>
              <span>Java</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-block">
            <h4>Frontend</h4>

            <div className="tags">
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="skill-block">
            <h4>Backend</h4>

            <div className="tags">
              <span>FastAPI</span>
              <span>Flask</span>
              <span>Docker</span>
              <span>Airflow</span>
              <span>Git</span>
            </div>
          </div>

          <div className="skill-block">
            <h4>Базы данных</h4>

            <div className="tags">
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
          </div>

          <div className="skill-block">
            <h4>AI & Automation</h4>

            <div className="tags">
              <span>Ollama</span>
              <span>LLM Agents</span>
              <span>Playwright</span>
              <span>Browser Automation</span>
            </div>
          </div>

        </div>
      </section>

      <section className="about-section">
        <h3>Образование</h3>

        <div className="timeline-card">
          <div className="timeline-header">
            <h4>Университет «Дубна»</h4>
            <span>2024 — настоящее время</span>
          </div>

          <p>
            Бакалавриат, направление
            «Программная инженерия».
          </p>
        </div>
      </section>

      <section className="about-section">
        <h3>Достижения</h3>

        <div className="achievement-card">
          Победитель хакатона DubnaTech 2025
          <br />
          Кейс: разработка навыка для Яндекс Алисы
          от CloudCom.
        </div>

        <div className="achievement-card">
          2 место на DubnaTech 2025
          <br />
          Разработка системы бронирования
          переговорных комнат с веб-интерфейсом
          и Telegram-ботом.
        </div>
      </section>

      <section className="about-section">
        <h3>Дополнительные проекты</h3>

        <div className="projects-mini">

          <div className="mini-card">
            <h4>LLM Browser Agent</h4>
            <p>Python • Playwright • Ollama</p>
          </div>

          <div className="mini-card">
            <h4>Airflow ETL Pipeline</h4>
            <p>Python • Airflow • PostgreSQL</p>
          </div>

          <div className="mini-card">
            <h4>Telegram Mailing Bot</h4>
            <p>Python • Telegram Bot API</p>
          </div>

          <div className="mini-card">
            <h4>Google Calendar Desktop</h4>
            <p>Java • OAuth 2.0</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;