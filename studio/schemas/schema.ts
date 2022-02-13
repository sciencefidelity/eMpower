import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './objects/blockContent'

// documents
import author from './documents/author'
import comment from './documents/comment'
import menu from './documents/menu'
import page from './documents/page'
import post from './documents/post'
import section from './documents/section'
import site from './documents/site'
import social from './documents/social'
import video from './documents/video'

// taxonomy
import category from './taxonomy/category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    blockContent,

    // documents
    author,
    comment,
    menu,
    page,
    post,
    section,
    site,
    social,
    video,

    // taxonomy
    category
  ])
})
