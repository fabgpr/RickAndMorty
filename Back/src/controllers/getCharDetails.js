const getCharDetails = (res, id) => {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((data) => {
      let character = {
        image: data.image,
        status: data.status,
        gender: data.gender,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
      };
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((err) =>
      res.writeHead(500, { "Content-Type": "text/plain" }).end(err)
    );
};

module.exports = getCharDetails;
