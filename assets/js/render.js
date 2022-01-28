var pro;
fetch('https://script.google.com/macros/s/AKfycbyrd8czM3mGc8P3bJLZk77xC54nB-EHIzSl9WQpzgbanEtlVL8gGh2tiRZ8DrUYg9zcZg/exec')
.then(response =>{
    if(!response.ok){
        throw Error("ERROR");
    }
    return response.json();})
.then(data => {
    var pro = data.pro;
    const html = pro.map(user =>{
        return `
        <div class="col-12 col-md-6 col-lg-6" style="margin-top:2vh;">
							<div class="_prcng_tble_dgtl_crd">
								<div class="_prcng_tble_dgtl_crd_top">
									<ul class="_prcng_tble_dgtl_ul1">
										<li>
											<img src="${user.ImgLink}" alt="image">
										</li>
									</ul>

									<p class="_prcng_tble_dgtl_txt1">
                                      ${user.ProductName}
									</p>

									<h1 class="_prcng_tble_dgtl_pmnt">
										${user.PriceNow} <span>${user.PriceWas}</span>
									</h1>
								</div>

								<div class="_prcng_tble_dgtl_crd_btm">
									<p class="_prcng_tble_dgtl_txt2">
										WHAT’S INCLUDED:
									</p>

									<ul class="_prcng_tble_dgtl_ul2">
										<li>${user.Include1}</li>
										<li>${user.Include2}</li>
									</ul>
								</div>
								<button class="_prcng_tble_dgtl_btn ${user.BUTTONCOLOR}" id=${user.SELLIXID}>
                                    ${user.ButtonText}
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" fill="none" viewBox="0 0 26 14">
									  <path stroke="#FEFEFE" stroke-width="2" d="M0 7h24m0 0l-6.128-6M24 7l-6.128 6"/>
									</svg>
								</button>
							</div>
						</div>`;
    }).join('');
    document.querySelector("#healershop").insertAdjacentHTML("afterbegin", html);
})