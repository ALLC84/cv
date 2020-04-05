
/* 
   |-----------------------------------------------
   |  HEADER
   |-----------------------------------------------
   | Esta funcion agrega o quita una clase CSS 
   | que es utilizada para cambia el background 
   | del Header.
   |
   */
	export const handleStyleHeader = (scroll) => {
		const mainHeader = document.getElementById("main-header");

		if (mainHeader && scroll < 3) {
      mainHeader.classList.remove("bg-gray-100");
      
		} else if (headerLogo && mainHeader && scroll >= 3) {
			mainHeader.classList.add("bg-gray-100");
		}
	};