import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'featured',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'restaurent',
      title: 'Restaurent',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'restaurent'}],
        },
      ],
    }),
  ],
})
