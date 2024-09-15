import {
  Profile,
  ProjectsCollection,
  StackCollection,
} from "@/types/generated/graphql";
import { getClient, query, PreloadQuery } from "@/utils/ApolloClient";
import { gql } from "@apollo/client";

export async function getProfile() {
  const {
    data: { profile },
  } = await getClient().query<{ profile: Profile }>({
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
  return profile;
}

export async function getTechnologies() {
  const {
    data: { stackCollection },
  } = await getClient().query<{ stackCollection: StackCollection }>({
    query: gql`
      query GetTechnologies {
        stackCollection {
          items {
            logo {
              url
            }
            technology
            description
          }
        }
      }
    `,
  });
  return stackCollection.items;
}

export async function getProjects() {
  const {
    data: { projectsCollection },
  } = await getClient().query<{ projectsCollection: ProjectsCollection }>({
    query: gql`
      query GetProjects {
        projectsCollection {
          items {
            image {
              url
            }
            title
            urlWebsite
            urlRepository
            startDate
            dateCompleted
            technologies
            description
          }
        }
      }
    `,
  });
  return projectsCollection.items;
}
