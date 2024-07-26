const schema = {
  name: "projectPlaylist",
  title: "Project Playlist",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "product",

      title: "product",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
  ],
};

export default schema;
