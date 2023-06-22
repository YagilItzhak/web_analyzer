
const fileInput = document.getElementById("csvFileInput");
const preview = document.getElementById("preview");
// @ts-ignore
fileInput.addEventListener("change", (event) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsText(event.target.files[0]);

    reader.onload = (event) => {
        // @ts-ignore
        preview.textContent = event.target.result;

    }

});

// type Point = {
//     x: number,
//     y: number
// }

// type CSVRow = {
//     type: string,
//     point: Point
// }

// const readCSVRow = (file: File) => {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//         const csvData = event.target?.result;
//         if (typeof csvData !== 'string') {
//             reject(new Error("Invalid CSV"));
//             return;
//         }

//         const rows = csvData.split("\n").map(row => {
//             const [type, ...point] = row.split(",");

//             point.map(cord => parseFloat(cord));

//             if (point.some(isNaN)) {
//                 reject(new Error("Invalid point coordinate found in the CSV"));
//             }
//         });
//         resolve(rows);
//     }
//     reader.onerror = () => reject(new Error("Error reading CSV"));
//     reader.readAsText(file);
//     });
    
// }