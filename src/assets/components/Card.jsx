import React from "react";

export default function Card({pokemon}) {
    return (
        <div className="card">
            <h3>{pokemon.name}</h3>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    );
}