const Footer = () => {
  return (
    <footer className="border-t border-amber/10 bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber shadow-lg shadow-amber/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-ink"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 17h14M6 17V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10M4 17h16M8 20h1M15 20h1"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 11h12M8 8h2M14 8h2"
                  />
                </svg>
              </div>

              <h2 className="font-display text-xl font-semibold text-paper">
                Bus<span className="text-amber">Vara</span>
              </h2>
            </div>

            <p className="font-bangla mt-4 max-w-sm text-sm leading-6 text-sage">
              সহজে এবং দ্রুত বাস ভাড়া হিসাব করুন। আপনার যাত্রার
              দূরত্ব অনুযায়ী আনুমানিক ভাড়া জানতে BusVara ব্যবহার করুন।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-sage transition hover:text-amber"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#routes"
                  className="text-sm text-sage transition hover:text-amber"
                >
                  Routes
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-sage transition hover:text-amber"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-paper">
              BusVara
            </h3>

            <p className="mt-4 text-sm leading-6 text-sage">
              Smart bus fare calculation made simple.
              Calculate your estimated fare based on your
              travel distance.
            </p>

            <div className="mt-5 inline-flex items-center rounded-full border border-amber/20 bg-amber/5 px-3 py-1.5">
              <span className="mr-2 h-2 w-2 rounded-full bg-amber shadow-lg shadow-amber/50"></span>

              <span className="text-xs font-medium text-amber">
                Smart Fare Calculator
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-amber/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center text-xs text-sage/70 sm:text-left">
            © {new Date().getFullYear()} BusVara. All rights reserved.
          </p>

          <p className="text-center text-xs text-sage/70 sm:text-right">
            Made by{" "}
            <a
              href="https://daudbd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber transition hover:text-amber-soft"
            >
              DaudBD.Com
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;