export default {
  name: "product",
  title: "Proizvod",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv proizvoda",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Cena (RSD)",
      type: "number",
      validation: (Rule: any) => Rule.positive(),
    },
    {
      name: "comparePrice",
      title: "Stara cena (RSD) – opciono",
      type: "number",
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt tekst",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "shortDescription",
      title: "Kratki opis (za kartice)",
      type: "text",
      rows: 2,
    },
    {
      name: "description",
      title: "Opis proizvoda",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "category",
      title: "Kategorija",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "volume",
      title: "Zapremina / Količina",
      type: "string",
    },
    {
      name: "ingredients",
      title: "Sastojci",
      type: "text",
    },
    {
      name: "howToUse",
      title: "Kako se koristi",
      type: "text",
    },
    {
      name: "videos",
      title: "Video snimci",
      type: "array",
      of: [
        {
          type: "file",
          title: "Video",
          options: { accept: "video/*" },
          fields: [
            {
              name: "caption",
              title: "Opis (opciono)",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "badge",
      title: "Bedž (npr. NOVO, BESTSELLER)",
      type: "string",
    },
    {
      name: "featured",
      title: "Istaknuti proizvod",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "inStock",
      title: "Na stanju",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "images.0",
      price: "price",
    },
    prepare({ title, media, price }: any) {
      return {
        title,
        subtitle: price ? `${price} RSD` : "",
        media,
      };
    },
  },
};
