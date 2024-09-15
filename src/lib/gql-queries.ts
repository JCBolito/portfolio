import { getClient, query, PreloadQuery } from "@/utils/ApolloClient";
import { gql } from "@apollo/client";

export async function getProfile() {
  const { data } = await getClient().query({
    query: gql`
      query GetProfile {
        profile(id: "5f46lOqzpOpz0EMdQm1Mx4") {
          image {
            url
          }
          name
          role
          introduction
          information
          linkedin
          github
          email
          resume {
            url
          }
        }
      }
    `,
  });
  return data;
}
