# Andrei Biswas (codeabiswas) Portfolio Website

This is my personal/portfolio website that I built using React. It pulls data all the data from a [GitHub Gist](https://gist.github.com/codeabiswas/ac0204d535a5b7b515c7ddfd8be5671e).

Feel free to use this site as a template to build your own website by forking this repository. Make sure to create a GitHub Gist like above and link it to your own site!

## Development

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd abiswas.dev/
    gatsby develop
    ```

2.  **Open the code and start customizing**

    The site runs locally at http://localhost:8000

    Edit `src/pages/index.js` to see it update instantaneously.

## Project structure

- `.env.development`
  - This is a local file which contains the `GATSBY_NEXT_PUBLIC_PRI_GIST_API` variable. This variable is the `api.github.com` link to the gist above.
- `src/`
  - `assets/`
    - Favicon and downloadable objects
  - `components/`
    - Any reusable objects used throughout the site. Each folder within it follows the same format as written in `mkcomp` ([a Shell script](https://github.com/codeabiswas/mkcomp) I wrote to create React components in a sane format). If there is no custom styling, there is no `styled.js` associated with that component.
  - `hooks`
    - Reusable React Hooks, for example `useTheme.js` that is used across the website.
  - `utils`
    - Reusable JS functions. Currently empty.
  - `providers`
    - Provides context for the site. Primarily used for setting the theme across different pages.
  - `pages/`
    - The pages user can navigate to in the site. Currently on `index.js` (landing page, which shows all the `sections/`) and `404.js`.
  - `scss/`
    - Styles for the entire project. `main.scss` gets imported by `index.js` only.
  - `sections/`
    - All the sections of the site

## Special mentions

- [React.js Essential Training by Eve Porcello](https://www.linkedin.com/learning/react-js-essential-training-14836121?trk=course_title&upsellOrderOrigin=default_guest_learning): A vital and succinct introduction to the fundamentals of React.
- [B612 font](https://b612-font.com/): The open-sourced font family designed and tested to be used in aircraft cockpits.
- [Catppuccin](https://github.com/catppuccin/catppuccin): The pastel theme that paints the light (latte) and dark (mocha) modes of this website.
- [favicon.io](https://favicon.io/favicon-generator/): Generates favicons with Google Fonts.
- [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/overview): Hosts this site
- Check out the `package.json` to see which libraries I am using! Notably:
  - Gatsby
  - React Bootstrap
  - Bootstrap
  - Styled Components

## License

This project is licensed under MIT License. Read LICENSE for more information.
