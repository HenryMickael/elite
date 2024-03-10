import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";

const manualReviews = [
  {
    author_name: "John Doe",
    text: "Great service! I highly recommend it.",
    rating: 5,
  },
  {
    author_name: "Jane Smith",
    text: "Amazing experience! Will definitely come back.",
    rating: 4,
  },
  {
    author_name: "Alice Johnson",
    text: "Friendly staff and excellent results.",
    rating: 5,
  },
];

const ManualReviews = () => {
  const redirectToGoogleReviews = () => {
    window.open(
      "https://www.google.com/search?sa=X&sca_esv=26a7465d6347b026&tbm=lcl&sxsrf=ACQVn09ZhpJHAzx0ditlkN5TozVevIh6aQ:1710082957686&q=L%27Elite+Cut+%26+Color+-+Coiffure+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MTIwMbQ0NjIyMTUyNjW1MLYw2MDI-IpR2UfdNSezJFXBubREQU3BOT8nv0hBF0hnpqWVFqUqOJZlFi9iJUYVAHKmXuNmAAAA&rldimm=4204193224523558380&hl=fr-FR&ved=2ahUKEwjovuq5--mEAxXodqQEHRnRA84Q9fQKegQIFBAF&biw=2133&bih=1012&dpr=0.9#lkt=LocalPoiReviews",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div>
      <Carousel>
        {manualReviews.map((review, index) => (
          <Carousel.Item key={index}>
            <Card className="my-3">
              <Card.Body>
                <Card.Title>{review.author_name}</Card.Title>
                <Card.Text>{review.text}</Card.Text>
                <Card.Text>Rating: {review.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Bouton pour rediriger vers la page Google Avis */}
      <Button
        variant="primary"
        onClick={redirectToGoogleReviews}
        className="btn btn-dark mt-4"
      >
        Laisser un avis sur Google
      </Button>
    </div>
  );
};

export default ManualReviews;
