/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/manzur1990
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

login: "manzur1990",
id: 46169161,
node_id: "MDQ6VXNlcjQ2MTY5MTYx",
avatar_url: "https://avatars2.githubusercontent.com/u/46169161?v=4",
gravatar_id: "",
url: "https://api.github.com/users/manzur1990",
html_url: "https://github.com/manzur1990",
followers_url: "https://api.github.com/users/manzur1990/followers",
following_url: "https://api.github.com/users/manzur1990/following{/other_user}",
gists_url: "https://api.github.com/users/manzur1990/gists{/gist_id}",
starred_url: "https://api.github.com/users/manzur1990/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/manzur1990/subscriptions",
organizations_url: "https://api.github.com/users/manzur1990/orgs",
repos_url: "https://api.github.com/users/manzur1990/repos",
events_url: "https://api.github.com/users/manzur1990/events{/privacy}",
received_events_url: "https://api.github.com/users/manzur1990/received_events",
type: "User",
site_admin: false,
name: "Jorge Manzur",
company: null,
blog: "",
location: "Lafayette, Louisiana",
email: null,
hireable: null,
bio: "Web30 @ Lambda School ",
public_repos: 35,
public_gists: 0,
followers: 0,
following: 11,
created_at: "2018-12-26T20:18:43Z",
updated_at: "2020-05-07T19:38:53Z"




   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
  // axios.get('https://api.github.com/users/manzur1990')
  //   .then(response => {
      
      

//  const cards = document.querySelector('.cards')



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">                                  
  <img src={image url of user} />                   
  <div class="card-info">                          
    <h3 class="name">{users name}</h3>              
    <p class="username">{users user name}</p>        
    <p>Location: {users location}</p>                
    <p>Profile:                                     
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>         
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>                           
  </div>
</div>
*/
const newCard = document.querySelector('.cards')

axios.get('https://api.github.com/users/manzur1990')
.then(res => {
  const myCard = gitHubCardMaker(res.data)
 newCard.appendChild(myCard)
})

.catch(err =>{
  console.log("error, info not found", err)
})


function gitHubCardMaker(userData){
//creating elements
const card = document.createElement('div')
const profImg = document.createElement('img')
const cardInfo = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const location = document.createElement('p')
const profile = document.createElement('p')
const gitLink = document.createElement('a')
const followeres = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')

//appending elements
card.appendChild(profImg)
card.appendChild(cardInfo)
cardInfo.appendChild(name)
cardInfo.appendChild(username)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
profile.appendChild(gitLink)
cardInfo.appendChild(followeres)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)

//adding styles
card.classList.add('card')
cardInfo.classList.add('card-info')
name.classList.add('name')
username.classList.add('username')

//adding content
profImg.src = userData.avatar_url
name.textContent = userData.name
username.textContent = userData.login
location.textContent = `Location: ${userData.location}`
profile.textContent= `Profile: ${userData.url}`
followeres.textContent = `Followers: ${userData.followers}`
following.textContent = `Following: ${userData.following}`
bio.textContent = `Bio: ${userData.bio}`

return card
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  tetondan,
  dustinmyers,
  justsml,
  luishrd,
  bigknell,
];





