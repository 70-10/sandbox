import React, { FC } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { ScrapingQuery } from "../../types/graphql-types";

type Props = {
  data: ScrapingQuery;
};

export const pageQuery = graphql`
  query Scraping {
    allInstaNode(sort: { order: DESC, fields: timestamp }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

const Container: FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>my instagram photos</h1>
      {data.allInstaNode.edges.map(({ node }) => {
        return (
          <Img fixed={node.localFile.childImageSharp.fixed} key={node.id} />
        );
      })}
    </div>
  );
};

export default Container;
