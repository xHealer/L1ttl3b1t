const config = {
  type: 'carousel',
  perView: 3,
	 breakpoints:{
	  600: { perView: 1 },
	  800: { perView: 2 },
	  1200: { perView: 3 }
	}
}
new Glide('.glide', config).mount();
new Glide('.glide2', config).mount();

// const config = {
//   type: 'carousel',
//   perView: 3,
// 	 breakpoints:{
// 	  600: { perView: 1 },
// 	  800: { perView: 1 },
// 	  1200: { perView: 1 }
// 	}
// }
// new Glide('.glide2', config).mount();

