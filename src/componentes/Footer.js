import React from 'react'
import "../hojas-de-estilo/footer.css";
import biografia from '../mocks/bibliografia.json';
import InfoBiografica from './InfoBiografica';


function Footer(){
    return(
        <div>
        <div>
            <div class="bottom-sidebar kopa-area"  style = {{backgroundColor:"rgba(66,65,65,1.00)", height : "-50%" }}>
            <div class="container">
			<div class="row" >
				<div class="col-md-6">
			  
		
						<div  style={{textAlign: "center", fontSize: "25px"}} >
							<p class="bottom-logo-title" style={{color : "white"}}>Acerca de Mariana Enriquez</p>
						</div>
						

						<div class="bottom-logo-caption"  style = {{borderRight : "2px solid white", color : "white"}}>
                            <InfoBiografica biografia={ biografia.bibliografia }  /> 
						</div>

			 </div>
			  
			</div>
					<div class="widget millside-module-mail" style = {{marginLeft: "60%", marginTop : "1%"}}>
							
							
						<div class="kopa-social-links-2 text-center" style = {{marginLeft :" -150%" }}>
							<div class="container" style={{marginBottom:"2%", marginTop:" 2%"}}>
								<div class="row text-center">
								</div>
							</div>
						</div>
					</div>


				</div>
					</div>
			{/* <!-- row -->  */}
		</div>
		{/* <!-- container --> */}

	    {/* <!-- bottom sidebar --> */}

			<footer class="kopa-page-footer" style = {{backgroundColor:"gray", textAlign:"center"}}>
			<div class="container" style = {{marginBottom:"-2%"}}>
				
				<p class="text-center" style = {{marginTop : "-2%"}}>
				Producto crear por Juan Simon con fines educativos y con mucho cariño para la comunidad de lectores de Mariana Enriquez ❤️  
				</p>
			</div>
			{/* <!-- container --> */}
		</footer>
        </div>
    );
}

export default Footer