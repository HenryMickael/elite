import React from "react";
import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const GoogleReviews = () => {
  // Initialisation de l'état pour stocker les avis Google
  const [reviews, setReviews] = useState([]);

  // Fonction pour récupérer les avis Google
  const fetchReviews = async () => {
    try {
      // Remplacer 'YOUR_PLACE_ID' par l'ID de votre place Google
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,reviews&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.result && data.result.reviews) {
        setReviews(data.result.reviews);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des avis Google :", error);
    }
  };

  // Utilisation de useEffect pour charger les avis lors du montage du composant
  useEffect(() => {
    fetchReviews();
  }, []);

  const redirectToGoogleReviews = () => {
    window.open(
      "https://www.google.com/search?sa=X&sca_esv=26a7465d6347b026&tbm=lcl&sxsrf=ACQVn09ZhpJHAzx0ditlkN5TozVevIh6aQ:1710082957686&q=L%27Elite+Cut+%26+Color+-+Coiffure+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MTIwMbQ0NjIyMTUyNjW1MLYw2MDI-IpR2UfdNSezJFXBubREQU3BOT8nv0hBF0hnpqWVFqUqOJZlFi9iJUYVAHKmXuNmAAAA&rldimm=4204193224523558380&hl=fr-FR&ved=2ahUKEwjovuq5--mEAxXodqQEHRnRA84Q9fQKegQIFBAF&biw=2133&bih=1012&dpr=0.9#lkt=LocalPoiReviews",
      "_blank",
      "noopener noreferrer"
    );
  };

  return (
    <div>
      {/* Affichage des avis Google */}
      {reviews.map((review, index) => (
        <Card key={index} className="my-3">
          <Card.Body>
            <Card.Title>{review.author_name}</Card.Title>
            <Card.Text>{review.text}</Card.Text>
            <Card.Text>Rating: {review.rating}</Card.Text>
          </Card.Body>
        </Card>
      ))}

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

export default GoogleReviews;
