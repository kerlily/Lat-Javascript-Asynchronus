// setTimeout(function() {
//     document.body.style.backgroundColor = 'green';
//     setTimeout(function() {
//         document.body.style.backgroundColor = 'yellow';
//             setTimeout(function() {
//                 document.body.style.backgroundColor = 'red';
//                 setTimeout(function() {
//                     document.body.style.backgroundColor = 'blue';
//                 },1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// callback version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// requestCallback(
//     'https://github.com/kerlily',
//     function (response) {
//     console.log('it works', response);
// }, function (error) {
//     console.log('error', error);
// });

// Promise version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 2000) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

// requestPromise("movie.com")
//   .then((response) => {
//     console.log("it works", response);
//     requestPromise("movie.com")
//       .then((response) => {
//         console.log("it works", response);
//         requestPromise('movie.com')
//         .then((response) => {
//             console.log('it works', response);
//             requestPromise('movie.com')
//                 .then((response) => {
//                     console.log('it works', response);
//                 })
//                 .catch((error) => {
//                     console.log('error', error);    
//                 })  
//         })
//         .catch((error) => {
//             console.log('error', error);    
//         })
//       })
//       .catch((error) => {
//         console.log("error", error);
//       });
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });



  requestPromise('movie.com')
  
  .then((result) => {
    console.log(result);
    console.log('page 1');
    return requestPromise('movie.com');
  })
  .then(() => {
    console.log('page 2');
    return requestPromise('movie.com');
  })
  .then(() => {
    console.log('page 3');
    return requestPromise('movie.com');
  })
  .catch((err) => {
    console.log(err);
  });

new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
      resolve('hello');
        resolve(() => {
          'berhasil';
        })    
  })
  
  })
