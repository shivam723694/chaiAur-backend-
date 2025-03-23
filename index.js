require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "shivam7348",
  "id": 106791774,
  "node_id": "U_kgDOBl2DXg",
  "avatar_url": "https://avatars.githubusercontent.com/u/106791774?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shivam7348",
  "html_url": "https://github.com/shivam7348",
  "followers_url": "https://api.github.com/users/shivam7348/followers",
  "following_url": "https://api.github.com/users/shivam7348/following{/other_user}",
  "gists_url": "https://api.github.com/users/shivam7348/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shivam7348/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shivam7348/subscriptions",
  "organizations_url": "https://api.github.com/users/shivam7348/orgs",
  "repos_url": "https://api.github.com/users/shivam7348/repos",
  "events_url": "https://api.github.com/users/shivam7348/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shivam7348/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shivam Kumar",
  "company": null,
  "blog": "",
  "location": "Noida ",
  "email": null,
  "hireable": null,
  "bio": "A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application",
  "twitter_username": null,
  "public_repos": 86,
  "public_gists": 0,
  "followers": 4,
  "following": 6,
  "created_at": "2022-06-03T02:49:46Z",
  "updated_at": "2025-03-07T04:49:33Z"
}

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("Shivam")
})

app.get('/login', (req, res) => {
    res.send('<h1> plese login </h1>')
}) 

app.get('/youtube', (req, res) => {
  res.send('<h2> Hello Shvam </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})