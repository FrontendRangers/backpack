# Backpack

> The CSS starter toolkit

## Features

### Technologies

- [Node.js](http://nodejs.org/)
- [Gulp](http://gulpjs.com)
- [Sass](http://sass-lang.com/)
- [Bower](http://bower.io)
- [Polymer](https://www.polymer-project.org/)
- [PostCSS](https://github.com/postcss/postcss)

### CSS toolkit

- [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) architecture
- [SUIT CSS](https://suitcss.github.io/) naming convention
- Barebone styles
- Configurable class names
- Wireframe mode

### Styleguide generator

> To be placed in his own repository

- Use Polymer to scope styles to the styleguide
- Fully configurable via JSON file
- PostCSS
    - Autoprefixer
- Nunjucks templating engine
- Gulp tasks per file
- Built-in preview server with BrowserSync

## Getting Started

Install dependencies
```
npm install && bower install
```

Run the styleguide
```
gulp
```

## Architecture

- `_build/`: compiled HTML, CSS, and JavaScript *– Don't edit files here, folder rebuilds on change*
- `assets/`: project assets (CSS, JavaScript) *– file structure to be redone*
- `docs/`: project assets (CSS, JavaScript)
    - `data/`: Data files (menu, colors, icons) *– not working at the moment*
    - `styleguide/`: Styleguide files
        - `components/`:  Styleguide Polymer components
        - `layouts/`: Styleguide layouts
        - `styles/`: Styleguide styles *– needs cleanup*
    - `globals/`: Project globals examples *– can be rename*
    - `components/`: Project components examples *– can be rename*
    - `templates/`: Project templates examples *– can be rename*
    - `index.html`: Project homepage
- `gulpfile.js/`: Gulp tasks
    - `config.js`: Styleguide configuration
    - `index.js`: Main gulpfile with global tasks
    - `gulpfile.js/`: Tasks files
- `libs/`: project assets (CSS, JavaScript)

## TODO

### CSS toolkit

- [ ] Define and create utilities/components
- [ ] Cleanup unnecessary CSS
- [ ] Recreate architecture following ITCSS principles
- [ ] Add these tasks to Github Issues
    - Manage with [Waffle.io](https://waffle.io/benoitdeziel/backpack)
- [ ] Create the wireframe theme
    - [Like this](https://www.hellomany.com/ui-kits/wireframe/wkv2)

### Styleguide generator

- [ ] Add dynamic menu generation
- [ ] Style styleguide components
- [ ] Put in own repository as a gulp plugin
- [ ] Implement [Page.js](https://visionmedia.github.io/page.js/) for routing
- [ ] Create components via the command line
- [ ] Generate styleguide from css comments like KSS, but with an external html file for markup

## Authors

**Benoit Deziel** - [ben@benoitdeziel.com](mailto:ben@benoitdeziel.com)
