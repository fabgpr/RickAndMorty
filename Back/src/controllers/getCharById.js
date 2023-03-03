const getCharById = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let character = {
        image: data.image,
        id: data.id,
        gender: data.gender,
        name: data.name,
        species: data.species,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) =>
      res.writeHead(500, { "Content-Type": "text/plain" }).end(err)
    );
};

module.exports = getCharById;
