# typescript-demo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Briefly What is Typescript
* Superset of Javascript / Transpiler
* Compiles to plain Javascript
* Optional BUT DESIRABLE Type System
* Good Tooling
* Makes code more able to refactor with confidence
* Code Safety

## About this Demo
This demo goes through the process of taking a project and adding Typescript to the build process.  There are several
tools that are going to be used:

- TSD: is the Typescript Definition Manager
- grunt-typescript: The grunt typescript plugin to automate builds

## Videos on Typescript
* [Anders Heijlsberg presentation:](https://www.youtube.com/watch?v=Ut694dsIa8w)
* [Typescript Demystified](https://www.youtube.com/watch?v=kb7tvaBJeMs)
* [Jonathon Turner ng-conf 2015](https://www.youtube.com/watch?v=Xw93oketp18)
* [Sean Hess Using Angular and Typescript](https://www.youtube.com/watch?v=u6TeBM_SC8w)
*    [Github Example: ](https://github.com/seanhess/angularjs-typescript)

## Definition files
These are files that have type definitions for common libraries. 
See these at [https://github.com/DefinitelyTyped](ttps://github.com/DefinitelyTyped)


## Preparation
1. Create yo angular project (demo project is typescript_demo), see https://github.com/yeoman/generator-angular. 
Add lodash for the fun of it, add this to scripts in index.html.  Run the bower install it: 
`bower install lodash -S`

2. Install Typescript transpiler globally: `npm install -g typescript`

3. Install Typescript Definition Manager: [https://github.com/DefinitelyTyped/tsd](https://github.com/DefinitelyTyped/tsd)
`npm install tsd@next -g`

4. Assuming you created a project __typescript_demo__ above, navigate to that directory
and install the typescript grunt plugin into that directory. 
`npm install grunt-ts --save-dev`

5. Run `tsd init` which creates the following:
  * a Typings folder for storing definitions file
  * tsd.json This is like a bower.json file for type definition files
  * typings/tsd.d.ts This seems to be the convention for writing all your global
  * Type Definition Files in one spot then referencing them

6. Initialize The typescript definition files with some defaults. I'll include jquery, angular, and lodash.  In 
the command below "-ros" means "resolve overwrite save"
  * `tsd install angular`
  * `tsd install jquery`
  * `tsd install lodash`
  * or do all at once: `tsd install angular jquery lodash -ros`

7. change about.js to about.ts and begin.

