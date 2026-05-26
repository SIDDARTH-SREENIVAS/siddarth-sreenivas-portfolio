const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="text-sm text-black/60">
          © {year} Siddarth Sreenivas. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/siddarth-sreenivas-363177323/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-black/10 bg-white hover:border-action hover:text-action transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SIDDARTH-SREENIVAS"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full border border-black/10 bg-white hover:border-action hover:text-action transition-colors text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

