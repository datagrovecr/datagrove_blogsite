import { defineConfig } from 'vitepress'

export default ({

    title: 'Datagrove Blog',
    base: '/',
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
          ]
      }
})