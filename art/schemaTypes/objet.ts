export default {
  name: 'objet',
  type: 'document',
  title: 'Objet',
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