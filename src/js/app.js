import { initMenu, initToggleMenu } from './_menu';
import { initTool } from './_tool';
import { initRouter } from './_router';

window.addEventListener('DOMContentLoaded', () => {
  initMenu({ hidden: true });
  initToggleMenu();
  initTool();
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
