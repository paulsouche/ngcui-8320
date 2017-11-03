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