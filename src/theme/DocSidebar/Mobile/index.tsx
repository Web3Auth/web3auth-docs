/* eslint-disable react/prop-types */
import { NavbarSecondaryMenuFiller, ThemeClassNames } from "@docusaurus/theme-common";
// @ts-ignore
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import clsx from "clsx";
import React from "react";
// eslint-disable-next-line react/function-component-definition
function DocSidebarMobileSecondaryMenu({ sidebar, path }) {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
      <DocSidebarItems
        items={sidebar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === "category" && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === "link") {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
}
function DocSidebarMobile(props) {
  return <NavbarSecondaryMenuFiller component={DocSidebarMobileSecondaryMenu} props={props} />;
}
export default React.memo(DocSidebarMobile);
