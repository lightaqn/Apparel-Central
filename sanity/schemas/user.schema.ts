const schema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "provider",
      title: "Provider",
      type: "string",
      options: {
        list: ["custom", "google", "apple", "etc."], // List all possible providers
      },
    },
  ],
};

export default schema;
