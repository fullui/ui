import { z } from 'astro:content'

export default z
  .object({
    seo: z.object({
      title: z.string().nullable(),
      description: z.string().nullable(),
      image: z.object({
        src: z.string().nullable(),
        alt: z.string().nullable(),
      }),
    }),
    sections: z.any(),
  })
  .partial()
  .nullable()