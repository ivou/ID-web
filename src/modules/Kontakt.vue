<template>
    <div v-bind:class="{ centeredView }" class="content">

        <div class="section">
            <h2>Kontakt</h2>
        </div>
        <div class="section kontakt">

            <div class="hero">
                <h2>dr. Marko Ivanović <br>kirurg </h2>

                <p>info@id-osijek.hr <br>
                091 2 4444 75</p>
            </div>

            <div class="location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.7091330709713!2d18.67245391542159!3d45.55617647910203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7a9bb216bc3%3A0x3563df9c052f5aa!2sUl.+Ivana+Gunduli%C4%87a+72%2C+31000%2C+Osijek!5e0!3m2!1shr!2shr!4v1530566888302" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

            <div class="description">
                <p>ID društvo s ograničenom odgovornošću za obavljanje zdravstvene djelatnosti kirurgije <br>
                Sjedište i adresa: Josipa Jurja Strossmayera 7, 31000 Osijek <br>
                OIB: 78791772005 <br>
                MB: 4770897</p>

                <p>Temeljni kapital od 20.000,00 kn uplaćen u cijelosti <br>
                Erste&Steiermärkische Bank <br>
                Jadranski trg 3A, Rijeka <br>
                IBAN: HR6424020061100839654</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'Kontakt',
        data(){
            return {
                centeredView: false
            }
        },
/*************************************************** methods */
        methods: {
            check_view: function() {

            var content = document.querySelector('.content').offsetHeight;

                if ( content + 400 < window.innerHeight){
                    this.centeredView = true;

                }else{
                    this.centeredView = false;
                }

            },
            resizeCheck: function() {
                window.addEventListener('resize', this.check_view);
            }
        },
/*************************************************** mounted */
        mounted(){
            this.check_view();
            this.resizeCheck();
        }
    };
</script>
