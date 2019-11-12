# A11Y Components

The purpose of this repository is to share what I've learned about creating accessible React components. It is not currently open source, but might be at some point in the future.

If you're in interested in resources, my workflow, or the progress of this project, I'm putting together [a public Trello board](https://trello.com/b/nU9Zp4Iv/a11y-components) to keep myself organized. Feel free to peruse it!

## File Structure

Several weeks ago, a friend recommended I check out the Shopify's [`polaris-react` repository](https://github.com/Shopify/polaris-react) when I was working on accessible modal dialogs. The way they've structured their files is 🌟 GORGEOUS 🌟 and it brings my soul joy. I _love_ an organized and functional file structure.

So, here's what I've got:

```
src/
  components/
    Button/
      Button.css
      Button.js
      README.md
      index.js
    Listbox/
      ...
    ...    
    README.md
    index.js
  App.js
  ...
```

Let's dive in!

1. [`src/App.js`](https://github.com/ashleemboyer/a11y-components/blob/master/src/App.js) is just a sandbox right now. I'll import components in there as I test them.
2. `src/components/`
    - [`README.md`](https://github.com/ashleemboyer/a11y-components/blob/master/src/components/README.md) will contain a list of all the components and maybe some high-level descriptions of them. [Shopify's README](https://github.com/Shopify/polaris-react/blob/master/src/components/README.md) at this level talks about how to use their components.
    - [`index.js`](https://github.com/ashleemboyer/a11y-components/blob/master/src/components/index.js) handles exporting components so they can be imported elsewhere without having to know their paths. Look at [how long the file is](https://github.com/Shopify/polaris-react/blob/master/src/components/index.ts) for polaris-react. 😱
3. `src/components/<Component>`
    - `<Component>.css` handles the styling for the component.
    - `<Component>.js` contains the React code for the component.
    - `README.md` documents the compnent with information like intended use, accessibility rules, etc.
    - `index.js` handles exporting the component from its directory.
    
This structure is so clean to me, and I think it will encourage good naming conventions and consistent documentation.
