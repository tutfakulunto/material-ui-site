'use strict';

const helper = {};

helper.buildFetchOptions = function(options, data) {
   const defaultOptions = {
       method: 'GET',
       headers: {
           'Content-Type': 'application/json',
       }
   };

   options = Object.assign(defaultOptions, options);

   if (data && typeof data === 'object' && Object.keys(data).length > 0) {
       options.body = JSON.stringify(data);
   }
   else if (data && typeof data !== 'object') {
       options.body = data;
   }

   return options;
}

helper.fetch = function(url, options = {}, data = {}) {
   options = helper.buildFetchOptions(options, data);

   return fetch(url, options).then(response => {
       // Return nothing if no content.
       if (response.status === 204) {
           return;
       }

       // Ensure the request was successful.
       if (response.status >= 200 && response.status < 300) {
           return response.json();
       }

       // The request failed.
       throw new Error(`${options.method} fetch error to ${url}: ${response.statusText}`);
   });
};

helper.fetchRaw = function(url, options = {}, data = {}) {
   options = helper.buildFetchOptions(options, data);

   return fetch(url, options);
};

helper.get = function(url, options = {}) {
   options.method = 'GET';

   return helper.fetch(url, options);
};

helper.post = function(url, data = {}, options = {}) {
   options.method = 'POST';

   return helper.fetch(url, options, data);
};

helper.put = function(url, data = {}, options = {}) {
   options.method = 'PUT';

   return helper.fetch(url, options, data);
};

helper.delete = function(url, options = {}) {
   options.method = 'DELETE';

   return helper.fetch(url, options);
};

export default helper;