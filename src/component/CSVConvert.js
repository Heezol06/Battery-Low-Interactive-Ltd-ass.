import React from "react";
import { useCSVReader } from "react-papaparse";
// import useCSV from "./useCSV";
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

const CSVConvert = ({setXMax,setXMin,setYMax,setYMin,setZMax,setZMin}) => {
  const { CSVReader } = useCSVReader();
  
  
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        const arr = results.data;
        
        let x = [];
        let y = [];
        let z = [];
        for (let i = 0; i < arr.length; i++) {
          x.push(arr[i][1]);
          y.push(arr[i][2]);
          z.push(arr[i][3]);
        }
        x.shift();
        y.shift();
        z.shift();
        x.pop();
        y.pop();
        z.pop();

        for (let i = 0; i < x.length; i++) {
          x[i] = parseFloat(x[i]);
          y[i] = parseFloat(y[i]);
          z[i] = parseFloat(z[i]);
        }
        setXMin(Math.min(...x))
        setXMax(Math.max(...x))
        setYMin(Math.min(...y))
        setYMax(Math.max(...y))
        setZMin(Math.min(...z))
        setZMax(Math.max(...z))
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
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
