"use server";
import { unstable_noStore as noStore } from "next/cache";
import { gql } from "graphql-request";
import {
  ID,
  PostConnectionType,

  PostWithDescriptionType,
  ProjectConnectionType,
  ProjectWithDescriptionType,
} from "@/lib/types";
import { hygraph } from "./header";
import { ErrorResponse, Resend } from "resend";
import { error } from "console";


export async function getPorjects(
  cursor: {
    first: number;
    after?: number;
  } = { first: 5 }
): Promise<ProjectConnectionType> {
  noStore();
  const QUERY = gql`
    query getProjects($first: Int ,$after: Int) {
      projectsConnection(
        first: $first
        skip: $after
        orderBy: createdAt_DESC
      ) {
        edges {
          cursor
          node {
            id
            desc

            tech
            title

          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          
        }
        aggregate {
          count
        }
      }
    }
  `;
  const { projectsConnection }: { projectsConnection: ProjectConnectionType } =
    await hygraph.request(QUERY, cursor);

  return projectsConnection;
}

export async function getProjectById(id: ID): Promise<ProjectWithDescriptionType> {
  noStore();
  const QUERY = gql`
    query getProjectById($id: ID!) {
      project(where: { id: $id }) {
        id
        description {
        raw
        }
        tech
        title
        createdAt
        webUrl
        gitUrl
      }
    }
  `;
  const { project }: { project: ProjectWithDescriptionType } = await hygraph.request(QUERY, {
    id,
  });
  return project;
}




export async function getPosts(
  cursor: {
    first: number;
    after?: number;
  } = { first: 4 }
): Promise<PostConnectionType> {
  noStore();
  const QUERY = gql`
    query getPosts($first: Int, $after: Int) {
      postsConnection(first: $first, skip: $after, orderBy: createdAt_DESC) {
        edges {
          cursor
          node {
            id
            title
            topic
            createdAt
            coverImage {
              id
              url
              width
              height
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          
        }
        aggregate {
          count
        }
      }
    }
  `;
  const { postsConnection }: { postsConnection: PostConnectionType } =
    await hygraph.request(QUERY, cursor);
  return postsConnection;
}

export async function getPostsIds(): Promise<{ id: ID; updatedAt: Date }[]> {
  noStore();
  const QUERY = gql`
    {
      posts(last: 20) {
        id
        updatedAt
      }
    }
  `;
  const { posts }: { posts: [{ id: ID; updatedAt: Date }] } =
    await hygraph.request(QUERY);
  return posts;
}

export const getPostById = async (id: ID): Promise<PostWithDescriptionType> => {
  noStore();
  const QUERY = gql`
    query getPostById($id: ID!) {
      post(where: { id: $id }) {
        id
        title
        topic
        createdAt
        coverImage {
          id
          url
          width
          height
        }
        desc {
          raw
        }
      }
    }
  `;
  const { post }: { post: PostWithDescriptionType } = await hygraph.request(
    QUERY,
    { id }
  );
  return post;
};

export const getPostsMeta = async (): Promise<PostWithDescriptionType[]> => {
  noStore();
  const QUERY = gql`
    {
      posts(last: 20) {
        id
        title
        topic
        createdAt
        coverImage {
          id
          url
          width
          height
        }
        desc {
          raw
        }
      }
    }
  `;
  const { posts }: { posts: PostWithDescriptionType[] } =
    await hygraph.request(QUERY);
  return posts;
};
export async function handleSubmitContact({ name, email, message }: {
  name: string;
  email: string;
  message: string;

}): Promise<ErrorResponse | undefined> {

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      to: "muzammilloya0@gmail.com",
      subject: "New Contact Form Submission",
      from: "From Portfolio <onboarding@resend.dev>",
      text: `Name: ${name}\nFrom: ${email}\nMessage: ${message}`,
    });
    if (error) {
      return error
    }
  } catch (e) {
    return e as ErrorResponse
  }
}
// This code exports two functions, `getPosts` and `getProjects`, which fetch data from a GraphQL API and return it as arrays of custom data types `PostType` and `ProjectType` respectively. The `noStore` function is used to disable caching for this page because the data is expected to change frequently.