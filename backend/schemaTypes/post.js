import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'blockContent',
    }),
    defineField({
      name: 'aiInDiagnosticImaging',
      title: 'AI in Diagnostic Imaging',
      type: 'blockContent',
    }),
    defineField({
      name: 'predictiveAnalytics',
      title: 'Predictive Analytics and Disease Prevention',
      type: 'blockContent',
    }),
    defineField({
      name: 'personalizedTreatmentPlans',
      title: 'Personalized Treatment Plans',
      type: 'blockContent',
    }),
    defineField({
      name: 'drugDiscovery',
      title: 'Drug Discovery and Research',
      type: 'blockContent',
    }),
    defineField({
      name: 'aiInTelemedicine',
      title: 'AI in Telemedicine',
      type: 'blockContent',
    }),
    defineField({
      name: 'ethicalConsiderations',
      title: 'Ethical Considerations',
      type: 'blockContent',
    }),
    defineField({
      name: 'futureOfAI',
      title: 'The Future of AI in Healthcare',
      type: 'blockContent',
    }),
    defineField({
      name: 'conclusion',
      title: 'Conclusion',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
