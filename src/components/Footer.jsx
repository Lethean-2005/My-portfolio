import { useLanguage } from '../i18n.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const text = t.footer.replace('{year}', new Date().getFullYear());

  return (
    <footer id="contact" className="footer">
      <div className="container">{text}</div>
    </footer>
  );
}
