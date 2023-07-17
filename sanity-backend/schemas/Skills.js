export default {
  name: 'skills',
  type: 'document',
  title: 'Skills',
  fields: [
    {
      type: 'string',
      name: 'name',
      Title: 'My Skills',
    },
    {
      title: 'Technical Skills',
      name: 'techskills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'techname',
              title: 'Technology Name',
            },

            {
              title: 'Progress',
              name: 'progress',
              type: 'number',

              validation: (Rule) => Rule.precision(0).positive(),
              options: {
                decimalScale: 0,
                fixedDecimalScale: true,
                allowNegative: false,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Professional Skills',
      name: 'professionalskills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'skillname',
              title: 'Skill Name',
            },

            {
              title: 'Progress',
              name: 'progress',
              type: 'number',

              validation: (Rule) => Rule.precision(0).positive(),
              options: {
                decimalScale: 0,
                fixedDecimalScale: true,
                allowNegative: false,
              },
            },
          ],
        },
      ],
    },
  ],
}
