import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { date } from "../utils/functions";
import { useDataListContext } from "../context/dataListContext";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ListTrendComponent from "../components/ListTrendComponent";

const ListTrend = () => {
  console.log(date);
  const [page, setPage] = useState(1);

  const {
    lastData,
    fetchListData,
    loading_listData: loading,
    data_error: error,
    setItemData,
  } = useDataListContext();
  useEffect(() => {
    fetchListData(date, page);
    // console.log(lastData);
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  console.log(lastData);
  return (
    <Wrapper>
      <div className="section-center">
        {lastData.map((item) => {
          return (
            <Link to="/singletrend" onClick={() => setItemData(item)}>
              <ListTrendComponent key={item.id} {...item} />
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 30px;
`;
export default ListTrend;
