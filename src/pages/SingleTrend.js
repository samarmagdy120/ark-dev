import React from "react";
import styled from "styled-components";
import ListTrendComponent from "../components/ListTrendComponent";
import { useDataListContext } from "../context/dataListContext";
import Error from "../components/Error";

const SingleTrend = () => {
  const { item } = useDataListContext();

  console.log(item);

  if (!item) {
    return <Error />;
  }

  return (
    <Wrapper>
      <div className="section-center">
        <ListTrendComponent {...item} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
`;
export default SingleTrend;
