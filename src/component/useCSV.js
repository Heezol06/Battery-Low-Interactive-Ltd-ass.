import { useState } from "react";

const useCSV =(allResult)=>{
    const [finalResult, setFinalResult]=useState(allResult);

    return [finalResult, setFinalResult]
}

export default useCSV;