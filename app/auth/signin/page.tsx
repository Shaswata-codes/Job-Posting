const styles = `
@import url("https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&display=swap");

.signin-page {
  --paper: #eceff3;
  --card: #ffffff;
  --ink: #15181c;
  --muted: #59626d;
  --line: #d6dbe1;
  --marker: #ffd84d;
  --on-marker: #15181c;

  box-sizing: border-box;
  min-height: 100dvh;
  padding: 1.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  background: var(--paper);
  color: var(--muted);

  font-family:
    "Schibsted Grotesk",
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;

  font-size: 0.875rem;
  font-weight: 500;

  -webkit-font-smoothing: antialiased;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .signin-page {
    --paper: #0e1114;
    --card: #161a1f;
    --ink: #f1f3f5;
    --muted: #98a1ac;
    --line: #272d34;
  }
}

/* Card */
.signin-card {
  box-sizing: border-box;
  width: min(100%, 26rem);

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 14px;

  box-shadow:
    0 1px 2px rgb(21 24 28 / 0.05),
    0 16px 32px -20px rgb(21 24 28 / 0.25);

  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.5;

  text-align: left;
}

/* Mobile */
@media (max-width: 30rem) {
  .signin-card {
    padding: 1.5rem;
  }
}

/* Heading */
.signin-heading {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.signin-heading h2 {
  margin: 0;

  color: var(--ink);

  font-size: 1.5rem;
  font-weight: 650;
  line-height: 1.2;
  letter-spacing: -0.02em;

  text-wrap: balance;
}

.signin-heading p {
  margin: 0;

  color: var(--muted);

  text-wrap: pretty;
}

/* Action */
.signin-action {
  margin-top: 0.5rem;

  display: grid;
}

/* GitHub button */
.signin-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 0.625rem;

  width: 100%;
  padding: 0.8125rem 1rem;

  background: var(--ink);
  color: var(--card);

  border: 1px solid transparent;
  border-radius: 10px;

  font: inherit;
  font-weight: 600;
  line-height: 1;

  cursor: pointer;

  transition:
    background-color 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.05s ease;
}

/* GitHub icon */
.signin-button::before {
  content: "";

  flex: none;

  width: 1.25rem;
  height: 1.25rem;

  background: currentColor;

  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'/%3E%3C/svg%3E")
    center / contain no-repeat;

  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'/%3E%3C/svg%3E")
    center / contain no-repeat;
}

/* Hover */
.signin-button:hover {
  background: var(--marker);
  color: var(--on-marker);
  border-color: var(--on-marker);
}

/* Click */
.signin-button:active {
  transform: translateY(1px);
}

/* Keyboard focus */
.signin-button:focus-visible {
  outline: 2px solid var(--ink);
  outline-offset: 3px;
}

/* Disabled */
.signin-button:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .signin-button {
    transition: none;
  }
}
`;

export default function SignInPage() {
  return (
    <div className="signin-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <div className="signin-card">
        <div className="signin-heading">
          <h2>Welcome to Job Scanner</h2>

          <p>
            Sign in to your account to access all features.
          </p>
        </div>

        <div className="signin-action">
          <button className="signin-button">
            Sign in with Github
          </button>
        </div>
      </div>
    </div>
  );
}