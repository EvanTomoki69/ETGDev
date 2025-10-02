import { useEffect, useState } from "react";
import "./Home.css";

export function Home() {
     const [showHeart, setShowHeart] = useState(false);

     useEffect(() => {
          const timer = setTimeout(() => setShowHeart(true), 1000);
          return () => clearTimeout(timer);
     }, []);

     return (
          <div className="welcome-container">
               <h1>Bienvenido al Inicio :3</h1>
               <p className="welcome-message">
                    Este proyecto está hecho con mucho amor para ti, mi BBsota :3. <br />
                    ¡Gracias por aguantarme tanto! 💖
               </p>
               {showHeart && (
                    <div className="heart-animation">
                         <span role="img" aria-label="heart">💗</span>
                    </div>
               )}
          </div>
     );
}