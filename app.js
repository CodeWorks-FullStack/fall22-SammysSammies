let sandwiches = [
  {
    name: 'Italian Sub',
    price: 10,
    quantity: 0
  },
  {
    name: 'Panini with herb',
    price: 35,
    quantity: 0
  },
  {
    name: "Jeremy's favorite club",
    price: 2,
    quantity: 0
  },
  {
    name: 'Burgie',
    price: 100,
    quantity: 0
  },
  {
    name: 'Dave',
    price: 2.01,
    quantity: 0
  },
  {
    name: 'Monte Cristo fit for a birthday boy',
    price: 0,
    quantity: 0
  },
]

function addItalianSubToCart() {
  console.log(sandwiches[0].name);
  let sandwich = sandwiches[0]
  sandwich.quantity++
  console.log('bought sando', sandwich);
  drawCart()
}

function addPaniniWithHerbToCart() {
  let panini = sandwiches.find(sandwich => sandwich.name == "Panini with herb")
  console.log('This is (hopefully) the panini: ', panini);
  // @ts-ignore
  panini.quantity++
  drawCart()
}

function addSandwichToCart(name) {
  let sandwich = sandwiches.find(sandwich => sandwich.name == name)
  console.log(sandwich);
  // @ts-ignore
  sandwich.quantity++
  drawCart()
}

function drawCart() {
  let cart = document.getElementById('cart')
  // NOTE template is a placeholder
  let template = ''
  sandwiches.forEach(sandwich => {
    if (sandwich.quantity > 0) {
      template += `
      <div class="d-flex justify-content-between px-2 border-dark border">
      <i class="mdi mdi-delete text-danger" onclick="removeItem('${sandwich.name}')"></i>
      <p>${sandwich.name}</p>
      <p>x${sandwich.quantity}</p>
      <p>$${sandwich.price}</p>
    </div>`
    }
  })
  // @ts-ignore
  cart.innerHTML = template
  drawTotal()
}


function drawTotal() {
  let total = 0
  sandwiches.forEach(sandwich => {
    total += sandwich.price * sandwich.quantity
  })
  console.log('cart total', total);
  // @ts-ignore
  document.getElementById('sub-total').innerText = total.toFixed(2)
  // @ts-ignore
  document.getElementById('actual-total').innerText = (total * 1.06).toFixed(2)
}

function checkout() {
  // let cart = document.getElementById('cart')
  //  NOTE here we need to reset the quantity back to 0 to allow our data to reflect the change we made to the DOM
  if (window.confirm("Are you ready to checkout?")) {
    sandwiches.forEach(sandwich => {
      sandwich.quantity = 0
    })
    drawCart()

  }
}

function removeItem(name) {
  // console.log('name: ', name);
  let sandwich = sandwiches.find(sandwich => sandwich.name == name)
  // console.log('sandwich: ', sandwich);
  // @ts-ignore
  sandwich.quantity--
  drawCart()
}
