export default {
    name: 'comment_vendre',
    type: 'document',
    title: 'comment_vendre',
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