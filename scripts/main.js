import { fetchRenoir } from "./data.js";
const displayData = async () => {
  const renoirOne = await fetchRenoir("438815");
  const renoirTwo = await fetchRenoir("438011");
  const renoirThree = await fetchRenoir("438014");
  const renoirFour = await fetchRenoir("437430");
  const renoirFive = await fetchRenoir("437432");

  document.getElementById("app").innerHTML += renderRenoir(renoirOne);
  document.getElementById("app").innerHTML += renderRenoir(renoirTwo);
  document.getElementById("app").innerHTML += renderRenoir(renoirThree);
  document.getElementById("app").innerHTML += renderRenoir(renoirFour);
  document.getElementById("app").innerHTML += renderRenoir(renoirFive);
};

const renderRenoir = (data) => {
  let html = `<section class="card">
    <p>Artwork Title: ${data.title}</p>
    <img src="${data.primaryImageSmall}"/>
    </section>`;
  return html;
};
displayData();
