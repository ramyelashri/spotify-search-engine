# Spotify Search Engine

An Angular 2 app that consumes Spotify API to find artists, and their albums and tracks

[![Angular 2](http://fountainjs.io/assets/imgs/angular2.png)](https://angular.io/)

## Requirements

### Node 4+ && NPM 3+
This generator is targeted to be used with Node >= 4.0.0 and NPM => 3.0.0. You can check your version number with the command
```
node --version && npm --version
```

### gulp-cli
Install [`gulp-cli`](https://www.npmjs.com/package/gulp-cli)
```bash
npm install -g gulp-cli
```


### Install

```bash
git clone  https://github.com/ramyelashri/spotify-search-engine
cd spotify-search-engine
npm install
```

### Usage

#### Use npm scripts

- `npm run build` to build an optimized version of your application in /dist
- `npm run serve` to launch a browser sync server on your source files
- `npm run serve:dist` to launch a server on your optimized application
- `npm run test` to launch your unit tests with Karma
- `npm run test:auto` to launch your unit tests with Karma in watch mode


#### Or Gulp tasks

If you have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global packages you can use equivalent:

- `gulp` or `gulp build`
- `gulp serve`
- `gulp serve:dist`
- `gulp test`
- `gulp test:auto`

**If you don't have [`gulp-cli`](https://www.npmjs.com/package/gulp-cli) installed in global, you should have this error:**
> /usr/local/lib/node_modules/gulp/bin/gulp.js:121
    gulpInst.start.apply(gulpInst, toRun);
TypeError: Cannot read property 'apply' of undefined

### Sub-generators

Few sub-generators are available. You can see the full list by running `yo --generators`.
Each generator has 2 options:
- You can set the name of the generated item with `--name`
- You can set the path of the generated item with `--dir`

**Example:**

```
yo fountain-angular2:component --name myComponent --dir components/game
```

### [Start development](http://fountainjs.io/doc/usage/#use-npm-scripts)


## [Changelog](https://github.com/FountainJS/generator-fountain-angular2/releases)


## [Contributing](http://fountainjs.io/doc/contributing)