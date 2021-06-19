This is a ReactJs project with [Vite](https://vitejs.dev/), [RTK (Redux Toolkit)](https://redux-toolkit.js.org/), Typescript, Prettier and ESLint (with airbnb style guide) already configured.

## Getting Started

1. Clone the repository
2. Run `rm -rf .git` to delete the git information of the repository
3. Run `git init` to start a new Git repository
4. Update the package.json name property
5. Run `npm install`
6. Update the head with your app information in the index.html file (optional)
7. Enjoy

## Project folder config
The resolver of every folder is @folderName, E.G. @features imports the files in the features folder, don't forget add the export of every file in index.tsx  

* ### components
  Folder with every React component with their corresponding *[componentName].module.scss*.

* ### features
  Folder with every feature with a RTK slice and feature components slice, as a convention the name of every slice is featureName + Slice suffix, E.G. counterSlice.ts.

  In the counterSlice.ts file is a *slice* example.

* ### hooks
  Folder with the custom react hooks.

* ### pages
  Folder with every page.

* ### services
  Folder with every *RTK Query Api* config and queries, is needed just one file per endpoint.

  In the pokemonApi.ts file is a *service* example.

* ### store
  Folder with the **hooks** to wrap a typed useDispatch and useSelector and the **store** config with *RTK Query* middleware and reducer added.

* ### styles
  Folder with the global CSS file

* ### util
  Folder with the util functions, add one util per file.