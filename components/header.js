const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =  `
<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

header {
    background-color: #fff;
    position: sticky;
    top: 0%;
    left: 0;
    right: 0;
  }

a,
li {
    list-style: none;
    text-decoration: none;
    color: inherit;
}


nav {
  display: flex;
  width: 100%;
  height: 85px;
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  /* flex-wrap: wrap; */
}

.logo {
    display: flex;
}

.logo img {
 width: 50px;
 align-self: center;

}

.links{
  /* display: flex; */
  list-style: none;
  align-items: center;
}
.link {
  display: inline-block;
  margin: 0 15px;
  color: #444444;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 20px;
}

.link:hover,
.link .active {
  font-size: 24px;
  color: #00b9bc;
  transition: all 200ms ease-in-out;
}

nav .menu-btn i {
  color: rgb(0, 185, 188);
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.donate a {
    color: #fff;
    font-size: 10px;
    padding: 12px 30px;
    background: #f9a11b;
    box-shadow: 0px 8px 12px rgba(249, 161, 27, 0.32);
    border-radius: 4px;
  }

input[type="checkbox"] {
  display: none;
}



.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: -1;
  width: 100%;
  padding: 0 30px;
  color: #1b1b1b;
}
.content div {
  font-size: 40px;
  font-weight: 700;
}



/* FOOTER STYLING */

footer {
    background-color: rgb(0, 185, 188);
    height: auto;
    padding: 20px 120px 20px 100px;
    overflow: hidden;
}

.logo-area img {
    width: 70px;
    margin-right: 50px;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* justify-content: space-between; */
}

.container-1{
    display: flex;
}

.container-3{
    display: none;
}

.sub-container-1 {
    margin: 0 20px;
}

.sub-container-1 h3 {
    color: #F9A11B;
    margin-bottom: 10px;
}

.sub-container-1 li a {
    font-size: 13.4px;
    color: #fff;
}
.sub-container-1 li a:hover {
    transform: scale(0.7);
    color: rgb(16, 92, 94);
    transition: all 300ms ease-in-out;
}

.container-2 {
    color: #fff;
}
.subscribe p {
    font-size: 20px;
    color: rgba(255,255,255, 0.8);
    text-align: center;
    margin-bottom: 10px;
}

.submit {
    display: flex;
}

.submit input{
    border-radius: 6px;
    border: none;
    display: inline-block;
}
.submit input:nth-of-type(1) {
    height: 60px;
    width: 80%;
    padding-left: 20px;
}
.submit input:nth-of-type(2) {
    margin-left: -10px;
    width: 20%;
    background: #F9A11B;
    box-shadow: 0px 8px 12px rgba(249, 161, 27, 0.32);
    border-radius: 0px 8px 8px 0px;
    font-size: 15px;
    color: #fff;
    height: 60px;
    cursor: pointer;
}
.submit input:nth-of-type(2):hover {
    background: rgb(16, 92, 94);
    transition: all 300ms linear;
}

.info {
    text-align: right;
    margin-top: 50px;
    line-height: 1.8;
}
.info p {
    font-size: 13.4px;
}

.social-media {
    margin-top: 10px;
}
.social-media i{
    margin-right: 5px;
    cursor: pointer;
}

.social-media i:hover {
    transform: scale(1.5);
    color: rgb(54, 83, 83);
    transition: all 300ms ease-in-out;
}

.social-media i:last-child{
    margin-right: 0;
}

.footnote {
    color: #fff;
    font-size: 12px;
    margin-top: 5px;
}


/* MEDIA QUERIES */
@media (max-width: 1000px) {
    nav {
      padding: 0 40px 0 50px;
    }
    footer {
        padding: 20px 20px 20px 30px;
    }
  }
  
  
  @media (max-width: 920px) {
    nav .menu-btn i {
      display: block;
    }
    #click:checked ~ .menu-btn i:before {
      content: "\f00d";
    }
    .links {
      position: fixed;
      top: 80px;
      left: -100%;
      background: rgb(0, 185, 188);
      height: 100vh;
      width: 100%;
      text-align: center;
      display: block;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      padding-bottom: 220px;
    }
    #click:checked ~ ul {
      left: 0;
    }
    .link a:hover,
    .link a.active {
      font-size: 17px;
      color: #444444;
      transition: all 200ms ease-in-out;
  }
    .link {
      width: 100%;
      margin: 20px 0;
    }
  
    .link a {
      color: #fff;
      width: 100%;
      margin-left: -100%;
      display: block;
      font-size: 15px;
      transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    #click:checked ~ ul li a {
      margin-left: 0px;
    }

    .footer-container {
      display: flex;
      flex-direction: column;
    }

    .container-2{
        order: 1;
    }
    .container-2 .info {
        display: none;
    }
    .container-1{
        order: 2;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .container-3 {
        display: block;
        order: 3;
        text-align: center;
        color: #fff;
    }

    .footnote {
        order: 4;
        text-align: center;
        font-size: 10px;
        margin-top: 10px;
    }

@media (max-width:425px){
    .logo-area img {
        margin-right: 0;
    }
    .submit input:nth-of-type(1) {
        height: 40px;
        width: 75%;
    }
    .submit input:nth-of-type(2) {
        margin-left: -10px;
        width: 25%;
        font-size: 12px;
        height: 40px;
    }
    
    .sub-container-1 li a, .info p {
        font-size: 10px;
    }
    .sub-container-1 {
        margin: 0 10px;
    }
    .sub-container-1 h3 {
      font-size: 12px;
    }
    .subscribe p {
        font-size: 15px;
    }
}
</style>

<header>
<div class="container">
    <nav>
        <div class="logo">
            <img src="images/ycp-logo.png" alt="logo">
        </div>
        <input type="checkbox" id="click">
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul class="links">
            <li class="link"><a class="active" href="#">Home</a></li>
            <li class="link"><a href="#">ycp</a></li>
            <li class="link"><a href="#">manifesto</a></li>
            <li class="link"><a href="#">news</a></li>
        </ul>
        <div class="donate">
            <a href="#">DONATE</a>
        </div>
   </nav>
</div>
</header>
`;

class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode: 'closed'});

        shadowRoot.appendChild(headerTemplate.content);
     }
}


customElements.define('header-component', Header);