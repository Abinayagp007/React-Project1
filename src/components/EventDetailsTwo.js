import React, { useState, useEffect, useParams } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../temple-events.json"

const EventDetailstwo = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`../temple-/events/${id}.json`)
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, [id]);

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetailstwo;
