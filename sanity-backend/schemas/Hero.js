export default {
  name: 'home',
  type: 'document',
  title: 'Home',
  fields: [
    {
      title: 'Author Image',
      name: 'authorimage',
      type: 'image',
      description: 'Image for displaying on the home page',
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
      name: 'tagline',
      type: 'string',
      title: 'Tag line',
    },
    {
      name: 'downloadcv',
      type: 'file',
      title: 'View my CV',
    },
    {
      name: 'githuburl',
      type: 'url',
      title: 'View my github profile',
    },

    {
      title: 'Brand Images',
      name: 'brands',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
