import React from 'react';

const Results = ({CSVData}) => {
    console.log(CSVData)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full text-black">
    <thead>
      <tr>
        <th></th>
        <th className='text-lg'>KP</th>
        <th className='text-lg'>X</th>
        <th className='text-lg'>Y</th>
        <th className='text-lg'>Z</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Results;