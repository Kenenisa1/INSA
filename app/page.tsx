import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "INSA Summer Camp DA — Feed",
  description: "Student daily activity feed for the INSA Summer Camp.",
};

export default function Home() {
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
            <Link href="/" className="navbar__nav-link active">
              <i className="fa-solid fa-newspaper" /> Feed
            </Link>
          </li>
          <li>
            <Link href="/questions" className="navbar__nav-link">
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
            <input type="text" id="search-input" placeholder="Search posts…" />
          </div>

          <button className="icon-btn" id="btn-notifications" title="Notifications">
            <i className="fa-solid fa-bell" />
            <span className="badge">4</span>
          </button>

          <button className="icon-btn" id="btn-new-post" title="New Post">
            <i className="fa-solid fa-plus" />
          </button>

          <Link href="/profile" className="navbar__avatar" id="nav-avatar">
            <div className="avatar avatar--sm">
              <div className="avatar__initials">AK</div>
              <span className="online-dot" />
            </div>
            <span className="navbar__avatar-name">Abebe K.</span>
          </Link>
        </div>
      </nav>

      <div className="feed-layout">
        <aside className="sidebar-left" id="sidebar-left">
          <div className="camp-card">
            <div className="camp-card__icon">🏕️</div>
            <div className="camp-card__title">INSA Summer Camp</div>
            <div className="camp-card__subtitle">Software Engineering Track · 2026</div>

            <div className="camp-card__stats">
              <div className="camp-stat">
                <div className="camp-stat__value">30</div>
                <div className="camp-stat__label">Days</div>
              </div>
              <div className="camp-stat">
                <div className="camp-stat__value">40</div>
                <div className="camp-stat__label">Students</div>
              </div>
              <div className="camp-stat">
                <div className="camp-stat__value">3</div>
                <div className="camp-stat__label">Trainers</div>
              </div>
            </div>

            <div className="day-progress">
              <div className="day-progress__label">
                <span>Day 3 of 30</span>
                <span>10%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar__fill" style={{ width: "10%" }} />
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: "var(--space-3)" }}>
            <nav className="quick-links" id="quick-links">
              <Link href="#" className="quick-link active" id="ql-myfeed">
                <i className="fa-solid fa-house" /> My Feed
              </Link>
              <Link href="#" className="quick-link" id="ql-myposts">
                <i className="fa-solid fa-file-pen" /> My Posts
                <span className="quick-link__count">7</span>
              </Link>
              <Link href="#" className="quick-link" id="ql-bookmarks">
                <i className="fa-solid fa-bookmark" /> Bookmarks
                <span className="quick-link__count">12</span>
              </Link>
              <Link href="#" className="quick-link" id="ql-trending">
                <i className="fa-solid fa-fire" /> Trending
              </Link>
              <div className="divider" />
              <Link href="/questions" className="quick-link" id="ql-questions">
                <i className="fa-solid fa-circle-question" /> Q&amp;A Board
                <span className="quick-link__count">3</span>
              </Link>
              <Link href="#" className="quick-link" id="ql-achievements">
                <i className="fa-solid fa-trophy" /> Achievements
              </Link>
            </nav>
          </div>

          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-tags" /> Topics
              </span>
            </div>
            <div className="tags-cloud" id="topics-cloud">
              <span className="tag tag--primary">Web foundations</span>
              <span className="tag tag--accent">Mobile App devt</span>
              <span className="tag tag--info">Algorithms</span>
              <span className="tag tag--success">Data Science</span>
              <span className="tag tag--primary">Cyber Security basics</span>
              <span className="tag tag--accent">Node_js</span>
              <span className="tag tag--info">Web Dev</span>
              <span className="tag tag--success">Git</span>
            </div>
          </div>
        </aside>

        <section className="feed-main" id="feed-main">
          <div className="feed-header">
            <h1 className="feed-header__title">Today&apos;s Activity Feed</h1>
            <div className="filter-tabs" id="filter-tabs">
              <button className="filter-tab active" id="tab-latest" type="button">
                Latest
              </button>
              <button className="filter-tab" id="tab-popular" type="button">
                Popular
              </button>
              <button className="filter-tab" id="tab-following" type="button">
                Following
              </button>
            </div>
          </div>

          <div className="feed" id="posts-feed">
            <article className="post-card" id="post-card-1">
              <div className="post-card__image">
                <Image
                  src="/assets/images/coding_session.png"
                  alt="Students coding at INSA Summer Camp"
                  width={1200}
                  height={700}
                />
                <div className="post-card__image-overlay" />
                <span className="post-card__day-badge">Day 3</span>
              </div>
              <div className="post-card__body">
                <div className="post-card__author">
                  <div className="avatar avatar--md">
                    <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                      AK
                    </div>
                    <span className="online-dot" />
                  </div>
                  <div className="post-card__author-info">
                    <div className="post-card__author-name">
                      Abebe Kebede
                      <span className="role-badge role-badge--student">
                        <i className="fa-solid fa-graduation-cap" /> Student
                      </span>
                    </div>
                    <div className="post-card__author-meta">Today at 10:24 AM · Software Engineering</div>
                  </div>
                </div>

                <h2 className="post-card__title">My First Deep Dive in Web development. Understanding html and css</h2>
                <p className="post-card__excerpt">
                  Today was an incredible session! We started with the web foundations with html and css. then moved into modules and how
                  they help us organize code. next JavaScript. I&apos;m excited to build on this tomorrow!
                </p>

                <div className="tags">
                  <span className="tag tag--primary">Web Foundations</span>
                  <span className="tag tag--accent">html</span>
                  <span className="tag tag--info">css</span>
                </div>

                <div className="post-card__reactions">
                  <button className="reaction-btn reaction-btn--like active--like" id="like-post-1" title="Like" type="button">
                    <i className="fa-solid fa-thumbs-up" />
                    <span>24</span>
                  </button>
                  <button className="reaction-btn reaction-btn--dislike" id="dislike-post-1" title="Dislike" type="button">
                    <i className="fa-solid fa-thumbs-down" />
                    <span>1</span>
                  </button>
                  <Link href="/post" className="reaction-btn reaction-btn--comment" id="comment-post-1" title="Comments">
                    <i className="fa-solid fa-comment" />
                    <span>8</span>
                  </Link>
                  <button className="reaction-btn reaction-btn--bookmark" id="bookmark-post-1" title="Bookmark" type="button">
                    <i className="fa-solid fa-bookmark" />
                  </button>
                  <span className="reactions-spacer" />
                  <button className="reaction-btn reaction-btn--share" id="share-post-1" title="Share" type="button">
                    <i className="fa-solid fa-share-nodes" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="post-card" id="post-card-2">
              <div className="post-card__image">
                <Image
                  src="/assets/images/data_science.png"
                  alt="Machine Learning and Data Science concepts"
                  width={1200}
                  height={700}
                />
                <div className="post-card__image-overlay" />
                <span className="post-card__day-badge">Day 3</span>
              </div>
              <div className="post-card__body">
                <div className="post-card__author">
                  <div className="avatar avatar--md">
                    <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                      MT
                    </div>
                    <span className="online-dot" />
                  </div>
                  <div className="post-card__author-info">
                    <div className="post-card__author-name">
                      Mr. Tadesse Haile
                      <span className="role-badge role-badge--trainer">
                        <i className="fa-solid fa-chalkboard-teacher" /> Trainer
                      </span>
                    </div>
                    <div className="post-card__author-meta">Today at 9:00 AM · Machine Learning Track</div>
                  </div>
                </div>

                <h2 className="post-card__title">Introduction to Machine Learning — Concepts You Must Understand First</h2>
                <p className="post-card__excerpt">
                  Welcome to our ML module! Before we jump into code, I want you all to deeply understand the three types of machine
                  learning: supervised, unsupervised, and reinforcement learning. Today&apos;s session recording and notes are available below.
                  Please review them and post your questions on the Q&amp;A board!
                </p>

                <div className="tags">
                  <span className="tag tag--accent">Machine Learning</span>
                  <span className="tag tag--success">Data Science</span>
                  <span className="tag tag--primary">AI</span>
                  <span className="tag tag--info">Lecture Notes</span>
                </div>

                <div className="post-card__reactions">
                  <button className="reaction-btn reaction-btn--like" id="like-post-2" title="Like" type="button">
                    <i className="fa-solid fa-thumbs-up" />
                    <span>36</span>
                  </button>
                  <button className="reaction-btn reaction-btn--dislike" id="dislike-post-2" title="Dislike" type="button">
                    <i className="fa-solid fa-thumbs-down" />
                    <span>0</span>
                  </button>
                  <Link href="/post" className="reaction-btn reaction-btn--comment" id="comment-post-2" title="Comments">
                    <i className="fa-solid fa-comment" />
                    <span>14</span>
                  </Link>
                  <button className="reaction-btn reaction-btn--bookmark active--like" id="bookmark-post-2" title="Bookmark" type="button">
                    <i className="fa-solid fa-bookmark" />
                  </button>
                  <span className="reactions-spacer" />
                  <button className="reaction-btn reaction-btn--share" id="share-post-2" title="Share" type="button">
                    <i className="fa-solid fa-share-nodes" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="post-card" id="post-card-3">
              <div className="post-card__body">
                <div className="post-card__author">
                  <div className="avatar avatar--md">
                    <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}>
                      SM
                    </div>
                  </div>
                  <div className="post-card__author-info">
                    <div className="post-card__author-name">
                      Sara Mengistu
                      <span className="role-badge role-badge--student">
                        <i className="fa-solid fa-graduation-cap" /> Student
                      </span>
                    </div>
                    <div className="post-card__author-meta">Today at 2:15 PM · Algorithms &amp; Data Structures</div>
                  </div>
                </div>

                <h2 className="post-card__title">Binary Search Made Me Rethink Everything — A Revelation in O(log n)</h2>
                <p className="post-card__excerpt">
                  I was struggling with linear search efficiency until our trainer walked us through binary search today. The realization
                  that we can cut the search space in half at every step was mind-blowing. I implemented it in Python and tested it against a
                  dataset of 1 million numbers — the difference was unreal. Sharing my notes and implementation below.
                </p>

                <div className="tags">
                  <span className="tag tag--info">Algorithms</span>
                  <span className="tag tag--primary">Python</span>
                  <span className="tag tag--success">Big O Notation</span>
                </div>

                <div className="post-card__reactions">
                  <button className="reaction-btn reaction-btn--like" id="like-post-3" title="Like" type="button">
                    <i className="fa-solid fa-thumbs-up" />
                    <span>19</span>
                  </button>
                  <button className="reaction-btn reaction-btn--dislike" id="dislike-post-3" title="Dislike" type="button">
                    <i className="fa-solid fa-thumbs-down" />
                    <span>0</span>
                  </button>
                  <Link href="/post" className="reaction-btn reaction-btn--comment" id="comment-post-3" title="Comments">
                    <i className="fa-solid fa-comment" />
                    <span>5</span>
                  </Link>
                  <button className="reaction-btn reaction-btn--bookmark" id="bookmark-post-3" title="Bookmark" type="button">
                    <i className="fa-solid fa-bookmark" />
                  </button>
                  <span className="reactions-spacer" />
                  <button className="reaction-btn reaction-btn--share" id="share-post-3" title="Share" type="button">
                    <i className="fa-solid fa-share-nodes" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>

            <article className="post-card" id="post-card-4">
              <div className="post-card__body">
                <div className="post-card__author">
                  <div className="avatar avatar--md">
                    <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#38bdf8,#0284c7)" }}>
                      DG
                    </div>
                  </div>
                  <div className="post-card__author-info">
                    <div className="post-card__author-name">
                      Dawit Girma
                      <span className="role-badge role-badge--student">
                        <i className="fa-solid fa-graduation-cap" /> Student
                      </span>
                    </div>
                    <div className="post-card__author-meta">Today at 4:00 PM · Linux &amp; Shell Scripting</div>
                  </div>
                </div>

                <h2 className="post-card__title">My Linux Journey — From Zero to Writing My First Shell Script 🐧</h2>
                <p className="post-card__excerpt">
                  Three days ago I had never used a terminal. Today I wrote a shell script that automates setting up a Python development
                  environment from scratch! The feeling is indescribable. Key commands that changed my workflow: chmod, grep, pipe operators,
                  and cron jobs. Full script and breakdown in the post.
                </p>

                <div className="tags">
                  <span className="tag tag--success">Linux</span>
                  <span className="tag tag--primary">Shell Scripting</span>
                  <span className="tag tag--accent">Automation</span>
                </div>

                <div className="post-card__reactions">
                  <button className="reaction-btn reaction-btn--like" id="like-post-4" title="Like" type="button">
                    <i className="fa-solid fa-thumbs-up" />
                    <span>31</span>
                  </button>
                  <button className="reaction-btn reaction-btn--dislike" id="dislike-post-4" title="Dislike" type="button">
                    <i className="fa-solid fa-thumbs-down" />
                    <span>2</span>
                  </button>
                  <Link href="/post" className="reaction-btn reaction-btn--comment" id="comment-post-4" title="Comments">
                    <i className="fa-solid fa-comment" />
                    <span>11</span>
                  </Link>
                  <button className="reaction-btn reaction-btn--bookmark" id="bookmark-post-4" title="Bookmark" type="button">
                    <i className="fa-solid fa-bookmark" />
                  </button>
                  <span className="reactions-spacer" />
                  <button className="reaction-btn reaction-btn--share" id="share-post-4" title="Share" type="button">
                    <i className="fa-solid fa-share-nodes" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <aside className="sidebar-right" id="sidebar-right">
          <div className="card" id="widget-trainers">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-chalkboard-user" /> Active Trainers
              </span>
              <span className="status-indicator">Live</span>
            </div>
            <div className="people-list">
              <div className="person-item" id="trainer-1">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                    TH
                  </div>
                  <span className="online-dot" />
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Mr. Tadesse Haile</div>
                  <div className="person-item__role">Machine Learning</div>
                </div>
              </div>
              <div className="person-item" id="trainer-2">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}>
                    BW
                  </div>
                  <span className="online-dot" />
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Dr. Biruk Wolde</div>
                  <div className="person-item__role">Algorithms</div>
                </div>
              </div>
              <div className="person-item" id="trainer-3">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}>
                    SL
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Ms. Selamawit Lemma</div>
                  <div className="person-item__role">Web Development</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card" id="widget-leaderboard">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-trophy" /> Top Learners
              </span>
              <a href="#" style={{ fontSize: "11px", color: "var(--primary)" }}>
                See all
              </a>
            </div>
            <div className="people-list">
              <div className="person-item" id="learner-1">
                <span className="rank-badge rank-badge--1">1</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                    AK
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Abebe Kebede</div>
                  <div className="person-item__role">7 posts · Day 3</div>
                </div>
                <span className="person-item__score">980 XP</span>
              </div>
              <div className="person-item" id="learner-2">
                <span className="rank-badge rank-badge--2">2</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#38bdf8,#0284c7)" }}>
                    DG
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Dawit Girma</div>
                  <div className="person-item__role">5 posts · Day 3</div>
                </div>
                <span className="person-item__score">840 XP</span>
              </div>
              <div className="person-item" id="learner-3">
                <span className="rank-badge rank-badge--3">3</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}>
                    SM
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Sara Mengistu</div>
                  <div className="person-item__role">4 posts · Day 3</div>
                </div>
                <span className="person-item__score">720 XP</span>
              </div>
              <div className="person-item" id="learner-4">
                <span className="rank-badge rank-badge--n">4</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#ec4899,#be185d)" }}>
                    FT
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Feven Tesfaye</div>
                  <div className="person-item__role">3 posts · Day 3</div>
                </div>
                <span className="person-item__score">610 XP</span>
              </div>
            </div>
          </div>

          <div className="card" id="widget-trending-tags">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-fire" /> Trending Today
              </span>
            </div>
            <div className="tags-cloud">
              <span className="tag tag--primary">#Python</span>
              <span className="tag tag--accent">#MachineLearning</span>
              <span className="tag tag--success">#Linux</span>
              <span className="tag tag--info">#BinarySearch</span>
              <span className="tag tag--primary">#Git</span>
              <span className="tag tag--accent">#DataScience</span>
              <span className="tag tag--info">#OOP</span>
              <span className="tag tag--success">#SQL</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
