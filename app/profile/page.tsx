import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "INSA Summer Camp DA — Profile",
  description: "Student profile and progress page for INSA Summer Camp.",
};

export default function ProfilePage() {
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
            <Link href="/questions" className="navbar__nav-link">
              <i className="fa-solid fa-circle-question" /> Questions
            </Link>
          </li>
          <li>
            <Link href="/profile" className="navbar__nav-link active">
              <i className="fa-solid fa-user-circle" /> Profile
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          <div className="navbar__search">
            <i className="fa-solid fa-magnifying-glass" />
            <input type="text" placeholder="Search posts…" />
          </div>
          <button className="icon-btn" title="Notifications" type="button">
            <i className="fa-solid fa-bell" />
            <span className="badge">2</span>
          </button>
          <Link href="/profile" className="navbar__avatar">
            <div className="avatar avatar--sm">
              <div className="avatar__initials">AK</div>
              <span className="online-dot" />
            </div>
            <span className="navbar__avatar-name">Abebe K.</span>
          </Link>
        </div>
      </nav>

      <div className="profile-layout">
        <section className="profile-hero">
          <Image
            className="profile-hero__cover"
            src="/assets/images/profile_cover.png"
            alt="Summer camp community backdrop"
            width={1200}
            height={220}
          />
          <div className="profile-hero__body">
            <div className="profile-hero__avatar-row">
              <div className="profile-hero__avatar">
                <div className="avatar__initials">AK</div>
              </div>
              <div className="profile-hero__meta">
                <h1 className="profile-hero__name">
                  Abebe Kebede
                  <span className="role-badge role-badge--student">
                    <i className="fa-solid fa-graduation-cap" /> Student
                  </span>
                </h1>
                <div className="profile-hero__username">@abebe.k · Software Engineering Track</div>
                <p className="profile-hero__bio">
                  Building confidence in web foundations and learning how to express ideas clearly through code and design.
                </p>
                <div className="badges-row">
                  <span className="achievement-badge achievement-badge--gold">
                    <i className="fa-solid fa-star" /> Daily streak 6
                  </span>
                  <span className="achievement-badge achievement-badge--primary">
                    <i className="fa-solid fa-lightbulb" /> Curious learner
                  </span>
                  <span className="achievement-badge achievement-badge--success">
                    <i className="fa-solid fa-comments" /> Helpful contributor
                  </span>
                </div>
                <div className="profile-hero__actions">
                  <button className="btn btn--primary" type="button">
                    <i className="fa-solid fa-plus" /> New Post
                  </button>
                  <button className="btn btn--ghost" type="button">
                    <i className="fa-solid fa-envelope" /> Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-stats">
          <div className="profile-stat-card">
            <div className="profile-stat-card__icon profile-stat-card__icon--primary">
              <i className="fa-solid fa-file-lines" />
            </div>
            <div className="profile-stat-card__value">7</div>
            <div className="profile-stat-card__label">Posts</div>
          </div>
          <div className="profile-stat-card">
            <div className="profile-stat-card__icon profile-stat-card__icon--accent">
              <i className="fa-solid fa-thumbs-up" />
            </div>
            <div className="profile-stat-card__value">128</div>
            <div className="profile-stat-card__label">Likes received</div>
          </div>
          <div className="profile-stat-card">
            <div className="profile-stat-card__icon profile-stat-card__icon--success">
              <i className="fa-solid fa-calendar-check" />
            </div>
            <div className="profile-stat-card__value">12</div>
            <div className="profile-stat-card__label">Days active</div>
          </div>
          <div className="profile-stat-card">
            <div className="profile-stat-card__icon profile-stat-card__icon--warning">
              <i className="fa-solid fa-bookmark" />
            </div>
            <div className="profile-stat-card__value">4</div>
            <div className="profile-stat-card__label">Bookmarks</div>
          </div>
        </section>

        <div className="profile-tabs">
          <button className="profile-tab active" type="button">
            <i className="fa-solid fa-file-lines" /> My Posts
          </button>
          <button className="profile-tab" type="button">
            <i className="fa-solid fa-bookmark" /> Bookmarks
          </button>
          <button className="profile-tab" type="button">
            <i className="fa-solid fa-circle-info" /> About
          </button>
        </div>

        <div className="profile-posts-grid">
          <article className="card profile-post-card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-file-lines" /> My latest post
              </span>
            </div>
            <h3 className="post-card__title">Understanding HTML structure and semantic tags</h3>
            <p className="post-card__excerpt">
              A reflection on how structure and readability help both users and developers navigate content with confidence.
            </p>
            <div className="tags">
              <span className="tag tag--primary">HTML</span>
              <span className="tag tag--accent">Web Foundations</span>
            </div>
            <div className="post-card__reactions">
              <button className="reaction-btn reaction-btn--like active--like" type="button">
                <i className="fa-solid fa-thumbs-up" />
                <span>18</span>
              </button>
              <button className="reaction-btn reaction-btn--comment" type="button">
                <i className="fa-solid fa-comment" />
                <span>4</span>
              </button>
            </div>
          </article>

          <article className="card profile-post-card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-file-lines" /> Shared insight
              </span>
            </div>
            <h3 className="post-card__title">Why CSS layout feels easier when you think in boxes</h3>
            <p className="post-card__excerpt">
              I&apos;m learning how spacing, flow, and hierarchy turn a rough page into something polished and readable.
            </p>
            <div className="tags">
              <span className="tag tag--info">CSS</span>
              <span className="tag tag--success">Design</span>
            </div>
            <div className="post-card__reactions">
              <button className="reaction-btn reaction-btn--like active--like" type="button">
                <i className="fa-solid fa-thumbs-up" />
                <span>12</span>
              </button>
              <button className="reaction-btn reaction-btn--comment" type="button">
                <i className="fa-solid fa-comment" />
                <span>2</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
