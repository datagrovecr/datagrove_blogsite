
# datagrove_blog_website
## blog website for datagrove

### How can I upload my blog post?

First, clone the repo:

> git clone https://github.com/datagrovecr/datagroce_blosite.git
> npm install
> You can run it locally with:
> npm run docs:dev

In the `blogposts` folder you can upload your blog post

If you want your post to have a preview on the main page, you must copy and paste the existing table, change the title, date, add the first paragraph or introduction of your blog and add the link of your github profile picture.

To deploy: The Datagrove Costa Rica website is hosted by Cloudflare, and any updates to the datagrovecr repo will deploy those updates to the website itself.

git add .
git commit -m "<insert message describing changes>"
git push

For updates:

- Add the blog to the file `blogposts` with the date as the name (rememeber to add .md).

- Go to `index.md` file tu upload the prewiew, you just need to copy and paste and change the information like the date, title and text.

- You can see and select the picture for your avatar in the file `public`.
License: MIT