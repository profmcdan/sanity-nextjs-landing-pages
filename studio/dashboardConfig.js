export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dcabda9972f8a62b0204e82',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mm3yk3ny',
                  apiId: 'e09f2922-648a-4c62-8feb-cc58b26251e5'
                },
                {
                  buildHookId: '5dcabda9020d4c5f08dc64bf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yv1x391c',
                  apiId: 'b29c95ab-e528-49e2-b398-413054555aa0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/profmcdan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yv1x391c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
