import CJS from './cjs-export.js';
import ES6 from './es6-export.js';

Promise.all([
  import('./cjs-export.js'),
  import('./es6-export.js'),
]).then(([ dynCJS, dynES6 ]) => {
  const errors = [];
  if (dynCJS.default !== CJS) {
    errors.push('!! Spec vialoted, two ways of importing the default export differ');
  }
  if (dynES6.default !== ES6) {
    errors.push('!! Spec vialoted, two ways of importing the default export differ');
  }

  if (errors.length) {
    throw new Error(errors.join(' && '));
  } else {
    console.log('ok');
  }
}).catch(rethrowAsync);

function rethrowAsync(err) {
  setTimeout(() => { throw err; }, 1);
}
