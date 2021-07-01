import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <h1>My Site's Files</h1>
    <table>
      <thead>
        <tr>
          <th>relativePath</th>
          <th>prettySize</th>
          <th>extension</th>
          <th>birthTime</th>
          <th>changeTime</th>
        </tr>
      </thead>
      <tbody>
        {data.allFile.edges.map(({ node }, index) => (
          <tr key={index}>
            <td>{node.relativePath}</td>
            <td>{node.prettySize}</td>
            <td>{node.extension}</td>
            <td>{node.birthTime}</td>
            <td>{node.changeTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
);

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
          changeTime(fromNow: true)
        }
      }
    }
  }
`;
