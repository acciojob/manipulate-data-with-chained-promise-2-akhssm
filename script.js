//your JS code here. If required.


const outputDiv = document.getElementById("output");

function manipulateData() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000); 
  })
    .then((arr) => {
      return new Promise((resolve) => {
        const evenNumbers = arr.filter((num) => num % 2 === 0);
        setTimeout(() => {
          outputDiv.textContent = evenNumbers.join(",");
          resolve(evenNumbers);
        }, 1000); 
      });
    })
    .then((evenNumbers) => {
      return new Promise((resolve) => {
        const multiplied = evenNumbers.map((num) => num * 2);
        setTimeout(() => {
          outputDiv.textContent = multiplied.join(",");
          resolve(multiplied);
        }, 2000); 
      });
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

manipulateData();
