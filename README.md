<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://saull.com.br">
    <img src="https://assets.website-files.com/5f7e0994165e365ab297bfe7/5fb28b805a0bc0cb9aafd6ef_logo-original-2.png" alt='logo'/>
  </a>

  <h2 align="center">
    Lemon Frontend Test - Button
  </h2>
  <br />
</div>

<div align="center">
    <a href="https://www.twitter.com/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-1DA1F2?style=flat&logo=Twitter&logoColor=white" />
    </a>
    <a href="https://www.linkedin.com/in/saullbrandao/">
      <img alt="Saull Brandão" src="https://img.shields.io/badge/-saullbrandao-0A66C2?style=flat&logo=Linkedin&logoColor=white" />
    </a>
</div>
<br />

# :bookmark_tabs: Table of Contents

- [About the project](#about-the-project)
- [Technologies](#technologies)
- [Getting started](#getting-started)
  - [Installation](#installation)

# :page_with_curl: About the Project

### **state**

- `:hover` - when the user hovers over the button.
- `:active` - when the button is being pressed.
- `:disabled` - activated by the `disabled` prop.

### **props**

- `color` (string) - button color. **Possible values:** `primary`, `secondary`.
  **Default:** `primary`.
- `icon` (string?) - icon displayed inside the button. **Optional.** **Possible
  values:** `arrow-right`, `check`, `refresh`.
- `onClick` (function?) - function to be executed on the click event.
  **Optional.**
- `disabled` (boolean): when true, disables the button. **Default:** `false`.
- `children` (`React.ReactNode`?): button content. **Optional.**

# :computer: Technologies

- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/vercel/next.js)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Jest](https://github.com/facebook/jest)
- [React Testing Library](https://github.com/testing-library/react-testing-library)

# :rocket: Getting Started

## Prerequisites

You will need to install Node.js and yarn

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

```sh
# Clone Repository
$ git clone https://github.com/saullbrandao/lemon-button-component.git && cd lemon-button-component

# Install Dependencies
$ yarn

# Run Application
$ yarn dev
```

This starts the development server on http://localhost:3000/
