import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "INSA Summer Camp DA — Post Detail",
  description: "A detailed activity post from the INSA Summer Camp.",
};

export default function PostPage() {
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
            <Link href="/profile" className="navbar__nav-link">
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
            <span className="badge">4</span>
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

      <div className="post-detail-layout">
        <article className="post-detail">
          <div className="post-detail__cover">
            <Image
              src="/assets/images/data_science.png"
              alt="Data science session at INSA Summer Camp"
              width={1200}
              height={360}
            />
            <div className="post-detail__cover-overlay" />
          </div>

          <div className="post-detail__header">
            <div className="post-detail__category-row">
              <span className="tag tag--primary">Machine Learning</span>
              <span className="tag tag--accent">Day 3</span>
              <span className="tag tag--info">Python</span>
            </div>
            <h1 className="post-detail__title">How we used Python notebooks to explore data patterns</h1>

            <div className="post-detail__author-bar">
              <div className="avatar avatar--md">
                <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                  MT
                </div>
                <span className="online-dot" />
              </div>
              <div className="post-detail__author-info">
                <div className="post-detail__author-name">
                  Mr. Tadesse Haile <span className="role-badge role-badge--trainer">
                    <i className="fa-solid fa-chalkboard-teacher" /> Trainer
                  </span>
                </div>
                <div className="post-detail__author-meta">Today at 9:00 AM · Machine Learning Track</div>
              </div>
              <div className="post-detail__stats">
                <span className="post-detail__stat">
                  <i className="fa-solid fa-eye" /> 184 views
                </span>
                <span className="post-detail__stat">
                  <i className="fa-solid fa-comment" /> 8 comments
                </span>
              </div>
            </div>
          </div>

          <div className="post-detail__content">
            <p>
              Today&apos;s session focused on turning raw data into patterns that feel understandable. We started with a simple notebook
              workflow and practiced reading datasets carefully before jumping into models.
            </p>
            <p>
              The most valuable lesson was not the code itself, but the habit of asking the right questions first: what are we trying to
              learn, which features matter, and how can we explain the outcome clearly to someone new to the topic?
            </p>
            <div className="highlight-box">
              A strong beginner habit is to inspect the data visually first before applying any complex algorithm.
            </div>
            <h3>What we covered</h3>
            <ul>
              <li>Loading a dataset and checking its shape and columns</li>
              <li>Using pandas to clean and organize values</li>
              <li>Creating simple visualizations with matplotlib</li>
              <li>Discussing how to interpret patterns without overfitting</li>
            </ul>
            <p>
              The group shared many thoughtful questions during the lab, especially around how to avoid bias and why a model can look
              accurate on paper but still fail in practice. That discussion made the session feel especially engaging.
            </p>
          </div>

          <div className="reaction-bar-full">
            <button className="reaction-btn reaction-btn--like active--like" type="button">
              <i className="fa-solid fa-thumbs-up" />
              <span>24</span>
            </button>
            <button className="reaction-btn reaction-btn--dislike" type="button">
              <i className="fa-solid fa-thumbs-down" />
              <span>1</span>
            </button>
            <button className="reaction-btn reaction-btn--comment" type="button">
              <i className="fa-solid fa-comment" />
              <span>Comment</span>
            </button>
            <button className="reaction-btn reaction-btn--bookmark" type="button">
              <i className="fa-solid fa-bookmark" />
              <span>Bookmark</span>
            </button>
            <button className="reaction-btn reaction-btn--share" type="button">
              <i className="fa-solid fa-share-nodes" />
              <span>Share</span>
            </button>
          </div>

          <section className="comments-section">
            <h3 className="comments-title">
              Discussion <span className="count">4</span>
            </h3>

            <form className="comment-form">
              <div className="comment-input-wrapper">
                <textarea className="comment-input" placeholder="Leave a thoughtful comment or question..." />
              </div>
              <button className="btn btn--primary" type="submit">
                Post Comment
              </button>
            </form>

            <div className="comment-list">
              <div className="comment-item">
                <div className="avatar avatar--md">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                    AZ
                  </div>
                </div>
                <div className="comment-item__body">
                  <div className="comment-item__header">
                    <span className="comment-item__name">Alem Z.</span>
                    <span className="comment-item__time">12 min ago</span>
                  </div>
                  <p className="comment-item__text">
                    The notebook examples were very clear. I especially liked the step where we checked missing values before plotting
                    anything.
                  </p>
                  <div className="comment-item__actions">
                    <button className="comment-action" type="button">
                      <i className="fa-solid fa-reply" /> Reply
                    </button>
                    <button className="comment-action" type="button">
                      <i className="fa-solid fa-heart" /> Like
                    </button>
                  </div>
                </div>
              </div>

              <div className="comment-item">
                <div className="avatar avatar--md">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#f59e0b,#fbbf24)" }}>
                    RY
                  </div>
                </div>
                <div className="comment-item__body">
                  <div className="comment-item__header">
                    <span className="comment-item__name">Ruth Y.</span>
                    <span className="comment-item__time">28 min ago</span>
                  </div>
                  <p className="comment-item__text">
                    Could we also try a mini project tomorrow where we predict a simple outcome from our own data?
                  </p>
                  <div className="comment-replies">
                    <div className="comment-reply">
                      <div className="avatar avatar--sm">
                        <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                          MT
                        </div>
                      </div>
                      <div className="comment-reply__body">
                        <div className="comment-item__header">
                          <span className="comment-item__name">Mr. Tadesse</span>
                          <span className="comment-item__time">10 min ago</span>
                        </div>
                        <p className="comment-item__text">
                          Absolutely — we can build a small classification task tomorrow and review the results together.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        <aside className="sidebar-right">
          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-circle-info" /> About this post
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
                  <div className="person-item__name">Mentor-led session</div>
                  <div className="person-item__role">Live coding lab</div>
                </div>
              </div>
              <div className="person-item">
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#8b5cf6,#a78bfa)" }}>
                    DA
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Daily activity</div>
                  <div className="person-item__role">Day 3 reflection</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-tags" /> Related topics
              </span>
            </div>
            <div className="tags-cloud">
              <span className="tag tag--primary">Data Science</span>
              <span className="tag tag--accent">Jupyter</span>
              <span className="tag tag--info">Visualization</span>
              <span className="tag tag--success">Practice Lab</span>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <span className="card__title">
                <i className="fa-solid fa-users" /> Conversation leaders
              </span>
            </div>
            <div className="people-list">
              <div className="person-item">
                <span className="rank-badge rank-badge--1">1</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}>
                    AZ
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Alem Z.</div>
                  <div className="person-item__role">Active learner</div>
                </div>
                <span className="person-item__score">+12</span>
              </div>
              <div className="person-item">
                <span className="rank-badge rank-badge--2">2</span>
                <div className="avatar avatar--sm">
                  <div className="avatar__initials" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                    RY
                  </div>
                </div>
                <div className="person-item__info">
                  <div className="person-item__name">Ruth Y.</div>
                  <div className="person-item__role">Curious problem-solver</div>
                </div>
                <span className="person-item__score">+9</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
