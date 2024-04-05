import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOneCharacter } from "../api.ts";

const CharacterDetail = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState({ name: "", status: "", image: "", gender: "", origin: { name: "" } });

  useEffect(() => {
    getOneCharacter(Number(id)).then((data) => {
      setCharacterData(data);
    });
  }, [id]);

  return (
    <Container>
      <div className="d-flex flex-column align-items-center mb-3">
        <h1 className="mt-3 text-center">{characterData.name}</h1>
        <Image style={{ width: "15rem" }} src={characterData.image} roundedCircle />
      </div>
      <div className="d-flex flex-column align-items-center mb-3">
        <Row>
          <Col>Status</Col>
          <Col>{characterData.status}</Col>
        </Row>
        <Row>
          <Col>Gender</Col>
          <Col>{characterData.gender}</Col>
        </Row>
        <Row>
          <Col>Origin</Col>
          <Col>{characterData.origin.name}</Col>
        </Row>
      </div>
    </Container>
  );
};

export default CharacterDetail;
