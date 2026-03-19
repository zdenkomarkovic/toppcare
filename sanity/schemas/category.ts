export default {
  name: "category",
  title: "Kategorija",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Naziv",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
