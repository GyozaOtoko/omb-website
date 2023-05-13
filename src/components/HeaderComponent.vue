<template>
    <header id="navigation">
        <nav class="site-header sticky-top py-1 navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/"><img class="img-responsive" src="/images/ombfavicon.webp" alt="Ordinal Monkey Business" title="OMB logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" target="_blank" href="https://ordinal-monkey-business.gitbook.io/whitepaper/">Whitepaper</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <Wallet></Wallet>
                            <!-- <a v-else class="nav-link resume btn btn-dark" @click="showSubMenu">Profile</a> -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import Wallet from '@/components/WalletConnect.vue'
export default {
    data() {
        return {
        }
    },
    mounted() {
        
    },
    props: ['page'],
    components: {
        Wallet
    },
    computed: {

    },
    methods: {
        
    }
}
</script>