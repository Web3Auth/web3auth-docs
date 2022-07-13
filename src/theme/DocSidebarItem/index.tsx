import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import OriginalDocItem from "@theme-original/DocItem";
import { ComponentProps } from "react";

export default function DocSidebarItem({ item, ...props }: ComponentProps<typeof OriginalDocItem>) {
  switch (item.type) {
    case "category":
      return <DocSidebarItemCategory item={item} {...props} style={{ padding: 7 }} />;
    case "html":
      return <DocSidebarItemHtml item={item} {...props} style={{ padding: 7 }} />;
    case "link":
    default:
      return <DocSidebarItemLink item={item} {...props} style={{ padding: 7 }} />;
  }
}
