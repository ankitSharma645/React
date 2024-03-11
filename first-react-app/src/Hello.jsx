// here we are creating dynamic content 


function Hello(){

    let RollNo = 645;
    let myName = ()=>{
        return 'Ankit Sharma';
    }


    return <p>
        My Name is: {myName()}
        My className Roll Number is: {RollNo}
    </p>
   
   
}
export default Hello;
