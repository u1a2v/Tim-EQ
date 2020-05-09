export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5eb6566289c051527d346fa4',
                  title: 'Sanity Studio',
                  name: 'Tim-EQ-studio',
                  apiId: '24854544-cf9f-4978-a858-1341674355ee'
                },
                {
                  buildHookId: '5eb65662588ceac8a4bfb75a',
                  title: 'Blog Website',
                  name: 'Tim-EQ',
                  apiId: 'fec0cfe2-dde8-44e5-b66a-3f4512363f5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/u1a2v/Tim-EQ',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Tim-EQ.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
