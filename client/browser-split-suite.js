// The following imports are not recommended, because they don't let bundlers, like Webpack and Rollup, trim unused code from the final bundle:
// - `import * as SplitSuiteModule from '@splitsoftware/browser-suite';`
// - `const { SplitSuite, SplitRumAgent, webVitals } = require('@splitsoftware/browser-suite');`

export { SplitSuite, SplitRumAgent } from '@splitsoftware/browser-suite';
