import { useMeta } from 'vue-meta'

interface MetaOptions {
  title: string
  description: string
  image?: string
  url?: string
}

export const usePageMeta = ({
  title,
  description,
  image = '/og-image.jpg',
  url = window.location.href
}: MetaOptions) => {
  return useMeta({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]
  })
}