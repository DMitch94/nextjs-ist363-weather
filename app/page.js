"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

//custom compontenets
import Col from "../components/Col";
import Container from "../components/Container";
import List from "../components/List";
import Row from "../components/Row";
import Tabs from "../components/Tabs";

import { getGeoLocation, getWeatherDataByLatLon } from "../lib/api";

const Homepage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [daysOfWeek, setdaysOFWeek] = useState(null);
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  useEffect(() => {
    getGeoLocation()
      .then((position) => {
        console.log(position);
        setLocation(position);
      })
      .catch((error) => {
        setErrorMsg(error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getWeatherDataByLatLon(location);
      setWeatherData(response);
    };
    location ? fetchData() : null;
  }, [location]);

  useEffect(() => {
    // filter out the days of the week
    const tempWeek = [];

    weatherData &&
      weatherData.list.filter((block) => {
        const date = new Date(block.dt * 1000);
        const options = { weekday: "short" };
        const day = date.toLocaleDateString("en-US", options);
        //console.log(day);
        if (!tempWeek.includes(day)) {
          tempWeek.push(day);
        }
      });

    setdaysOFWeek(tempWeek);
    // then set state with the days of the week
  }, [weatherData]);

  //console.log(peopleArr);
  return (
    <div>
      <h1>Weather app</h1>
      {errorMsg && <div>{errorMsg}</div>}
      {weatherData && (
        <Container>
          <Row>
            <Col>
              <h2>{weatherData.city.name}</h2>
              <p>Current Temp: {weatherData.list[0].main.temp}&deg;F</p>
              <p>{weatherData.list[0].weather[0].description}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                alt={"Weather icon"}
                width={100}
                height={100}
              />
            </Col>
            <Col> Tabs and List Goes Here</Col>
          </Row>
        </Container>
      )}
      {weatherData && daysOfWeek && (
        <section>
          <Tabs
            activeIndex={activeDayIndex}
            items={daysOfWeek}
            clickHandler={setActiveDayIndex}
          />
          <List
            activeIndex={activeDayIndex}
            items={weatherData.list}
            daysOfWeek={daysOfWeek}
          />
        </section>
      )}
    </div>
  );
};
export default Homepage;
