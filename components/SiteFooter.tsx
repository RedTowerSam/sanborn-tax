export default function SiteFooter() {
  return (
    <footer className="w-full bg-brand-dark text-brand-light py-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-bold text-lg text-center">Sanborn Tax Service</p>
          </div>
          <div>
            <p className="font-bold text-lg text-center">805 W. Jackson Suite 303, Morton, IL 61550</p>
          </div>
          <div>
            <p className="font-bold text-lg text-center">(309) 839-2676</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brand-light/20 text-center">
          <p className="text-sm text-brand-light/80">
            Site design by{" "}
            <a
              href="https://www.redtowerdigital.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-light transition-colors"
            >
              Red Tower Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

