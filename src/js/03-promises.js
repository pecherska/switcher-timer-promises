import Notiflix from 'notiflix';

const form = document.querySelector(".form");
console.dir(form);

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);
  console.log(String(delay));
  console.log(step);
  console.log(amount);

  for (let i = 0; i < amount; i += 1) {
    const dynamicDaley = step * i + delay;
    console.log(dynamicDaley);

     createPromise(i, dynamicDaley)
  .then(({ position, delay  }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   
  
  }
}


function createPromise(position, delay) {
 

  return new Promise((res, rej) => {
     const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
    // Fulfill
        res(`✅ Fulfilled promise ${position} in ${delay}ms`)
  } else {
    // Reject
        rej(`❌ Rejected promise ${position} in ${delay}ms`)
  }
    }, delay)
  })
  
}
