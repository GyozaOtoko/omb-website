<template>
  <div id="app">
    <Header :page="page"></Header>
    <div style="margin-top: 80px">
        <router-view />
    </div>
    <section id="footer">
        <div class="container">
            <div class="text-center">
                <ul class="foot-menu">
                    <!-- <li class="foot-menu-item">
                        <a href="#hero-header">Home</a>
                    </li> -->
                    <li class="foot-menu-item">
                        <a href="/#about">About</a>
                    </li>
                    <li class="foot-menu-item">
                        <a href="/#services">Services</a>
                    </li>
                    <li class="foot-menu-item">
                        <a href="/collection">Incriptions</a>
                    </li>
                    <li class="foot-menu-item">
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
                <div class="socials-media text-center">
                    <ul class="list-unstyled">
                        <li hidden=""><a target="_blank" href="https://discord.gg/ynqBbq7EbF"><i class="fab fa-discord"></i></a></li>
                        <li hidden=""><a target="_blank" href="https://twitter.com/OrdinalMB"><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
                <p class="copyright">2023 © Copyright Ordinal Monkey Business. All rights reserved.</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent.vue'
export default {
    name: 'App',
    components: {
        Header
    },
    computed: {
        page() {
            return this.$route.name;
        }
    },
};
</script>