//document.documentElement.style.setProperty('--my-variable-name', 'pink');
window.addEventListener("load", (e)=>{
  console.log("window loaded")
  const toggleBtn = document.querySelector("#toggle-btn")
  const toggleBtnSwitch = document.querySelector(".toggle__btn--switch")

  const page = document.querySelector("#page")
  const price = document.querySelector(".price")

  const input = document.querySelector(".scroll")
  let prc
  let width
  let isYearly = false

  function render(){
    if(input.value == 1){
      page.innerHTML = "10K"
      prc=8
      width = "0%"

    } else if(input.value == 2){
      page.innerHTML = "50K"
      prc=12
      width = "calc(25% - 10px)"
    } else if(input.value == 3){
      page.innerHTML = "100K"
      prc=16
      width = "calc(50% - 20px)"
    }else if(input.value == 4){
      page.innerHTML = "500K"
      prc=24
      width = "calc(75% - 30px)"
    }else if(input.value == 5){
      page.innerHTML = "1M"
      prc=36
      width = "calc(100% - 40px)"
    }
    if(isYearly){
      prc = (prc*3)/4;
      console.log(prc);
    }
    price.innerHTML = `\$ ${prc}.00 `
    document.documentElement.style.setProperty('--fill', width);
  }


  input.addEventListener("input", render)

  console.log(input.value);
  console.log(page);
  console.log(price);

  toggleBtn.addEventListener("click", (event)=>{
    toggleBtnSwitch.classList.toggle("toggle__btn--switch--on")
    isYearly = !isYearly
    render()
  })
  render()
})
/*
Here are the different page view ranges and the
corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing,
 a 25% discount should be applied to all prices.
*/
