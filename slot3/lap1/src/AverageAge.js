function AverageAge(){
    const averageAge =(...ages) =>{
        if(ages.length === 0) return -1;
        const sum = ages.reduce((acc, age)=> acc+age, 0);
        return sum/ages.length;
    }
    const avg = averageAge(20, 30, 40, 25, 35);
    return (
    <div>
        <h2>Average Age</h2>
      <p>Average Age: {avg.toFixed(2)}</p>
    </div>
  );
};
export default AverageAge;