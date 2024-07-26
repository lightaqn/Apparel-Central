const schema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      require,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "string",
      options: { source: "caption" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "buyLink",
      title: "Buy link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    { name: "views", title: "Views", type: "number", initialValue: 0 },
    {
      name: "banner",
      title: "Banner",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: { hotspot: true },
    },

    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        link: ["men", "women", "tees", "sweats", "beanies", "jackets"],
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: "reviews",
      title: "Reviews",
      type: "array",
      of: [{ type: "review" }],
    },
    {
      name: "averageRating",
      title: "Average Rating",
      type: "number",
      readOnly: true, // Set to read-only since it's calculated
    },
  ],
  initialValue: {
    averageRating: 0, // Initial value for the average rating
  },
  validation: (Rule: any) =>
    Rule.custom((fields: any, context: any) => {
      // Calculate the average rating and validate it here
      const reviews = fields.reviews || [];
      const totalRatings = reviews.reduce(
        (acc: any, review: any) => acc + review.rating,
        0
      );
      const averageRating = totalRatings / reviews.length;

      // Define your validation logic here
      if (averageRating < 0 || averageRating > 5) {
        return "Average rating must be between 0 and 5.";
      }

      // Update the averageRating field
      context.document.set({ averageRating });

      // Return true to indicate validation success
      return true;
    }).warning("This field will be auto-calculated based on reviews."),
};

export default schema;
