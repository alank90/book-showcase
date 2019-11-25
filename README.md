# Default starter for Gridsome
[Taken from "Building a Showcase site with Gridsome + Netlify"]( https://medium.com/the-web-tub/building-a-showcase-site-with-gridsome-netlify-977d51432838)

This is the project you get when you run `gridsome create new-project`.

**Note**: To enable page-query & static-query tags from GraphQL in .vue file
add this to settings.json 

"vetur.grammar.customBlocks": {
        "page-query": "graphql",
        "static-query": "graphql"

 }

 and then *Ctrl + Shift + P -> vetur: Generate grammar* and look for drop down command

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌
