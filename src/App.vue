<template>
    <div id="app">
        <div class="main">
            <header id="navigation">
                <nav class="site-header sticky-top py-1 navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href="/"><img class="img-responsive" src="https://bafkreihhla7v2oiulx6yuuy7b7sib4nyveioipbtms3eglbpcq7dhqh47i.ipfs.nftstorage.link/"
                                alt="Ordinal Monkey Business" title="OMB logo"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="/ombiz">OMBiz</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/natmonkeys">Natmonkeys</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" target="_blank"
                                        href="https://ordinal-monkey-business.gitbook.io/whitepaper/">Whitepaper</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link resume btn btn-warning text-dark" href="/#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="page-wrapper">
                <router-view />
            </div>
            <section id="footer">
                <div class="container">
                    <div class="text-center">
                        <ul class="foot-menu">
                            <li class="foot-menu-item">
                                <a href="/#about">About</a>
                            </li>
                            <li class="foot-menu-item">
                                <a href="/#services">Services</a>
                            </li>
                            <li class="foot-menu-item">
                                <a href="https://ordinal-monkey-business.gitbook.io/whitepaper"
                                    target="_blank">Whitepaper</a>
                            </li>
                            <li class="foot-menu-item">
                                <a href="/#contact">Contact</a>
                            </li>
                        </ul>
                        <div class="socials-media text-center">
                            <ul class="list-unstyled">
                                <li hidden=""><a target="_blank" href="https://discord.gg/ynqBbq7EbF"><i
                                            class="fab fa-discord"></i></a></li>
                                <li hidden=""><a target="_blank" href="https://twitter.com/OrdinalMB"><i
                                            class="fab fa-twitter"></i></a></li>
                            </ul>
                        </div>
                        <p class="copyright">2024 © Copyright Ordinal Monkey Business. All rights reserved.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        }
    },
    watch: {
        '$route'() {
        }
    },
    methods: {
        updateParentStyle() {
        }
    },
    mounted() {
        
    }
};
</script>

<style>
.main {
    display: flex;
    flex-flow: column;
    height: 100vh;
}
#page-wrapper {
    padding-top: 80px;
    flex: 1;
}
</style>