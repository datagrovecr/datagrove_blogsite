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
                { text: 'Our team', link: '/team.md' },
                { text: 'Item B', link: '/item-2' },
                { text: 'Item C', link: '/item-3' }
              ]
            }
          ],
      }
})