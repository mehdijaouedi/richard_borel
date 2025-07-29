export default {
    name: 'presentation',
    type: 'document',
    title: 'presentation',
    fields: [
      {
        name: 'nom',
        type: 'string',
        title: 'Name',
      },
     
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{ type: 'reference', to: [{ type: 'media' }] }],
      },
     
      {
        name: 'dbId',
        type: 'string',
        title: 'Database ID',
      },
    ],
  };