# Demo - How to use WebdriverIO

- [Environment](#environment)
- [Expect(s)](#expects)
- [Execution](#execution)
- [Report](#report)

## Environment

Use the nomenclature below:

- development
- test
- production

To set the `NODE_ENV` using the command below:

- Windows

```cmd
set NODE_ENV=production && npm test
```

- Linux/Mac

```shell
NODE_ENV=production npm run
```

## Expect(s)

The **WDIO** testrunner comes with a built in [assertion](https://webdriver.io/docs/assertion.html) library that allows you to make powerful assertions on various aspects of the browser or elements within your (web) application. It extends [Jests Matchers](https://jestjs.io/docs/en/expect) functionality with additional, for e2e testing optimized, matchers.

## Execution

Use the command below to execute the script(s):

- All scripts:

```bash
# cucumber
node test:bdd
# spec files
node test:bdd
```

- Run a single spec:

```bash
# cucumber
node run bdd:file features/form.feature
# spec file
node run spec:file specs/formspec.js
```

## Report

- BDD

After the execution, open the file: `reports/html/index.html`

- Spec

After the execution, run the command below:

```sh
npm run report
```
