import styles from './InfoItem.module.scss';

export interface InfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
  isTwitter?: boolean;
}

const InfoItem = ({
  icon, text, isLink, isTwitter,
}: InfoItemProps) => {
  const currentText = text || 'Not available';
  let currentHref = '';

  if (isTwitter) {
    currentHref = `https://twitter.com/${text}`;
  } else if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }

  return (
    <div className={`${styles.infoItem}${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {(isLink || isTwitter) && text ? (
          <a
            href={currentHref}
            target="_blank"
            aria-label={currentText}
            rel="noreferrer"
            className={styles.link}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};

export default InfoItem;
