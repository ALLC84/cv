import React, { createContext, useState, useEffect } from "react";
import {theme} from '../../tailwind.config';


/* 
|-----------------------------------------------
|  CONTEXT
|-----------------------------------------------
| Crea el context para proveer de los datos
| al componente de torneos
|
*/
export const MainContext = createContext();

/* 
|-----------------------------------------------
|  Providers
|-----------------------------------------------
*/
export const MainProvider = (props) => {
	/* 
	|-----------------------------------------------
	|  State
	|-----------------------------------------------
  | State principal de la Web 
  | Lo utilizaremos para configuraciones generales que se comparten.
	|
   */
	let [scroll, setScroll] = useState(0);

	const [viewport , setViewport] = useState({
		width: document.documentElement.clientWidth,
		height: document.documentElement.clientHeight
  })

	useEffect(() => {
		// Recibe los cambios en el scroll y actualiza el state
		updateScroll()

		return () => {
			updateScroll()
		}
	});

	// Media Query
	useEffect(() => {
		window.addEventListener('resize', _resize_mixin_callback);

		return () => {
				window.removeEventListener('resize', _resize_mixin_callback);
		}
  }, [viewport])

	/* 
   |-----------------------------------------------
   |  SCROLL
   |-----------------------------------------------
   | Saca la diferencia entre el scrollY total y la
   | altura de la pantalla.
   | Actualiza el estado
   |
   */
	const updateScroll = () => {
		window.addEventListener("scroll", () => {
			setScroll((scroll = Math.round(window.scrollY / alturaScroll())));
		});
	}

	const alturaScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const clientHeight = document.documentElement.clientHeight;
		return (scrollHeight - clientHeight) / 100;
	};

	/* 
   |-----------------------------------------------
   |  Media Query
   |-----------------------------------------------
   | 	Valores de ancho y altura de página
   |
   */
	const _resize_mixin_callback= () => {
		setViewport({
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		});
	}



	return (
		<MainContext.Provider
			value={{
				scroll,
				viewport,
				colors: theme.colors
			}}
		>
			{props.children}
		</MainContext.Provider>
	);
}
