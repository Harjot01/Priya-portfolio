export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'project',
      description: 'It contains all the projects that I have built so far',
    },
    {
      title: 'Navigation Categories',
      name: 'navigation',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Projects Data',
      name: 'projectdata',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'image',
              name: 'projectimage',
              title: 'Project Image',
            },
            {
              type: 'string',
              name: 'title',
              title: 'Project Title',
              options: {
                isHighlighted: true,
              },
            },
            {
              type: 'string',
              name: 'category',
              title: 'Project Category',
            },
            {
              type: 'text',
              name: 'description',
              title: 'Project Description',
            },
            {
              type: 'url',
              name: 'githuburl',
              title: 'Github Reporsitory Link',
            },
            {
              type: 'url',
              name: 'liveurl',
              title: 'Live Project Link',
            },
          ],
        },
      ],
    },
  ],
}
