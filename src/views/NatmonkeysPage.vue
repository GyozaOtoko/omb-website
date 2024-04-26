<template>
    <section id="collection" style="padding: 10vh 0">
        <div class="container">
            <div class="pageHeader d-flex flex-column justify-content-center align-items-center pb-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="true">
                <div class="container">
                    <div class="header-content col-md-12">
                        <div class="row fade-up" data-aos="fade-up" data-aos-easing="ease-in-out"
                            data-aos-duration="800" data-aos-once="true">
                            <div class="col-md-7 align-self-center">
                                <h1>Natmonkeys</h1>
                                <p><b>8064 Monkeys generated straight from the Bitcoin blockchain!</b></p>
                                <p>Natmonkey #:</p>
                                <input id="blk" type="number" v-model="blockNumber" @input="onBlockChange" />
                                <div id="cigDiv" class="cig m-2" v-show="showCigCheckbox">
                                    <input id="cig" style="padding:20px" @click="checkCig" type="checkbox"
                                        v-model="cigChecked" />
                                    <label for="cig" style="color: #fff; padding-left: 20px; font-size: 12px">Show
                                        Cigarette</label>
                                </div>
                                <div class="mt-4">
                                    <a href="https://magiceden.io/ordinals/marketplace/natmonkeys" target="_blank"
                                        class="btn btn-warning" role="button">Adopt a Natmonkey</a>
                                </div>
                            </div>
                            <div id="viewerWrapper" class="d-flex col-md-5"
                                style="min-height: 400px;min-width: 400px; margin-top: 50px; cursor: pointer"
                                @click="download">
                                <div id="natmonkeysviewer" style="position: relative;width: 100%;height: 100%;"
                                    v-html="htmlContent"></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <a href="https://ordinal-monkey-business.gitbook.io/natmonkeys" class="btn" style="color: #fff"
                            target="_blank"><i class="icofont-diamond" style="vertical-align: text-top"></i> Traits &
                            Rarities</a>
                    </div>
                </div>
            </div>
        </div>
        <Transition name="fade">
            <div id="modalWrapper" v-show="showModal"
                style="position: absolute;height: 100vh;width: 100vw;background-color:rgba(0,0,0, 0.5);top: 0;display: flex;justify-content: center;align-items: center"
                @click="showModal = false">
                <div id="modal">
                    <canvas id="myCanvas" style="border:2px solid black;" :width="width" :height="height"></canvas>
                </div>
            </div>
        </Transition>
    </section>
</template>

<script>
// import axios from 'axios'
import nftData from '@/assets/ombInscriptions.json'
import { generateHtmlBasedOnBlockNumber } from '@/helpers/generate';
// import html2canvas from 'html2canvas';

// import _ from 'lodash'
export default {
    data() {
        return {
            collection: nftData,
            sort: 'number',
            blockNumber: '',
            showModal: false,
            htmlContent: '',
            width: 1024,
            height: 1024,
            downloadHeight: 1024,
            downloadWidth: 1024,
            cigChecked: true
        }
    },
    components: {
    },
    computed: {
        originalString: function () {
            if (this.blockNumber)
                return this.blockNumber.toString()
            else return ''
        },
        showCigCheckbox: function () {
            if (this.originalString.length >= 4) {
                if (this.originalString.padStart(7, '0').split('').map(Number).reverse()[3] == 4)
                    return true
            }
            return false
        }
    },
    methods: {
        onBlockChange() {
            this.update()
        },
        update() {
            this.htmlContent = generateHtmlBasedOnBlockNumber(this.blockNumber, null, null, this.cigChecked)
        },
        download() {
            console.log('download clicked');
            this.renderHtmlToCanvas(document.getElementById('myCanvas'), generateHtmlBasedOnBlockNumber(this.blockNumber, `1024px`, `1024px`, this.cigChecked));
            this.showModal = true;
        },
        renderHtmlToCanvas(canvas, html) {
            const ctx = canvas.getContext('2d');
            const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
            <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${html}</div>
            </foreignObject>
            </svg>`;
            const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
            const svgObjectUrl = URL.createObjectURL(svgBlob);
            const tempImg = new Image();
            tempImg.addEventListener('load', function () {
                ctx.drawImage(tempImg, 0, 0);
                URL.revokeObjectURL(svgObjectUrl);
            });

            tempImg.src = svgObjectUrl;
        },
        checkCig() {
            this.cigChecked = !this.cigChecked;
            this.update()
        }
    },
    async mounted() {
        this.update();
    },
};
</script>
<style>
.cls-5 {
    mix-blend-mode: multiply;
    opacity: .4
}

.layer {
    position: absolute;
    top: 0px;
    left: 0px;
    image-rendering: pixelated;
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>