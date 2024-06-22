import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(process.env.GRAPHQL_API ?? "");