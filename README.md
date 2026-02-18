# CS Expo 2025 2.0 Website Development Guide

## Using Git

Each page should be in a separate branch. eg. Events page should be in the events-page branch with the sole exception of the home page. The home page will be the **main** branch.

To create a new branch:

`git checkout -b [branch-name]`

To navigate to a different branch:

`git checkout [branch-name]`

After finalizing a page or a commit should the page be merged to the main branch.

**WARNING**: Before pushing to the main branch, make sure to update your local main branch by pulling changes from the repo:

1. Navigate to the main branch:

`git checkout main`

2. Pull the latest changes

`git pull origin main`

3. **Resolve any conflicts**

4. Merge your changes to the main branch

`git merge [branch-name]`

5. Push the updated main branch

`git push origin main`

## Fonts

**Stalinist One**

- Tailwind Class: `font-stalinist-one`

**Racing Sans One**

- Tailwind Class: `font-racing-sans-one`

**Space Mono**

- Tailwind Class: `font-space-mono`

## Color Palette

### Tailwind Classes

- `color-primary-blue` (#3e516e)
- `color-secondary-blue` (#879eb9)
- `color-primary-white` (#c0c0c0)
- `color-primary-black` (#0f1219)

## Sizing Guides

### Headings

- sm-md: `text-2xl`
- lg: `text-5xl`

### Body Texts

- sm-lg: `text-base`

## Assets Folder

Assets should be placed in the `/public` folder. Feel free to create necessary folders so everything is organized.
