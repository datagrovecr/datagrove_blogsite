# Creating my first website with Vitepress
 Date: 10/16/2022

Developer: Raquel Abarca Espinoza

### Project name: [Datagrove blog website](https://github.com/datagrovecr/datagrove_blog_website)
A project with the objective of being a website to upload the blogpost of the developers of Datagrove

### What is Vitepress?
It is said that VitePress is VuePress (a combination of a minimalistic static site generator with a theming system and a default theme-optimized) little brother.

> #### What are the improvements that difference Vitepress from VuePress v1:
> - Leverages Vue 3's improved template static analysis to stringify static content as much as possible.
> - Faster dev server start
> - Faster hot updates
> - Faster build
> - Lighter page weight
>
> #### Other differences:
> VitePress is more opinionated and less configurable.
> VitePress is future-oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation and CSS variables for theming.
> You can find more info here: https://vitepress.vuejs.org/guide/what-is-vitepress
### What specifically do I use vitepress for?
I am using Vitepress to specifically work on creating a website, with only Vitepress I have the chance to create and design a functional site, in my case, a blog site in wich the developers can upload their own blogs with information about on what are they working, how they solve a problem or any other idea o documentation.

This website will be for Datagrove CR, and my inspiration is from the [Vue blog](https://blog.vuejs.org/) that is also built with VitePress, this site use Vitepress and other element and lenguaje like css, but the idea for now is only use Vitepress and markdown.
![image](https://user-images.githubusercontent.com/110420288/196104431-971f6b47-53e8-4735-a3de-33e1b8433a4e.png)

### Challenges I have faced

Understand what is Vitepress, how it work and learn how to use it. 
Creat a project from scratch was complicated, because I had never created one, so I didn’t know witch files I had to add, like the `.gitignore`.
Understad the code, I try to study, practice and test different code from different websites.
Another challenge related to the previous point, was find other variables of code for when some dont worked, for example, in the [guide](https://vitepress.vuejs.org/guide/theme-nav), the way to put change the title of the page was with `siteTitle: ‘My Custom Title’`, but that did not work for me, so I search how was that code on the [DatagroveCR website](https://github.com/datagrovecr/website/blob/main/docs/.vitepress/config.js) and I saw that they only use `title: My Cusom Title`.
I also had problems running the `npm run docs:dev`, first of all, because I always had use only `npm run dev`, but in this file, is necessary put de docs:dev, this because it is declare with that name.
The problem with running the code was not only the first time, every time that I close the code and another day want to run de code, I was having a problem because the website shows a error or just a white page.

<img width="304" alt="image" src="https://user-images.githubusercontent.com/110420288/196098778-b15b97c5-2a59-4905-85bc-d4c0c5282215.png">

I am working on solve this, but I think that the problem was hat I did not add the basic files and packages. 

### Things that I learned
First of all I learned about Vitepress, how to code, add images, logos and to change the title of the website.

Also, I learned that the markdow is basic for Vitepress, for example, my index is only Markdown and only with that have a nice look.
```
# Welcome
# To Datagrove Blog
### What you can find here?
In this website you will find blog post that our developers upload about what they learn, problems that they solve, and updates about their projects.
## Understanding OpenXML SDK
[Read more ->](blogpost\fabianmonday10th.md)
## Blog post temple
[Read more ->](blogpost\templeblog.md)
```

I learned that there are different tipes of menus that Vitepress offer to the developer, in my case I use a menu with different page with this code in the `.vitepress\theme\config.js` file:
```
import { defineConfig } from 'vitepress'
export default ({
    title: 'Datagrove Blog',
    description: 'Software That Does Good',
    themeConfig: {
        
        logo: '/bright_green_circle.png',
        nav: [
            { text: 'Home page', link: '/index' },
            {
              text: 'Menu',
              items: [
                { text: 'Item A', link: '/item-1' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
          ],
      }
})
```
Finally I learn that the order of the file actually matter, my file (for now) look like this:

<img width="196" alt="image" src="https://user-images.githubusercontent.com/110420288/196102138-f5628c4c-84e2-4d63-9577-4c42536dd8cc.png">

You can see that it’s important to maintain order, be friendly to the eye, facilitate the location and find the files. but in addition to this, it is important because if the root of our program is missing a file, our entire program will fail.

### Links with more info:

#### Markdown: 

https://paperhive.org/help/markdown

https://www.markdownguide.org/basic-syntax/

https://anvilproject.org/guides/content/creating-links

#### Vitepress:

https://vitepress.vuejs.org/

https://javascript.plainenglish.io/write-beautiful-documentation-quickly-with-vitepress-a0cc4e6d25

https://www.npmjs.com/package/vitepress

Example: https://blog.vuejs.org/

### List of tags

`typescript` `markdown` `blog` `datagrove` `vitepress` `website` `basic` `challenge` `project`