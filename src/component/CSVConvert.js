import React from "react";
import { useCSVReader } from "react-papaparse";
const styles = {
  csvReader: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
  },
  browseFile: {
    width: "20%",
  },
  acceptedFile: {
    border: "1px solid #ccc",
    height: 45,
    lineHeight: 2.5,
    paddingLeft: 10,
    width: "80%",
  },
  remove: {
    borderRadius: 0,
    padding: "0 20px",
  },
  progressBarBackgroundColor: {
    backgroundColor: "red",
  },
};

const CSVConvert = () => {
  const { CSVReader } = useCSVReader();
  return (
    <CSVReader
      onUploadAccepted={(results: any) => {
//         const numbers = results.data;
//         let max = numbers[0]
//         for (let i = 0; i < numbers.length; i++) {
//           if (numbers[i]>max) {
//             max =numbers[i]
//           }
          
//         }
// console.log(max)

        const er = results.data;
        const gminmax = er.map((r) => r[1]);
        console.log(gminmax.shift());
        console.log(gminmax)

        gminmax.sort(); // Default is lexicographical sort
        console.log(gminmax.join(", ")); // -15, -37, -5, 15, 37, 5

        gminmax.sort((a, b) => a - b); // Sort numerically, ascending
        console.log(gminmax.join(", ")); // -37, -15, -5, 5, 15, 37

        const min = gminmax[0];
        const max = gminmax[gminmax.length - 1];
        console.log(`Minimum: ${min}, Maximum: ${max}`); // Minimum: -37, Maximum: 37

        console.log();
        <h1>{results}</h1>;
        console.log("---------------------------");
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }: any) => (
        <>
          <div style={styles.csvReader} class="">
            <button type="button" {...getRootProps()} style={styles.browseFile}>
              Browse file
            </button>
            <div style={styles.acceptedFile}>
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  );
};

export default CSVConvert;
