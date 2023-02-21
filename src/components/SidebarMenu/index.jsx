/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useHistory } from "@docusaurus/router";
import useGlobalData from "@docusaurus/useGlobalData";
import VersionDropdown from "@theme/NavbarItem/DocsVersionDropdownNavbarItem";
import clsx from "clsx";

import SectionsMenu from "../SectionsMenu";
import styles from "./styles.module.css";
import useSectionMenu from "./useSectionMenu";

export default function SidebarMenu() {
  const router = useHistory();
  const { id, sections, isMultiSection } = useSectionMenu();
  const globalData = useGlobalData();
  const allDocs = globalData["docusaurus-plugin-content-docs"];

  if (!sections) return null;

  const handleSectionChange = (selectedSection) => {
    if (selectedSection !== id) {
      const { pathname, hash } = router.location;
      const page = `/${selectedSection}/${pathname.split("/").slice(2).join("/")}`;

      // @ts-ignore
      const selectedSectionDocs = allDocs[selectedSection].versions[0].docs;

      if (selectedSectionDocs.find((doc) => doc.path === page)) {
        const path = page + (hash && hash.length > 0 ? `#${hash}` : "");
        router.push(path);
      } else {
        router.push(selectedSectionDocs[0].path);
      }
    }
  };
  if (!isMultiSection) {
    // @ts-ignore
    return (
      <div className={styles.container}>
        {/* @ts-ignore */}
        <SectionsMenu defaultValue={id} values={sections} onValueChange={handleSectionChange} triggerClassName={styles.sectionsMenu} />
        <VersionDropdown docsPluginId={id} dropdownItemsBefore={[]} dropdownItemsAfter={[]} items={[]} />
      </div>
    );
  }

  const { currentSection, data } = sections;

  return (
    <div className={styles.multiSectionContainer}>
      {Object.keys(data).map((section) => {
        const { name, items, description, isNew } = data[section];

        const isCurrentSection = currentSection === section;

        const navigateToFirstSection = () => handleSectionChange(items[0].id);

        return (
          <div
            className={clsx(styles.section, isCurrentSection && styles.sectionActive)}
            onClick={navigateToFirstSection}
            onKeyDown={(e) => {
              if (e.code === "Space" || e.code == "Enter") {
                navigateToFirstSection();
              }
            }}
            tabIndex={0}
            key={section}
          >
            <div className={styles.label + (isNew ? " new-badge" : "")}>{name}</div>
            <div>
              {isCurrentSection ? (
                <div className={styles.row}>
                  <SectionsMenu
                    defaultValue={isCurrentSection ? id : items[0].id}
                    values={items}
                    onValueChange={handleSectionChange}
                    triggerClassName={styles.sectionsMenu}
                  />
                  <VersionDropdown docsPluginId={id} dropdownItemsBefore={[]} dropdownItemsAfter={[]} items={[]} />
                </div>
              ) : (
                <p className={styles.description}>{description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
