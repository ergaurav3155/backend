require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData ={
    "login": "ergaurav3155",
    "id": 139613687,
    "node_id": "U_kgDOCFJV9w",
    "avatar_url": "https://avatars.githubusercontent.com/u/139613687?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ergaurav3155",
    "html_url": "https://github.com/ergaurav3155",
    "followers_url": "https://api.github.com/users/ergaurav3155/followers",
    "following_url": "https://api.github.com/users/ergaurav3155/following{/other_user}",
    "gists_url": "https://api.github.com/users/ergaurav3155/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ergaurav3155/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ergaurav3155/subscriptions",
    "organizations_url": "https://api.github.com/users/ergaurav3155/orgs",
    "repos_url": "https://api.github.com/users/ergaurav3155/repos",
    "events_url": "https://api.github.com/users/ergaurav3155/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ergaurav3155/received_events",
    "type": "User",
    "site_admin": false,
    "name": "gaurav sharma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 1,
    "following": 7,
    "created_at": "2023-07-15T06:58:45Z",
    "updated_at": "2024-03-29T13:09:10Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!wdfwdfcwdecwde')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at padale padaale beta  </h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2> padale padaale beta </h2>')
})

app.get('/github',(req,res) => {
    res.json(githubData)
})

app.get('/drive',(req,res) => {
  res.send('githubDatagpoookcndkjcn')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})