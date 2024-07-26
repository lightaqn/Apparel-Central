const schema = {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "customUser" }, { type: "nextAuthUser" }],
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
  ],
};

export default schema;
