import { useState } from "react";

interface DisclaimerModalProps {
  onAccept: (dontShowAgain: boolean) => void;
}

const SECTIONS = [
  {
    title: "How CoWork stays safe",
    items: [
      "Works only inside workspaces you select, plus a private starter workspace.",
      "Asks before destructive or sensitive external actions.",
      "Command tools follow the access profile chosen for each task.",
      "Connected apps need their own setup and approval.",
    ],
  },
  {
    title: "What it can do when allowed",
    items: [
      "Run commands the selected access profile permits.",
      "Read, write, and delete files in allowed workspace paths.",
      "Use the network, browser automation, skills, plugins, and services you enable.",
      "Send and receive messages on channels like WhatsApp, Telegram, Slack, or email.",
    ],
  },
  {
    title: "Recommended",
    items: [
      "Start with restrictive workspace permissions.",
      "Limit agent capabilities in Settings → Guardrails.",
      "Use pairing codes and allowlists for messaging channels.",
      "Read each approval request before allowing it.",
      "Keep sensitive files outside your workspace.",
    ],
  },
];

export function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(true);
  const [declined, setDeclined] = useState(false);

  return (
    <div
      className="disclaimer-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      aria-describedby="disclaimer-intro"
    >
      <div className="disclaimer-card">
        <div className="disclaimer-header">
          <span className="disclaimer-glyph" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2.5L18 17H2L10 2.5Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M10 8V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="10" cy="14" r="0.9" fill="currentColor" />
            </svg>
          </span>
          <span className="disclaimer-name">CoWork OS · Security notice</span>
        </div>

        <h2 id="disclaimer-title" className="disclaimer-title">
          Before you start
        </h2>
        <p id="disclaimer-intro" className="disclaimer-intro">
          CoWork can take real actions on your computer and accounts, so it works within explicit
          workspace boundaries and asks for approval.
        </p>

        <div className="disclaimer-body">
          {SECTIONS.map((section) => (
            <section key={section.title} className="disclaimer-section">
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {declined && (
          <div className="disclaimer-exit-message" role="status">
            You need to accept to use CoWork OS. Close the app if you disagree.
          </div>
        )}

        <div className="disclaimer-footer">
          <label className="disclaimer-checkbox">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(event) => setDontShowAgain(event.target.checked)}
            />
            <span>Don't show this again</span>
          </label>
          <div className="disclaimer-actions">
            <button type="button" className="disclaimer-decline" onClick={() => setDeclined(true)}>
              Decline
            </button>
            <button
              type="button"
              className="disclaimer-accept"
              onClick={() => onAccept(dontShowAgain)}
            >
              I understand the risks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
