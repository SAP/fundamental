<template  >
    <section class="fd-versatile fd_background_silver horizon">
        <div class="fd-versatile__left">
            <h2 class="fd_h2-mobile fd_h2-desktop"> Versatile</h2>
            <p class="fd_p-mobile fd_p-desktop">The Fundamental Library is a versatile tool that can readily accommodate new technologies while also providing support for existing ones with ease of use to fit any developer’s project needs.</p>
            <div class="fd-versatile__buttons">
                <div class="fd-versatile__buttons-left">
                    <button data-set-theme="horizon" @click="themeSwitcher(1); themeName=1 " >Horizon</button> 
                    <button data-set-theme="quartz-light" @click="themeSwitcher(2); themeName=2"> Quartz</button>
                </div>
                <div class="fd-versatile__buttons-right">
                <span  v-html="svgs.sun" ></span>

            
  
        <label class="fd-versatile__toggle">
  <input type="checkbox" v-model="toggle" name="toggle" @change="ToggleTheme()">
  <span class="slider round"></span>
</label>

  


                
                <span  v-html="svgs.moon"></span>
                </div>
            </div>
           
            <div class="fd-versatile__showcase  " id="showcase" >
              <div class="fd-card" role="region" aria-label="Card Anatomy in Fundamental Library Styles">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('alain.png')"
                    role="img"
                    aria-label="Alain Chevalier"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Alain Chevalier</div>
                        <span class="fd-object-status fd-card__counter">6 of 12</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Sales Executive</div>
                    </div>
                </div>
            </a>
          
            <div class="fd-card__content" role="group" aria-label="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>


            <div class="fd-bar fd-bar--footer fd-card__bar-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>

                  
                </div>
            </div>
        </div>
            </div>
            </div>
            
        
<!-- right  side -->
        <div class="fd-versatile__right">
          <div class="fd-versatile__right-buttons">
            <button 
       
          @click="switchCode()"
          >
    <span v-html="svgs.styles" aria-hidden="true"> </span> Styles</button>
    <button 
         
          @click="switchCode1()" >
    <span v-html="svgs.angular" aria-hidden="true"> </span> Core</button>
          </div>
            
          <CodeEditor   width="auto" read_only="true" font_size="11px" :copy_code="true" class="github_dark"
          :language_selector="false" :languages="[['javascript', 'HTML']]" :wrap_code="true" border_radius="35px" height="500px" 
        :value=modelValue >
            </CodeEditor>
       
          
         
   
    </div>
        
            

   
 
    </section>
              
     
         </template>
         
         
 <script >
 
 import svgs from "@/assets/js/svg.js";

 import CodeEditor from 'simple-code-editor';

 function initialState (){
  return {
   css:{}
  }
}

 
     export default {
       
     
       name: "FDVersatile",
       components: {
      CodeEditor,
   
    
 
       },


       data() {
         return {
           svgs,
          isLoadingArray : [  `<div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/alain.png')"
                    role="img"
                    aria-label="Alain Chevalier"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Alain Chevalier</div>
                        <span class="fd-object-status fd-card__counter">6 of 12</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Sales Executive</div>
                    </div>
                </div>
            </a>
          
            <div class="fd-card__content" role="group" aria-label="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>


            <div class="fd-bar fd-bar--footer fd-card__bar-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>

                  
                </div>
            </div>
        </div>`,
      
    `<fd-card>
    <fd-card-header>
        <h2 fd-card-title>Card Title</h2>
    </fd-card-header>
    <fd-card-content>
        <ul fd-list [noBorder]="true">
            <li fd-list-item>
                <span fd-list-title> item 1 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 2 </span>
            </li>
        </ul>
    </fd-card-content>
</fd-card>

<br />
<br />

<h3>Card header can be at the bottom as well</h3>
<fd-card class="fd-docs-example-card-fix-width">
    <fd-card-content>
        <img
            width="100%"
            src="https://placeimg.com/298/300/nature/1"
            class="fd-docs-example-image-bottom-adjustment"
            alt="first image"
            aria-label="image"
            title="image"
        />
    </fd-card-content>
    <fd-card-header>
        <h2 fd-card-title>Card Title</h2>
    </fd-card-header>
</fd-card>

<br />
<br />

<h3>Card header with avatar, subtitle, counter and badge</h3>
<fd-card badge="New" cardType="list">
    <fd-card-header>
        <fd-avatar
            image="http://picsum.photos/id/1018/400"
            [circle]="true"
            size="s"
            ariaLabel="avatar image"
            title="avatar image"
        ></fd-avatar>
        <h2 fd-card-title>Card Title</h2>
        <h3 fd-card-subtitle>Card Subtitle</h3>
        <span fd-card-counter status="positive">3 of 10</span>
    </fd-card-header>
    <fd-card-content>
        <ul fd-list [noBorder]="true">
            <li fd-list-item>
                <span fd-list-title> item 1 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 2 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 3 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 4 </span>
            </li>
        </ul>
    </fd-card-content>
</fd-card>

<h3>Card header with icon avatar, subtitle, counter and badge</h3>
<fd-card badge="New" cardType="list">
    <fd-card-header>
        <fd-avatar glyph="cart" [circle]="true" size="s" ariaLabel="avatar image" title="avatar image"></fd-avatar>
        <h2 fd-card-title>Card Title</h2>
        <h3 fd-card-subtitle>Card Subtitle</h3>
        <span fd-card-counter status="positive">3 of 10</span>
    </fd-card-header>
    <fd-card-content>
        <ul fd-list [noBorder]="true">
            <li fd-list-item>
                <span fd-list-title> item 1 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 2 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 3 </span>
            </li>
            <li fd-list-item>
                <span fd-list-title> item 4 </span>
            </li>
        </ul>
    </fd-card-content>
</fd-card>`],
    modelValue: `<div class="fd-card" role="region" aria-label="Card Anatomy Example 1">
            <a class="fd-card__header" tabindex="0">
                <span
                    class="fd-avatar fd-avatar--s fd-avatar--circle fd-avatar--thumbnail fd-card__avatar"
                    style="background-image: url('/assets/images/alain.png')"
                    role="img"
                    aria-label="Alain Chevalier"></span>
                <div class="fd-card__header-text">
                    <div class="fd-card__title-area">
                        <div class="fd-card__title">Alain Chevalier</div>
                        <span class="fd-object-status fd-card__counter">6 of 12</span>
                    </div>
                    <div class="fd-card__subtitle-area">
                        <div class="fd-card__subtitle">Sales Executive</div>
                    </div>
                </div>
            </a>
          
            <div class="fd-card__content" role="group" aria-label="Card Content">
                <ul class="fd-list fd-list--no-border" role="list">
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--cart"></i>
                        <span class="fd-list__title">List item 1</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--wrench"></i>
                        <span class="fd-list__title">List item 2</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--leads"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--batch-payments"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--retail-store"></i>
                        <span class="fd-list__title">List item 3</span>
                    </li>
                    <li role="listitem" tabindex="0" class="fd-list__item">
                        <i role="presentation" class="fd-list__icon sap-icon--travel-expense"></i>
                        <span class="fd-list__title">List item 4</span>
                    </li>
                </ul>
            </div>


            <div class="fd-bar fd-bar--footer fd-card__bar-footer">
                <div class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>

                  
                </div>
            </div>
        </div>`, 

     themeName:1,
    css: {},
    toggle: false,


           
         };
       },
    
   

       methods: {
        switchCode() {
  
      this.modelValue = this.isLoadingArray[0];
    
        },
        switchCode1() {
  
  this.modelValue = this.isLoadingArray[1];


    },
  

   
    async themeSwitcher (themeName)  {
      let css = undefined;
      switch (themeName) {
        case 1: 
        css=(await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css")).default;
 
        console.log("horizon");
        themeName==1;
        break;
        case 2:
        css= (await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css")).default; 
        console.log("fiori");
        themeName===2;
        break;
      
      }
return css;
    },

    async ToggleTheme () {
      let css = undefined;
      if (this.themeName===1 && this.toggle===false) 
        {
            console.log(this.themeName)
            css=(await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css")).default;
        console.log("horizon light");
       
        Object.assign(this.css, initialState());

        
        }
        else if (this.themeName===1 && this.toggle===true) 
        {
            css=(await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon_dark/css_variables.css")).default;
        console.log("horizon dark");
        Object.assign(this.$data, initialState());
        }

         else if (this.themeName===2 && this.toggle===false) 
        {console.log(this.themeName)
            css=(await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css")).default;
        console.log("quartz light");
        Object.assign(this.$data, initialState());
        }

        else if (this.themeName===2 && this.toggle===true) {
            css=(await import("@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3_dark/css_variables.css")).default;
        console.log("quartz dark");
        Object.assign(this.$data, initialState());
    
        }
    
        else {
            css=null;
            console("null");
        }
     
       
        
       
return css;
    },
   
  
  
       }
     };
         </script>

   

         
         <style lang="scss" scoped>
  



   

 .fd-versatile__toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.fd-versatile__toggle input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
    cursor: pointer;
    top: 2;
    left: 1px;
    right: 0;
    bottom: 2px;
    transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "-";
    text-align: center;
    color:#475E75;
  height: 26px;
  width: 30px;

  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}



input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
 .fd-versatile {
    display: flex;
            flex-direction: column;;
            gap:3%;

    &__toggle {
        display: flex;
flex-direction: column;
align-items: flex-start;
padding: 2px 8px 2px 2px;
gap: 10px;

width: 48px;
height: 28px;

/* Grey/Grey 7 */
background: #475E75;
border-radius: 15px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
border:0;

    &-element {
      input {
        display: none;
      }

      label {
        display: flex;
        cursor: pointer;
        font-family: "Ubuntu";
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1rem;
        align-items: center;
        border-radius: 2.5rem;
        flex-direction: column;
        padding: 0.5rem 1rem;
        text-transform: uppercase;
        transition: border 0.5s ease;
        color: #2865be;
      }

      input:checked {
        & + label {
          background: linear-gradient(73.81deg, #7843d5 0.22%, #1dc4ff 99.78%);
          border-radius: 2.5rem;
          color: white;
          box-shadow: 1.54842px 3.09685px 9.29055px rgba(123, 92, 178, 0.35);

          time {
            color: white;
          }
        }
      }

      label {
        time {
          font-size: 0.75rem;
          font-weight: normal;
          text-transform: capitalize;
          color: #2865be;
        }
      }
    }
  }

    
    &__left{

        display: flex;
        flex-direction: column;
        gap:24px;
    }


    &__buttons{
        display: flex;
        flex-direction:column;
        gap:15px;
    }

  


    &__buttons-left {
        display: flex;
        flex-direction: row;
        width:100%;
border-bottom: 1px solid #82DEFF;
gap: 36px;


button {
    font-family: '72';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 160%;
/* identical to box height, or 26px */
font-feature-settings: 'pnum' on, 'lnum' on;

color: #007EA3;
border: 0;

&:active {
    border-bottom: 4px solid rgba(75, 181, 211, 0.7);

}

}

    }

    &__buttons-right {
        display: flex;
        flex-direction: row;
        width: 107px;
       
        align-items: center;
       
        span {
          
        
      width: 24px;
      height: 24px;
      color: #007ea3;
    
        }
    }

    &__showcase {
     

left: 0px;
top: 0px;
padding: 28px;
/* Grey/Grey 1 */
background: #F5F6F7;
/* Shadows/Grey/Level 1 */
box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16), 0px 8px 16px rgba(91, 115, 139, 0.16);
border-radius: 24px;
z-index: 10;

// &::after{
//    left:10rem;
//    bottom:15rem;
//    z-index: 5;
//    content: '';
//    position: absolute;
   
//     width: 300px;
// height: 304px;
// transform: skew(20deg);
// // transform: matrix(-1, 0, 0, 1, 0, 0);
//  background: linear-gradient(180deg, #57BDD2 0%, rgba(130, 222, 255, 0.65) 100%);


// }
    }



    &__right-buttons{
      display: flex;
      flex-direction: row;

      button {
        border:none;
        width:107px;
      }
    }

    &__right-code {
      width: 310px;
height: 442px;
left: 0px;
top: 142px;

/* Grey/Grey 7 */
background: #475E75;
/* Shadows/Grey/Level 1 */
box-shadow: 0px 0px 2px rgba(91, 115, 139, 0.16), 0px 8px 16px rgba(91, 115, 139, 0.16);
border-radius: 35px;
    }

 }
 .fd_h2-mobile {
    text-align: left;
 }
 .fd_p-mobile {
    width: 100%;
 }
 
 
         @media only screen and (min-width: 980px) {

        .fd-versatile {
            display: flex;
            flex-direction: row;
            gap:3%;

            &__left {
                width: 50%;
            }

            &__right {
                display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 50%;
            }
            &__right-buttons {
                gap: 3%;
          
        button {

            display: flex;
    flex-direction: column;
    gap: 0px;
    justify-items: center;
    align-content: center;
    align-items: center;
    width: 100px;
        }
        span {
          
        
      width: 84px;
      height: 84px;
    
    
        }
    }
        }
 .fd_h2-desktop {
    text-align: left;
 }
 .fd_p-desktop {
    width: 80%;
 }
 

 
     
         }
 
        
         </style>


