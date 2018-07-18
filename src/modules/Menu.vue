<template>
    <div class="site-menu">
        <div class="menu-btn" v-on:click="menuActive = !menuActive">
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
        </div>

        <!-- Desktop menu -->
        <ul id="desktopMenu" v-bind:class="{ menuActive }" v-on:mouseleave="menuActive = false">
            <li><router-link to="/rejuvenacijska">REJUVENACIJSKA MEDICINA</router-link></li><br>
            <li><router-link to="/estetska">ESTETSKA MEDICINA</router-link></li><br>
            <li><router-link to="/ultrazvuk">ULTRAZVUK</router-link></li><br>
            <li><router-link to="/kontakt">KONTAKT</router-link></li><br>
        </ul>

        <!-- Mobile menu -->
        <ul id="mobileMenu" v-bind:class="{ menuActive }" v-on:click="menuActive = false">
            <li><router-link to="/rejuvenacijska">REJUVENACIJSKA MEDICINA</router-link></li><br>
            <li><router-link to="/estetska">ESTETSKA MEDICINA</router-link></li><br>
            <li><router-link to="/ultrazvuk">ULTRAZVUK</router-link></li><br>
            <li><router-link to="/kontakt">KONTAKT</router-link></li><br>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'site-menu',
        data(){
            return {
                menuActive: false
            }
        },
/*************************************************** methods */
        methods: {
            switchMenu: function() {

                    var screenWidth = window.innerWidth;
                    var desktopMenu = document.querySelector('#desktopMenu');
                    var mobileMenu = document.querySelector('#mobileMenu');

                    if(screenWidth > 640){
                        mobileMenu.style.display = 'none';
                        desktopMenu.style.display = 'block';
                        console.log('desktop width');
                    }else{
                        mobileMenu.style.display = 'block';
                        desktopMenu.style.display = 'none';
                        console.log('mobile width');
                    }
                }
            },
/*************************************************** mounted */
        mounted(){
            this.switchMenu();
        }
    };
</script>
