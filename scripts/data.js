export const fetchRenoir = async (id) => {
  //assign a fetch call
  const fetchData = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
  );
  //jsonify that
  const jsonData = await fetchData.json();
  return jsonData;
};
