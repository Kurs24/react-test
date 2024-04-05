import React from "react";
import { useEffect, useState } from "react";
import { Row, Col, Card, Pagination, Container } from "react-bootstrap";
import { getAllCharacter } from "../api.ts";

const CharacterListComponent = () => {
  const [characterList, setCharacterList] = useState({ info: { pages: 0 }, results: [{ image: "", name: "", id: "" }] });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllCharacter(currentPage).then((data) => {
      setCharacterList(data);
    });
  }, [currentPage]);

  const totalPage: number = characterList.info.pages;

  const handlePaging = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container fluid className="m-0 p-0">
      <Row xs={2} sm={2} md={4} xxl={8} className="g-4 m-2">
        {characterList.results.map((character, idx) => (
          <Col key={idx}>
            <Card style={{ minHeight: "16rem" }}>
              <Card.Img variant="top" src={character.image} />
              <Card.Body>
                <Card.Title className="text-center" style={{ fontSize: "15px" }}>
                  {character.name}
                </Card.Title>
              </Card.Body>
              <Card.Body className="d-flex justify-content-end align-items-end m-0 p-0">
                <Card.Link href={`/${character.id}`} className="m-1" style={{ color: "info", textDecoration: "none", fontWeight: "bold" }}>
                  Detail
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination size="sm">
            {currentPage === 1 ? null : (
              <>
                <Pagination.First onClick={() => handlePaging(1)} />
                <Pagination.Prev onClick={() => handlePaging(currentPage - 1)} />
              </>
            )}

            {Array.from({ length: 5 }).map((_, index) => {
              let page = currentPage + index;

              if (currentPage > totalPage - 4) {
                page = totalPage - 4 + index;
              }

              return (
                page > 0 && (
                  <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePaging(page)}>
                    {page}
                  </Pagination.Item>
                )
              );
            })}

            {currentPage === totalPage ? null : (
              <>
                <Pagination.Next onClick={() => handlePaging(currentPage + 1)} />
                <Pagination.Last onClick={() => handlePaging(totalPage)} />
              </>
            )}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default CharacterListComponent;
