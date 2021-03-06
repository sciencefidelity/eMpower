import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import facebookCard from './objects/facebookCard'
import imageData from './objects/imageData'
import metaData from './objects/metaData'
import pageSettings from './objects/pageSettings'
import portableText from './objects/portableText'
import socialLinks from './objects/socialLinks'
import twitterCard from './objects/twitterCard'
import youtube from './objects/youtube'

// documents
import author from './documents/author'
import comment from './documents/comment'
import navigation from './documents/navigation'
import page from './documents/page'
import photography from './documents/photography'
import post from './documents/post'
import section from './documents/section'
import settings from './documents/settings'
import video from './documents/video'

// taxonomy
import tag from './taxonomy/tag'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // objects
    facebookCard,
    imageData,
    metaData,
    pageSettings,
    portableText,
    socialLinks,
    twitterCard,
    youtube,

    // documents
    author,
    comment,
    navigation,
    page,
    photography,
    post,
    section,
    settings,
    video,

    // taxonomy
    tag
  ])
})
