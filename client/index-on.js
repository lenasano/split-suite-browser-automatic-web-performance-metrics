/* Dynamically import a local module, which in turn imports '@splitsoftware/browser-rum-agent' for tree-shaking, resulting in a smaller app */
import('./browser-split-suite').then(({ SplitSuite, SplitRumAgent }) => {

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

    console.log('on: SDK ready');
    
    let imageSize = client.getTreatment(process.env.FEATURE_FLAG_IMAGE_SIZE);
    console.log(`on: image size is ${imageSize}`)

    // if the query parameter is not one of the the imgur size modifiers, then don't use it
    if( ! ['b', 's', 't', 'm', 'l', 'h'].includes(imageSize) ) imageSize = '';

    document.getElementById('street_img').src = "https://i.imgur.com/q9b5x97" + imageSize + ".png";
  });

}).catch(error => {
  console.log('An error occurred while loading the module: ' + error);
});
