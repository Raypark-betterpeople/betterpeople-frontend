module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "betterpeople-backend",
      url: "https://better-people-backend.herokuapp.com/graphql",
    },
  },
};
