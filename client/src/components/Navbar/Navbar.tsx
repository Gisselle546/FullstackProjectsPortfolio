const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav
      className="bg-gradient-to-l from-slate-950/70 via-slate-950/45 to-transparent
  backdrop-blur-xl border-b border-white/10
  shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-orange-400 transition-colors font-orbitron text-lg px-2 py-1 rounded-lg border-b-2 border-transparent hover:border-orange-400"
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
          className="ml-4 bg-primary hover:bg-orange-400 text-white font-orbitron font-semibold py-2 px-4 rounded-lg shadow transition-colors border-2 border-primary hover:border-orange-400"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
