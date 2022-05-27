import Data from "../data.js"

export default class Home{

    constructor(){

   this.sethome()

   this.popularDrinks()

   this.populateMenu()

    }


    sethome= () =>{

        let container= document.querySelector(".container")

        container.innerHTML=`
        
        <header>

        <section class="shadowBox">
        <nav>

            <div class="phone">
                <i class="fa-solid fa-phone"></i>
                <p>0758345678</p>
            </div>



            <div class="logo">
                <img src="/imgs/logo2.png">
            </div>


            
            <div class="menu">
                <h1>Menu</h1>

                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </nav>



        <section class="headerText">
            <p>The best bartender services</p>
            <h1>Make a special night with cocktails !</h1>
            <button class="see">See for yourself !</button>
        </section>


        

        </section>
    </header>


 
    <main>
       
        <section class="about">
            <h1>A daily escape</h1>

            <div class="boxes">


                <div class="box">
                    <img src="/imgs/draw1.png">
                    <h2>Tequila Sunrise</h2>
                    <p>Called fifth so life was life likeness thing don't meat lights heaven, forth replenish meat isn't night don't spirit fifth.</p>
                </div>


                <div class="box">
                    <img src="/imgs/draw2.png">
                    <h2>Mojito bay</h2>
                    <p>Also to signs. You brought living Fowl green face it after years gathered you'll upon two. Above, god living, replenish.</p>
                </div>


                <div class="box">
                    <img src="/imgs/draw3.png">
                    <h2>Bloody Mary</h2>
                    <p>Gathered forth, won't you'll fly bring seasons you'll the in make. Them evening thing in whales great won't there bring.</p>
                </div>
            </div>
        </section>

        <section class="popular">

            <div class="popularBox">

          

                <div class="popularDescription">
                    <h2>Fresh and Tasty</h2>
                    <h1>Our Signature Cocktails</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
                    </p>

                    <button class="menubtn">Explore our menu</button>
                </div>

                <div class="popularImg">
                    <img src="/imgs/princess.png">
                    <h3>Princess of kenya</h3>
                </div>
            </div>


            <div class="menuProducts">

                <h1>Our menu</h1>

                <div class="cards">
                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>


                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>



                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>


                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>


                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>


                    <div class="card">
                        <img src="/imgs/princess.png">
                        <p>TEQUILA AND ORANGE JUICE</p>
                        <h2>TEQUILA SUNRISE</h2>

                        <div class="overlay">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolore voluptatem distinctio. Voluptatem dicta reiciendis cumque repellat aliquid nesciunt iure esse, placeat magnam accusantium exercitationem temporibus repudiandae, laboriosam cum rem!1</p>
                        </div>
                    </div>



                    

                  
                </div>
            </div>
        </section>

    </main>


    <footer>
        <section class="footerBox">
         
    
                <div class="footerContact">
                    <h2>CONTACT INFO</h2>
                    <p>Email us: contact@email.com</p>
                    <p>Call us: 123 456 789</p>
                </div>
    
    
    
                <div class="footerLogo">
                    <img src="/imgs/logo2.png">
                </div>
    
    
                
               
    
                    <div class="footerContact">
                        <h2>VISIT US</h2>
                        <p>Monday to Friday 7am to 8pm</p>
                        <p>Coppice Celyn 123, MA US</p>
                    </div>
        
        </section>

        <p class="copy">Copyright@2022 Pink Paradise: All rigths reserved</p>
    </footer>
        
        
        
        
        `
    }


    popularDrinks = async () =>{

        try{

            let box= document.querySelector(".popularImg")

            box.innerHTML="";

            let text=""

            let data= new Data();

            let cocktails= await data.getCocktails()  
            
            let i= Math.floor(Math.random()*9);

        
            text+=`
            
            <img src="${cocktails[i].image}">
            <h3>${cocktails[i].name}</h3>
            
            `
        



            box.innerHTML= text


        }catch(e){

            throw new Error(e)
        }
    }

    populateMenu= async () =>{

        try{

            let cards= document.querySelector(".cards")

            cards.innerHTML="";

            let text=""

            let data= new Data()

            let cocktails= await data.getCocktails()


            cocktails.forEach(e => {

                text+=`
                <div class="card">
                        <img src="${e.image}">
                        <h2>${e.name}</h2>
                        <p>${e.price}</p>
                        <div class="overlay">
                            <p>${e.description}</p>
                        </div>
                    </div>
                
                
                `
                
            });

            cards.innerHTML=text

        }catch(e){

            throw new Error(e)
        }
    }


  
}