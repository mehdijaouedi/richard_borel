export default {
    name: 'mr_Rodolphe_Meyer',
    type: 'document',
    title: 'mr_Rodolphe_Meyer',
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