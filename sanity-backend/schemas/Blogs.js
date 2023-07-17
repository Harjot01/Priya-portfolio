export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
        name: 'blogurl',
        type: 'url',
        title: 'For time being adding url of your blog'
    },


    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description'
    },


    {
      title: 'Blog Image',
      name: 'blogimage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },

  ]
}