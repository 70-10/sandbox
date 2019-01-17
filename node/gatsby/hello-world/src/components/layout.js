import React from "react";
import { css } from "@emotion/core";
import { Link, StaticQuery, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

const ListLink = ({ to, children }) => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={to}>{children}</Link>
  </li>
);

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        css={css`
          margin: 0 auto;
          max-width: 850px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
      >
        <header
          css={css`
            margin-bottom: ${rhythm(1.5)};
          `}
        >
          <Link
            to="/"
            css={css`
              text-shadow: none;
              background-image: none;
            `}
          >
            <h3
              css={css`
                display: inline;
              `}
            >
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul
            css={css`
              list-style: none;
              float: right;
            `}
          >
            <ListLink to="/">Top</ListLink>
            <ListLink to="/about">About</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
);
