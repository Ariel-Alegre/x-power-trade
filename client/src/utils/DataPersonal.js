export const DataPersonal = (payload) => {
    fetch("http://localhost:3001/user", {
        method: "GET",
        headers: {
          Authorization: `${payload}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la petición");
        }
        return response.json(); // Convertir la respuesta a formato JSON
      })
      
      .catch((error) => {
        console.error(error);
      });
}
