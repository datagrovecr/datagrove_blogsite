import { defineConfig } from 'vitepress'


export default defineConfig({

    title: 'Datagrove Blog',
    description: 'Software That Does Good',

    themeConfig: {
        
        logo: '/bright_green_circle.png',

        nav: [
            { text: 'Home page', link: '/index' },
            { text: 'More about Datagrove', link: 'https://datagrovecr.com' },
              ]
            }
      })