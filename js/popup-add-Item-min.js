var buy=document.querySelectorAll(".btn-buy"),bookmarks=document.querySelectorAll(".btn-bookmarks"),addItem=document.querySelector(".item-in-basket"),close=addItem.querySelector(".modal-close"),continueShoping=addItem.querySelector(".modal-btn-continue-shopping"),inTruck=document.getElementById(".in-truck"),goods=document.querySelector(".goods");buy.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),addItem.classList.remove("modal-closed"),addItem.classList.add("modal-show")})}),close.addEventListener("click",function(e){e.preventDefault(),addItem.classList.add("modal-closed"),setTimeout(function(){writeUs.classList.remove("modal-show")},700)}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),addItem.classList.contains("modal-show")&&(addItem.classList.add("modal-closed"),setTimeout(function(){writeUs.classList.remove("modal-show"),writeUs.classList.remove("modal-error")},700)))}),continueShoping.addEventListener("click",function(e){e.preventDefault(),addItem.classList.add("modal-closed"),setTimeout(function(){writeUs.classList.remove("modal-show"),writeUs.classList.remove("modal-error")},700)});