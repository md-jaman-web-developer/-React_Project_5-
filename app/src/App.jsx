import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchReasult from "./components/SearchReasult/SearchReasult";
export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [btn, setbtn] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const searchFood = (e) => {
    const searchvalue = e.target.value;
    if (searchvalue === "") {
      setFilterData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchvalue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilterData(data);
      setbtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setbtn(type);
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading.............</div>;

  return (
    <Container>
      <Top>
        <div style={{ justifyContent: "space-between" }} className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div>
          <input
            onChange={searchFood}
            type="text"
            name=""
            id=""
            placeholder="Search Items"
          />
        </div>
      </Top>
      <Filter>
        <Futton onClick={() => filterFood("all")}>All</Futton>
        <Futton onClick={() => filterFood("lunch")}>Lunch</Futton>
        <Futton onClick={() => filterFood("breakfast")}>Breakfast</Futton>
        <Futton onClick={() => filterFood("dinner")}>Dinner</Futton>
      </Filter>
      <SearchReasult data={filterData} />
    </Container>
  );
};

export default App;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  max-width: 2400px;
  align-items: center;

  input {
    background-color: transparent;
    border: 2px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

const Filter = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

const Futton = styled.section`
  border-radius: 5px;
  background: #ff4343;
  padding: 6px 12px;
  border: none;
  margin-top: 30px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    background-color: #bb1616;
  }
`;

export const Button = styled.section`
  border-radius: 5px;
  background: #ff4343;
  padding: 6px 12px;
  border: none;
  margin-top: 30px;
  margin-right: 130px;
  cursor: pointer;
  &:hover {
    background-color: #bb1616;
  }
`;
