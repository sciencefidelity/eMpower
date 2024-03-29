import { Rule } from '@sanity/types'
import { Books } from '../../components/twemoji'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: Books,
  groups: [
    {
      name: 'page',
      title: 'Page'
    },
    {
      name: 'settings',
      title: 'Settings'
    },
    {
      name: 'meta',
      title: 'Meta data'
    },
    {
      name: 'twitter',
      title: 'Twitter card'
    },
    {
      name: 'facebook',
      title: 'Facebook card'
    }
  ],
  fields: [
    {
      name: 'image',
      title: 'Feature image',
      type: 'image',
      options: {
        hotspot: true
      },
      group: 'page'
    },
    {
      name: 'imageData',
      title: 'Image data',
      type: 'imageData',
      group: 'page'
    },
    {
      name: 'title',
      title: 'Page title',
      type: 'string',
      group: 'page'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
      group: 'page'
    },
    {
      name: 'template',
      title: 'Template',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'grid',
        list: [
          { title: 'Page', value: 'page' },
          { title: 'Blog', value: 'blog' },
          { title: 'Contact', value: 'contact' }
        ]
      },
      initialValue: {
        title: 'Page',
        value: 'page'
      },
      validation: (Rule: Rule) => Rule.required(),
      group: 'settings'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      group: 'settings'
    },
    {
      name: 'settings',
      title: 'Page settings',
      type: 'pageSettings',
      group: 'settings'
    },
    {
      name: 'meta',
      title: 'Meta data',
      type: 'metaData',
      group: 'meta'
    },
    {
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'twitterCard',
      group: 'twitter'
    },
    {
      name: 'facebookCard',
      title: 'Facebook Card',
      type: 'facebookCard',
      group: 'facebook'
    },
    {
      name: 'feature',
      title: 'Feature this page',
      type: 'boolean',
      group: 'settings'
    }
  ],

  preview: {
    select: {
      title: 'title',
      author0: 'settings.authors.0.name',
      author1: 'settings.authors.1.name',
      author2: 'settings.authors.2.name',
      author3: 'settings.authors.3.name',
      media: 'image'
    },
    prepare: ({ title, author0, author1, author2, author3 }) => {
      const authors = [author0, author1, author2].filter(Boolean)
      const subtitle = authors.length > 0 ? `by ${authors.join(', ')}` : ''
      const hasMoreAuthors = Boolean(author3)
      return {
        title,
        subtitle: hasMoreAuthors ? `${subtitle}…` : subtitle
      }
    }
  }
}
