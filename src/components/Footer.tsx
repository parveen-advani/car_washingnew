import { Droplets, Camera, Globe, Send, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-aqua">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider">
                Steam<span className="text-gradient-aqua">Clean</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium mobile car wash & detailing. Showroom shine, delivered to your driveway.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Camera, href: "#gallery", label: "View gallery" },
                { Icon: Globe, href: "#services", label: "Explore services" },
                { Icon: Send, href: "mailto:hi@SteamCleanco.nz", label: "Email SteamClean" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:bg-secondary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-foreground">Exterior wash</a></li>
              <li><a href="#services" className="hover:text-foreground">Interior detailing</a></li>
              <li><a href="#services" className="hover:text-foreground">Full polish & wax</a></li>
              <li><a href="#services" className="hover:text-foreground">Tyre shine & alloy wheels</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground">Home</a></li>
              <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
              <li><a href="#book" className="hover:text-foreground">Book</a></li>
              <li><a href="#gallery" className="hover:text-foreground">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-aqua" /><a href="tel:0211850808" className="hover:text-foreground">021 185 0808</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-aqua" /><a href="mailto:hi@SteamCleanco.nz" className="hover:text-foreground">hi@SteamCleanco.nz</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-aqua" />Napier • Hasting • Havelock North</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SteamClean All rights reserved.</p>
          <a href="#top" className="hover:text-foreground">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
