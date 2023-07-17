export default {
  name: 'certificates',
  type: 'document',
  title: 'Certificates',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      title: 'Certificate Image',
      name: 'certificateImg',
      type: 'image',
    },
    {
      title: 'Certificate Url',
      name: 'certificateUrl',
      type: 'url',
    },
  ],
}
