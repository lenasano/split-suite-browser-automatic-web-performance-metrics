/* Dynamically import a local module, which in turn imports '@splitsoftware/browser-rum-agent' for tree-shaking, resulting in a smaller app */
import('./browser-split-suite').then(({ SplitSuite, SplitRumAgent, webVitals }) => {

  const suite = SplitSuite({
    core: {
      authorizationKey: process.env.CLIENT_SIDE_SDK_KEY,
  
      // In this example, we get the user key from URL query parameter `id`
      key: new URLSearchParams(window.location.search).get('id'),
      // Specifying the traffic type for the user key is optional, the value is 'user' by default
      trafficType: 'user'
    }
  });
  
  SplitRumAgent.register(webVitals());

}).catch(error => {
  console.log('An error occurred while loading the module: ' + error);
});
