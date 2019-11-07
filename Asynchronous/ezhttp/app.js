const http = new easyHTTP;
const data = {
  title: "Custome Post",
  body: "this is a custom post"
};
// // Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',
//   function (err, posts) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(posts);
//     }
//   });

// console.log(posts);

// // Get single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//   function (err, posts) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(posts);
//     }
//   });

// console.log(posts);


// // Create Data



// // Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
//   function (err, post) {
//     if (err) {
//       console.log(err)

//     } else {
//       console.log(post);

//     }
//   });

// // Update data

http.put('https://jsonplaceholder.typicode.com/posts/1',
  data, function (err, post) {
    if (err) {
      console.log(err)

    } else {
      console.log(post);
    }
  });


// delete
//  http.delete('https://jsonplaceholder.typicode.com/posts/1',
//  function(err ,posts){
//    if(err){
//      console.log(err)
//    }else{
//      console.log(posts);
//    }
// });


