function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-10 pt-14 text-sm text-slate-400">
      <div className="glass-card flex flex-col gap-4 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>Building intelligent products for real-world impact.</p>
          <p className="mt-1 text-xs text-slate-500">
            © {new Date().getFullYear()} Yevin Theenura
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/yevintheenura01"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
