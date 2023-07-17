export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      title: 'About Author Image',
      name: 'authorimage',
      type: 'image',
      description: 'Image for displaying on the about page',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },

    {
      title: 'Development Roles',
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
    },

    {
      name: 'content',
      title: 'About me',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                          be they blind, color-blind, low-sighted; 
                          alternative text is of great help for those 
                          people that can rely on it to have a good idea of 
                          what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: 'github',
      type: 'url',
      title: 'Enter github url',
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Enter instagram url',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'Enter linkedin url',
    },
    {
      name: 'snapchat',
      type: 'url',
      title: 'Enter snapchat url',
    },
  ],
}
