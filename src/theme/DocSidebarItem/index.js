import React from 'react';
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category';
import DocSidebarItemLink from '@theme/DocSidebarItem/Link';
import DocSidebarItemHtml from '@theme/DocSidebarItem/Html';
export default function DocSidebarItem({ item, ...props }) {
  switch (item.type) {
    case 'category':
      return <DocSidebarItemCategory item={item} {...props} style={{ padding: 7 }} />;
    case 'html':
      return <DocSidebarItemHtml item={item} {...props} style={{ padding: 7 }} />;
    case 'link':
    default:
      return <DocSidebarItemLink item={item} {...props} style={{ padding: 7 }} />;
  }
}
