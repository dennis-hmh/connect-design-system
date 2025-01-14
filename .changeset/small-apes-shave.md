---
'@connect/connect-design-system': patch
---

Fix CSS selector wildcards to properly handle multiple classnames with connect** prefix. Updates [class^='connect**'] to [class*='connect__'] for better compatibility with CSS modules and multiple classes
