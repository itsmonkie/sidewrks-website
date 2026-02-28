# CLAUDE.md

## Package manager

Always use `yarn` — never use `npm`.

## Articles

When adding an image to an article, it must be included in two places:
- The `images` array in the frontmatter (for metadata/social sharing)
- A markdown image (`![alt](/path)`) in the article body (for rendering on the page)

### New article checklist

After adding a new article:

1. Start the dev server (`yarn dev`)
2. Fetch the homepage and verify the new article appears in the article list
3. If the article has an image, fetch the article page and verify an `<img>` tag with the image src is present in the rendered HTML
