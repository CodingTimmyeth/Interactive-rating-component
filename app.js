const submitBtn = document.querySelector('#submit-btn');
const ratingNumsCon = document.querySelector('.rating-numbers');
const numbers = document.querySelectorAll('#num');
const mainCon = document.querySelector('main');
const rateScore = document.createElement('div')
rateScore.classList.add('rate-score');
const rateNumber = document.querySelectorAll('.rate-number')

numbers.forEach(function(number){
    number.addEventListener('click', function(){
        let spanValue = this.innerHTML;

        console.log(`This is your Rating ${spanValue}`)
        rateScore.innerHTML = `You Selected ${spanValue} out of 5!`;

    });
    rateNumber.forEach(function(ratingNumber) {
        ratingNumber.addEventListener('click', function() {
          // Remove the class from all elements
          rateNumber.forEach(function(rn) {
            rn.classList.remove('selected');
          });
      
          // Add the class to the clicked element
          this.classList.add('selected');
        });
      });
      
});
submitBtn.addEventListener('click', function(){
    mainCon.classList.add('new-main', 'attribution');


    mainCon.innerHTML = `
    <div class="logo">
        <img class="image-2" src="/images/illustration-thank-you.svg" alt="icon-star" />
    </div>
    ${rateScore.outerHTML}
    <h2> Thank You! </h2>
    <p> We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch! </p>
    `


})