<template>
    <div v-bind:class="{ centeredView }" class="content">

        <div class="section">
            <h2>Ultrazvuk</h2>
        </div>
        <div class="section">
            <p>Plazma bogata trombocitima (PRP) i matične stanice za oporavak zglobova, mišića i tetiva</p>
            <p>Liječenje sportskih i traumatoloških ozlijeda</p>
            <p>Liječenje poslijedica reumatoloških i ortopedskih bolesti</p>
            <p>Lokalne metode oporavka i smanjenja boli (ramena, leđa, mišića, kralježnice, trnjenja u rukama)</p>
            <p>Opća kirurgija i mali kirurški zahvati</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Ultrazvuk',
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
