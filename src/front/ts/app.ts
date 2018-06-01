import { initMenu, initToggleMenu } from './_menu';
import { initPlayground } from './_playground';
import { initRouter } from './_router';
import { initTool } from './_tool';

window.addEventListener('DOMContentLoaded', () => {
  initMenu({ hidden: true });
  initToggleMenu();
  // initTool();
  initPlayground();

  // Init the router at the end to let the previous
  // modules react to the first `ON_NAVIGATE` event.
  initRouter();
});

/*

Naming convention
-----------------

initFoo
  A function that modifies the DOM or binds events on it.
  The function is exported by the module.

fooHandler
  A function that is executed as an event callback.
  Usually the function is not exported by the module.

ON_FOO
  Custom event name.
  The variable is exported by the module.

*/
