import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurent',
  title: 'restaurent',
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
      name: 'rating',
      title: 'rating',
      type: 'number',
      validation:(Rule)=>
        Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a value between 1 and 5")
      ,
    }),
    defineField({
      name: 'address',
      title: 'address',
      type: 'text',
    }),
    defineField({
      name: 'foodCategory',
      title: 'foodCategory',
      type: 'reference',
      to: {type: 'category'},
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
