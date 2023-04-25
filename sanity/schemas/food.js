import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'food',
  title: 'food',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'foodCategory',
      title: 'foodCategory',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
      name: 'price',
      title: 'price',
      type: 'number',
    }),
    defineField({
      name: 'mrp',
      title: 'mrp',
      type: 'number',
    }),
    defineField({
      name: 'restaurent',
      title: 'restaurent',
      type: 'reference',
      to: {type: 'restaurent'},
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
