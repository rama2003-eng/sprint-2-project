import React from 'react';

//function component
function Customer(){
    return(   
        
        <div className='Customer'>
         <form id="form" action="/">
            <h1>Sign Up</h1>
            <div class="input-control">
                <label for="fname" >StudentID</label>
                <input id="fname" name="fname" type="text"/>
                <div class="error"></div>
           </div>
            <div class="input-control">
                <label for="lname">Name</label>
                <input id="lname" name="lname" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="orderid">College</label>
                <input id="orderid"name="orderid" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="date">Date</label>
                <input id="date"name="date" type="date"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="qualification">Qualification</label>
                <input id="qualification"name="qualification" type="text"/>
                <div class="error"></div>
            </div>
            <div class="input-control">
                <label for="year">Year</label>
                <input id="year"name="year" type="number" min='1960'  max='3000'/>
                <div class="error"></div>
            </div>

            <button type="submit">Submit</button>
        </form>
    
    

        </div>    

          

          
            
       
    );
    
}
export default Customer;