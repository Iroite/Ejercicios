<script>
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';
    
</script>
<Header></Header>
<slot></slot>
<Footer></Footer>
<style>
    :global(*) {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    @font-face{
        font-family: Roboto;
        src:url('/fonts/Roboto-VariableFont_wdth.ttf') format ('truetype');
    }
    :root{
        --foot-primary:Roboto;
        --color-primary: #057EB599;
        --color-secondary:#666666;
        --color-dark: #000000;
        --color-light:#ffffff;
    }
   :global(body) {
     background: white;
     color:var(--color-secondary) ;
     -webkit-font-smoothing: antialiased;
    }
    
    :global(body, input, button){
     font-size: 14px;
     font-family: var(--font-primary);
    }
    
    :global(button) {
     cursor: pointer;
    }
</style>