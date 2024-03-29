document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);

document.getElementById('button3').addEventListener('click',getExternal);

// get local text data
function getText(){
  fetch('test.txt')
  .then(function(res){
  return res.text();
  })
  .then(function (data){
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err){
    console.log(err)
  });
}

// get local json data
function getJson(){
  fetch('posts.json')
  .then(function(res){
  return res.json();
  })
  .then(function (data){
    console.log(data);
    let output = '';
    data.forEach(function(post){
      console.log(post.title);
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  });
}

// get from external
function getExternal(){
  fetch('https://api.github.com/users')
  .then(function(res){
  return res.json();
  })
  .then(function (data){
    console.log(data);
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err){
    console.log(err)
  });
}