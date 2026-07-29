import Link from "next/link";

export const metadata = {
  title: "INSA Summer Camp DA — Questions",
  description: "A collaborative Q&A board for students during the INSA Summer Camp.",
};

export default function QuestionsPage() {
  return (
    <main className="page-wrapper">
      <nav className="navbar" id="main-navbar">
        <Link href="/" className="navbar__brand">
          <div className="navbar__logo">DA</div>
          <div className="navbar__brand-text">
            <span className="navbar__brand-title">INSA Summer Camp</span>
            <span className="navbar__brand-sub">Daily Activity Blog</span>
          </div>
        </Link>

        <ul className="navbar__nav">
          <li>
            <Link href="/" className="navbar__nav-link">
              <i className="fa-solid fa-newspaper" /> Feed
            </Link>
          </li>
          <li>
            <Link href="/questions" className="navbar__nav-link active">
              <i className="fa-solid fa-circle-question" /> Questions
            </Link>
          </li>
          <li>
            <Link href="/profile" className="navbar__nav-link">
              <i className="fa-solid fa-user-circle" /> Profile
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          <div className="navbar__search">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search questions…" />
          </div>
          <button className="icon-btn" title="Notifications" type="button">
            <i className="fa-solid fa-bell" />
            <span className="badge">3</span>
          </button>
          <Link href="/profile" className="navbar__avatar">
            <div className="avatar avatar--sm">
              <div className="avatar__initials">AK</div>
              <span className="online-dot" />
            </div>
            <span className="navbar__avatar-name">Ayitegeb</span>
          </Link>
        </div>
      </nav>

      <div className="questions-layout">
        <section>
          <div className="questions-header">
            <h1 className="questions-header__title">Q&amp;A Board</h1>
            <button className="btn btn--primary" type="button">
              <i className="fa-solid fa-plus" /> Ask a Question
            </button>
          </div>

          <div className="ask-question-card">
            <h3>Need help with a concept or project?</h3>
            <input className="form-input" type="text" placeholder="What would you like to ask?" />
            <textarea
              className="comment-input"
              placeholder="Add context so trainers and peers can help you better..."
            />
            <button className="btn btn--ghost" type="button">
              <i className="fa-solid fa-paper-plane" /> Preview
            </button>
          </div>

          <article className="question-card">
            <div className="question-card__votes">
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-up" />
              </button>
              <div className="vote-count">18</div>
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-down" />
              </button>
            </div>
            <div className="question-card__body">
              <div className="question-card__title">
                How can I make my CSS layout responsive without breaking the design?
              </div>
              <div className="question-card__excerpt">
                I&apos;m trying to keep the spacing and alignment looking polished on both mobile and desktop screens.
              </div>
              <div className="question-card__footer">
                <div className="tags">
                  <span className="tag tag--primary">CSS</span>
                  <span className="tag tag--accent">Responsive design</span>
                </div>
                <div className="question-card__meta">
                  <span>
                    <i className="fa-solid fa-comment" /> 5 answers
                  </span>
                  <span>
                    <i className="fa-solid fa-clock" /> 20 min ago
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="question-card">
            <div className="question-card__votes">
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-up" />
              </button>
              <div className="vote-count">12</div>
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-down" />
              </button>
            </div>
            <div className="question-card__body">
              <div className="question-card__title">
                What is the difference between a list and a table in HTML?
              </div>
              <div className="question-card__excerpt">
                I want to ensure I&apos;m using the right structure for content that should be read or grouped by meaning.
              </div>
              <div className="question-card__footer">
                <div className="tags">
                  <span className="tag tag--info">HTML</span>
                  <span className="tag tag--success">Semantics</span>
                </div>
                <div className="question-card__meta">
                  <span>
                    <i className="fa-solid fa-comment" /> 3 answers
                  </span>
                  <span>
                    <i className="fa-solid fa-clock" /> 45 min ago
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="question-card">
            <div className="question-card__votes">
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-up" />
              </button>
              <div className="vote-count">7</div>
              <button className="vote-btn" type="button">
                <i className="fa-solid fa-caret-down" />
              </button>
            </div>
            <div className="question-card__body">
              <div className="question-card__title">
                Is it better to practice with a small project or with daily exercises?
              </div>
              <div className="question-card__excerpt">
                I&apos;m trying to improve without losing motivation, and I want advice from people who have been there.
              </div>
              <div className="question-card__footer">
                <div className="tags">
                  <span className="tag tag--accent">Learning</span>
                  <span className="tag tag--primary">Study habits</span>
                </div>
                <div className="question-card__meta">
                  <span>
                    <i className="fa-solid fa-comment" /> 7 answers
                  </span>
                  <span>
                    <i className="fa-solid fa-clock" /> 1 hr ago
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>

        <aside className="sidebar-right">
          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-filter" /> Filters
              </span>
            </div>
            <div className="tags-cloud">
              <span className="tag tag--primary">Unanswered</span>
              <span className="tag tag--accent">Most voted</span>
              <span className="tag tag--info">Recent</span>
              <span className="tag tag--success">Trainer answers</span>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-trophy" /> Helpful community
              </span>
            </div>
            <div className="people-list">
              <div className="person-item">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                    MT
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Miss Eman</div>
                  <div className="person-item__role">Answered 12 questions</div>
                </div>
              </div>
              <div className="person-item">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                    RY
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Fuad</div>
                  <div className="person-item__role">Top contributor</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
