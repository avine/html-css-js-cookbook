import { initPlayground } from './_playground';
import { initRouter } from './_router';
import { initSidebar, initToggleSidebar } from './_sidebar';
import { initSpinner } from './_spinner';
import { initToolbox } from './_toolbox';

window.addEventListener('DOMContentLoaded', () => {
  initSidebar({ hidden: true });
  initToggleSidebar();
  initSpinner();
  initToolbox();
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
