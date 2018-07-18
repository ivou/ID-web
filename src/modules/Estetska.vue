<template>
    <div v-bind:class="{ centeredView }" class="content">

        <div class="section">
            <h2>ESTETSKA MEDICINA</h2>
        </div>
        <div class="section">
            <p>Zahvati pomlađivanja lica(PRP)</p>
            <p>Hijaluronski fileri</p>
            <p>Botox</p>
            <p>Mezoniti za lifting lica</p>
            <p>Oporavak opadanja kose</p>
            <p>Estetski zahvati</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Estetska_medicina',
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
