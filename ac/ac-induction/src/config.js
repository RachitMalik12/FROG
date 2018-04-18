// @flow

export default {
  type: 'object',
  properties: {
    categories: {
      title: 'List of categories',
      type: 'array',
      items: { type: 'string' }
    },
    examples: {
      title: 'New example',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: {
            title: 'url',
            type: 'string'
          },
          category: {
            title: 'category',
            type: 'string'
          }
        }
      }
    }
  }
};
