export default {
    name: 'educationbackground',
    type: 'document',
    title: 'Education &  Experience',
    fields: [
      {
        type: 'string',
        name: 'name',
        Title: 'Background',
      },
      {
        title: 'Education',
        name: 'educationdata',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              
              {
                type: 'string',
                name: 'coursename',
                title: 'Course/Degree Name',
                options: {
                  isHighlighted: true,
                },
              },
              
              {
                type: 'string',
                name: 'universityname',
                title: 'School/University Name',
              },
              {
                type: 'text',
                name: 'description',
                title: 'Add Some Description',
              },
            ],
          },
        ],
      },
      {
        title: 'Experience',
        name: 'experiencedata',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              
              {
                type: 'string',
                name: 'designationname',
                title: 'Designation Name',
                options: {
                  isHighlighted: true,
                },
              },
              
              {
                type: 'string',
                name: 'companyname',
                title: 'Company Name',
              },
              {
                type: 'text',
                name: 'description',
                title: 'Add Some Description',
              },
            ],
          },
        ],
      },
    ],
  }
  