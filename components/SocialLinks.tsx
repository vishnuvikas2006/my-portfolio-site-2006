import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./portfolio-data";

type SocialLinksProps = {
  variant?: "icon" | "button";
};

export function SocialLinks({ variant = "icon" }: SocialLinksProps) {
  const links = [
    { label: "GitHub", href: profile.github, icon: Github },
    { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  return (
    <div className={`social-links social-links-${variant}`} aria-label="Social links">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          title={label}
        >
          <Icon aria-hidden="true" />
          {variant === "button" ? <span>{label}</span> : null}
        </a>
      ))}
    </div>
  );
}
