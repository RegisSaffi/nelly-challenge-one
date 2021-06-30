function getUsers() {
    var ul = document. getElementById("list");

    fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from response

    data.forEach(element => {
      

        //Creating individual list item

        var li = document.createElement("li");
        var img=document.createElement('img')
        var imgHolder=document.createElement('div')
        var txtHolder=document.createElement('div')
        var btnHolder=document.createElement('div')
        var name=document.createElement('h4')
        var email=document.createElement('p')
        var button=document.createElement('button')
    
        li.setAttribute('class','list-item');
        txtHolder.setAttribute('class','list-item-content')
        btnHolder.setAttribute('class','view')

        img.setAttribute("src","https://ui-avatars.com/api/?background=random&name="+element.name)
        img.setAttribute('class','list-item-image ')
        imgHolder.appendChild(img)

        button.innerHTML="View posts"
        btnHolder.appendChild(button)

        name.innerHTML=element.name
        email.innerHTML=element.email

        txtHolder.appendChild(name)
        txtHolder.appendChild(email)

        li.appendChild(imgHolder)
        li.appendChild(txtHolder)
        li.appendChild(btnHolder)

    
    
        ul.appendChild(li)

        button.onclick=((e)=>{
            window.location.href="posts.html?id="+element.id
        })
    });
    
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong while loading users.', err);
});

}

//Getting user posts

function getPosts(){

const urlParams = new URLSearchParams(window.location.search);
const id= urlParams.get('id');

var ul = document. getElementById("list");

fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts').then(function (response) {
// The API call was successful!
return response.json();
}).then(function (data) {
// This is the JSON from response

data.forEach(element => {
  
    //Creating individual list item

    var li = document.createElement("li");
    var txtHolder=document.createElement('div')
    var title=document.createElement('h5')
    var body=document.createElement('p')

    li.setAttribute('class','list-item');
    txtHolder.setAttribute('class','list-item-content')

    title.innerHTML=element.title
    body.innerHTML=element.body

    txtHolder.appendChild(title)
    txtHolder.appendChild(body)

    li.appendChild(txtHolder)



    ul.appendChild(li)
});

}).catch(function (err) {
// There was an error
console.warn('Something went wrong while loading users.', err);
});


}