import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ListTrendComponent = (item) => {
  return (
    <Wrapper>
      <Card>
        <Card.Img variant="top" src={item.owner.avatar_url} />
        <Card.Body>
          <Card.Title className="link-title "> {item.name}</Card.Title>
          <Card.Text className="desc">{item.description}</Card.Text>
          <div className="rate">
            <button>Stars: {item.stargazers_count}</button>
            <button>Issues: {item.open_issues_count}</button>
            <span>Submitted 30 days ago by tensorflow</span>
          </div>{" "}
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 1px 1px 8px -1px #ccc;
  border-radius: var(--borderRadius);

  margin-bottom: 26px;
  .card {
    flex-direction: row;
    .card-img,
    .card-img-bottom,
    .card-img-top {
      width: 19%;
      object-fit: cover;
    }

    .link-title {
      color: var(--clr-black);
      text-transform: capitalize;
    }
    .desc {
      margin-top: var(--mt);
      margin-bottom: var(--mb);
      font-size: 1.1rem;
      color: #8a8686;
    }
    .rate {
      button {
        background-color: var(--clr-dark1);
        border: none;
        padding: 6px 13px;
        color: var(--clr-white);
        border-radius: var(--borderRadius);
        margin-right: 8px;
      }
      span {
        color: var(--clr-black);
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    margin: auto;
    margin-bottom: 30px;
    .card {
      flex-direction: column;

      .card-img,
      .card-img-bottom,
      .card-img-top {
        width: 100%;
      }
    }
  }
  @media (max-width: 767px) {
    width: 100%;
    margin: auto;
    margin-bottom: 26px;
    .card {
      flex-direction: column;

      .card-img,
      .card-img-bottom,
      .card-img-top {
        width: 100%;
      }
      .rate {
        button {
          width: 100%;
          margin-bottom: 8px;
        }
      }
    }
  }
`;
export default ListTrendComponent;
