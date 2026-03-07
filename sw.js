// sw.js
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
      // If the page is not found (404), redirect to error
      if (response.status === 404) {
        return Response.redirect('/request-error', 302);
      }
      return response;
    })
  );
});
