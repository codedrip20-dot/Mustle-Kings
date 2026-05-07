import { motion } from "framer-motion";
import {
  Dumbbell,
  Mail,
  Phone,
  MapPin,

} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#programs" },
  { name: "Membership", href: "#membership" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
                <Dumbbell size={22} />
              </div>

              <h2 className="text-2xl font-bold uppercase tracking-[0.25em]">
                IRONCORE
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400">
              Premium fitness experience built for those who demand strength,
              discipline, and transformation.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold uppercase tracking-widest">
              Navigation
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-gray-400 transition duration-300 hover:text-white"
                  >
                    <span className="mr-2 h-[1px] w-0 bg-red-500 transition-all duration-300 group-hover:w-5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold uppercase tracking-widest">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-red-500"
                />

                <p className="text-sm leading-relaxed text-gray-400">
                  221B Fitness Avenue
                  <br />
                  New York, USA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-red-500" />

                <a
                  href="tel:+1234567890"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-500" />

                <a
                  href="mailto:info@ironcore.com"
                  className="text-sm text-gray-400 transition hover:text-white"
                >
                  info@ironcore.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <h3 className="text-lg font-semibold uppercase tracking-widest">
              Newsletter
            </h3>

            <p className="text-sm leading-relaxed text-gray-400">
              Stay updated with exclusive offers, fitness tips, and latest gym
              news.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none backdrop-blur-md transition focus:border-red-500/50"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-red-600"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row"
        >
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} IRONCORE. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="font-medium text-white">@codedrip</span> ·{" "}
            <span className="font-medium text-white">@utsavKarki</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;