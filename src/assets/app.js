import { bootstrapMenu } from './_actions';
import { bootstrapRouter } from './_router';

window.addEventListener('DOMContentLoaded', () => {
  bootstrapMenu();
  bootstrapRouter();
});
