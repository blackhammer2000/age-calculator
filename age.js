 window.addEventListener('load', () => {
    
    const calcButton = document.querySelector('button');

    calcButton.addEventListener('click', calculateAge);

    function calculateAge(){
        const input = document.querySelector('#dateOfBirth');
        const inputAge = input.value;

        const workingDate = Date.parse(inputAge);
        const presentDate = Date.now();
        const ageMillisecondsValue = presentDate - workingDate; 

        const minute = 1000 * 60;
        const hour = minute * 60
        const day = hour * 24;
        const year = day * 365;
        
        const age = Math.round(ageMillisecondsValue / year);

        const resultsDisplay = document.querySelector('.displayAge');  
        resultsDisplay.textContent = (age > 1) ?`you are now ${age} years old.`:`you are now ${age} year old.`;
         
    }
 });