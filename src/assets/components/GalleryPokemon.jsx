import React from "react";

export default fumction GalleryPokemon(){

    return (
        <div>
        {pokemons?.map(p => (
            <Card key={p.id} pokemon={p} />
        )
    )
}