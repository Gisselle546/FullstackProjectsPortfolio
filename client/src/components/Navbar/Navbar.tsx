const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 font-[family-name:var(--font-sans)]">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors text-sm md:text-lg font-medium px-2 py-1"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm py-2 px-5 rounded-lg shadow-sm transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
