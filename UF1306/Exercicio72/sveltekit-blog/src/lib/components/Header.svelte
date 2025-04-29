<header class="header">
    <div class="header__logos">
        <img class="header__logo" src="/xunta.svg" alt="Logo Xunta Galicia"/>
        <img class="header__logo" src="/turismo-logo.svg" alt="Logo de Turismo de Galicia"/>
    </div>
    <nav class="header__nav">
        <a href="/" class="header__a">Inicio</a>
        <a href="/" class="header__a">Blog</a>
        <a href="/" class="header__a">Contacto</a>
        <a href="" class="header__a">
            <img src="/icons/lupa.svg" alt="Icono de buscar" class="header__buscar">
        </a>

    </nav>
</header>
<section class="hero">
    <div class="hero__title">
        <h1 class="hero__h1">
            BLOG
        </h1>
        <h4 class="hero__h4">
            Inicio > Blog
        </h4>
    </div>
</section>
<style>
    .header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-primary);
        padding: 3rem 2rem 1rem 2rem;
        position: fixed;
        top:0;
        left:0;
        width: 100%;
    }

    .header__logos{
        display: flex;
        gap: 2.3rem;
    }
    .header__logo{
        height: 2rem; /* los archivo SVG necesitan tamaño*/
    }
    .header__nav{
        display:flex;
        gap:2.5rem;
    }
    .header__a{
        
        text-decoration: none;
        font-family: var(--color-primary);
        font-size: 1.3rem;
        color:var(--color-light);
        font-weight: 600;
        }
    .hero{
        background-image: url('/images/castro-barona.jpg');
        width: 100%;
        height: 100vh;
        background-size: cover;
        position: relative;
        top:0;
        left:0;
        z-index: -1;
}
    .hero__title{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;
        z-index: 1;
}
.hero__h1{
    font-size:5rem;
    color:var(--color-light);
    font-weight: 700;
}
.hero__h4{
    font-size: 1.5rem;
    color: var(--color-light);
    font-weight: 700;
}

</style>