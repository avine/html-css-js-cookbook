export function bootstrapServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then(() => console.log('Service Worker Registered')); // tslint:disable-line:no-console
  }
}
