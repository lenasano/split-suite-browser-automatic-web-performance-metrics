/* Statically import '@splitsoftware/browser-suite' from NPM */
import { SplitSuite, SplitRumAgent } from '@splitsoftware/browser-suite';

const client = SplitSuite({
  core: {
    authorizationKey: process.env.CLIENT_SIDE_SDK_KEY,

    // In this example, we get the user key from URL query parameter `id`
    key: new URLSearchParams(window.location.search).get('id'),
    // Specifying the traffic type for the user key is optional, the value is 'user' by default
    trafficType: 'user'
  }
}).client();

client.on(client.Event.SDK_READY, function() {
  console.log('SDK ready');
});
