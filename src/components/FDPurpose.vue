<template>
    <section class="fd-purpose fd_background_silver">
       <h3 class="fd_h2-mobile fd_h2-desktop">
Purpose
       </h3>
       <p class="fd_p-mobile fd_p-desktop">Fundamental Library grew out of a need to ensure a consistent SAP Fiori look and feel across products and applications without having to rebuild them from the ground up.</p>
    </section>
    
    </template>
    
    <style lang="scss" scoped>
    @import "@/assets/scss/styles.scss";

    .fd-purpose{
        padding: 3rem 2rem;
        display: flex;
        flex-direction: column;
        display: flex;


        gap: 24px;

        text-align: center;
        align-items: center;

     
    
    
    
    }
    @media only screen and (min-width: 980px) {
        .fd_p-desktop {
            width:70%;
        }
    }
    
    </style>