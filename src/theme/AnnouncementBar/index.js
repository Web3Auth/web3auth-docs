/* eslint-disable react/jsx-filename-extension */
import { useThemeConfig } from "@docusaurus/theme-common";
import { useAnnouncementBar } from "@docusaurus/theme-common/internal";
import AnnouncementBarCloseButton from "@theme/AnnouncementBar/CloseButton";
import AnnouncementBarContent from "@theme/AnnouncementBar/Content";

import styles from "./styles.module.css";

export default function AnnouncementBar() {
  const { announcementBar } = useThemeConfig();
  const { isActive, close } = useAnnouncementBar();
  if (!isActive) {
    return null;
  }
  const { backgroundColor, textColor, isCloseable } = announcementBar;
  return (
    <div className={styles.announcementBar} style={{ backgroundColor, color: textColor }} role="banner">
      <AnnouncementBarContent className={styles.announcementBarContent} />
      {isCloseable && <AnnouncementBarCloseButton onClick={close} className={styles.announcementBarClose} />}
    </div>
  );
}
