import { profile } from "./portfolio-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-content">
        <span>{profile.shortName}</span>
        <p>AI &amp; ML enthusiast. Building with curiosity.</p>
        <a href="#home" aria-label="Back to the top">Back to top ↑</a>
      </div>
    </footer>
  );
}
