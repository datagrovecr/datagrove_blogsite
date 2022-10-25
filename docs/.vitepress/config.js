import { defineConfig } from 'vitepress'


export default defineConfig({

    title: 'Datagrove Blog',
    description: 'Software That Does Good',

    themeConfig: {
        
        logo: '/bright_green_circle.png',

        sidebar: [
            {
            text: 'Blog menu',
            items: [
              {text: 'All', link: '/all_blogs'},
            ]
            },
            {
            text: 'Topics',
            items: [
              { text: 'Vitepress', link: '/blog_topics/vitepress' },
              { text: 'OpenXML SDK', link: '/blog_topics/openxml_sdk' },
            
            ]
          }
        ],

        nav: [
            { text: 'Home page', link: '/index' },
            { text: 'Our team', link: 'https://datagrovecr.com/about/' },
            { text: 'Blogs', link: '/all_blogs' },
              ]
            }
      })