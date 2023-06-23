const fileInput = document.getElementById("csvFileInput");
const preview = document.getElementById("preview");
// @ts-ignore
fileInput.addEventListener("change", (event) => {
    const reader = new FileReader();
    // @ts-ignore
    reader.readAsText(event.target.files[0]);

    reader.onload = (event) => {
        // @ts-ignore
        if (typeof event.target.result !== 'string') {
            alert("Invalid CSV");
            return;
        }
        // @ts-ignore
        const rows = event.target.result.split("\n");

        const spited_rows = rows.map(row => row.split(','));

        let modified_rows = new Array<Record<string, Array<number>>>();

        for (let i = 0; i < spited_rows.length; i++) {
            const row = spited_rows[i];
            if (row.length !== 3) {
                alert("Invalid CSV");
                return;
            }
            const [type, ...stringPoint] = row;
            const point = stringPoint.map(cord => parseFloat(cord));
            if (point.some(isNaN)) {
                alert("Invalid point coordinate found in the CSV");
                return;
            }
            modified_rows.push({[type]: point});

        }
        
        console.log(modified_rows);

    }

});