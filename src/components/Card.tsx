// src/components/Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  value: number;
  color: string;
}

const Card: React.FC<CardProps> = ({ title, value, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
