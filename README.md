# ngc unused imports

This is the repo for [angular-cli 8320 issue](https://github.com/angular/angular-cli/issues/8320)

Who cares about which package manager you are using, you can run either `npm install` or `yarn` at root.

Then, you have to install each package deps using lerna `lerna bootstrap`

When ready just run `npm run build` or `yarn run build` it will trigger ngc transpilation in each package.

notice that in v 4.X.X output contains

```javascript
const core_1 = require("@angular/core");
```

And no other imports

And v 5.X.X

```javascript
const core_1 = require("@angular/core");
const ngcui_interfaces_1 = require("ngcui-interfaces");
```

Even if `ngcui_interfaces_1` is unused

EDIT 1

I Added typescript transpilation command. Run `npm run tsc` or `yarn run tsc` to transpile. Dist only contains

```javascript
const core_1 = require("@angular/core");
```

So I don't think this is a TypeScript issue

EDIT 2

I tried the same thing with typings from typeRoot `./node_modules/@types` imports are generated

```javascript
const core_1 = require("@angular/core");
const ngcui_interfaces_1 = require("ngcui-interfaces");
const express_1 = require("express");
```

EDIT 3

Specifying to the Angular Compiler to interpret the anotations as decorators allows to interpret them as in Angular4.

`tsconfig-aot.json`

```json
{
  ...
  "angularCompilerOptions": {
    ...
    "annotationsAs": "decorators"
  }
}
```

Generated imports

```javascript
const core_1 = require("@angular/core");
```
