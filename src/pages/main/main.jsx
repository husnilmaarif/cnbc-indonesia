import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// ===============

function Main() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("IHSG");

  useEffect(() => {
    async function getResults() {
      const results = await axios(`https://newsapi.org/v2/everything?from=2022-03-06&sortBy=popularity&apiKey=872548cb815940ceb00f8c39611b4795&q=${search}`);
      setCards(results.data.articles);
    }
    getResults();
  }, [search]);

  return (
    <>
      {/* input */}
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6">
            <h1>Portal News</h1>
            <Form className="d-flex">
              <input type="text" className="form-control" placeholder="Type Here to Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            </Form>
          </div>
        </div>

        {/* card */}
        <div className="row mt-3">
          {cards.map((card, index) => {
            return (
              <div className="col-md-4 my-3" key={index}>
                <Card className="shadow">
                  <Card.Img variant="top" src={card.urlToImage} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {card.author} || {card.publishedAt}
                    </Card.Subtitle>
                    <Card.Text>{card.content}</Card.Text>
                    <Button variant="primary">Read more</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>

        {/* end container */}
      </div>
    </>
  );
}

export default Main;
