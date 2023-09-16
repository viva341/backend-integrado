const axios = require("axios");
const API_URL = "https://rickandmortyapi.com/api/character/";

const getCharacterById = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      const { id: characterId, name, species, image, gender } = response.data;
      res.status(200).json({ id: characterId, name, species, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharacterById;
