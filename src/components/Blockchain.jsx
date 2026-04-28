import { useLanguage } from '../i18n.jsx';
import blockchainVideo from '../assets/vecteezy_cloud-technology-computing-animation-modern-cloud_46568762.mp4';

export default function Blockchain() {
  const { t } = useLanguage();

  return (
    <section id="blockchain" className="section section-blockchain">
      <div className="container blockchain-grid">
        <div className="blockchain-text">
          <h2 className="blockchain-title">
            {t.blockchain.titleStart}{' '}
            <span className="accent">{t.blockchain.titleAccent}</span>{' '}
            {t.blockchain.titleEnd}
          </h2>
          <p className="blockchain-desc">{t.blockchain.desc}</p>
          <a href="#contact" className="blockchain-link">
            {t.blockchain.readMore}
          </a>
        </div>
        <div className="blockchain-media">
          <video
            src={blockchainVideo}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
