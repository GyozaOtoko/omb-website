<template>
    <a v-if="!account" @click="walletConnect('unisat')" class="nav-link resume btn btn-warning text-dark text-xs">Connect Wallet</a>
    <!-- <a v-else class="nav-link resume btn btn-warning text-dark" href="/collection">Collection</a> -->
    <div v-else class="dropdown" ref="walletElement">
        <a class="nav-link resume btn btn-transparent" :style="profileMenu ? `background-color:#212529` : ''" @click="profileMenu = !profileMenu">Wallet</a>
        <div v-if="profileMenu" class="dropdown-menu">
            <a class="dropdown-item" v-on:focus="$event.target.select()" @click="copyElement('accountElement')" role="button" ref="accountElement">{{account}}</a>
            <a class="dropdown-item" @click="account=''" role="button" >Sign Out</a>
        </div>
    </div>
</template>

<script>
// TODO: 1-unisat 2-xverse
export default {
    data() {
        return {
            account: '',
            profileMenu: false,
        };
    },
    computed: {
        window() {
            return window;
        },
    },
    async mounted() {
        if (typeof window.unisat !== 'undefined') {
            this.account = await this.getUnisatAccount();
        }
        this.window = window;
        // Add click event listener to the document
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        // Remove the click event listener when the component is unmounted
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        async walletConnect(wallet) {
            switch (wallet) {
                case 'unisat': {
                    this.account = await this.unisatConnect();
                    break;
                }
                default: {
                    break;
                }
            } 
        },
        async unisatConnect() {
            try {
                let result = await this.window.unisat.requestAccounts();
                console.log(result);
                return result[0];
            } catch (e) {
                console.log('connect failed: '+e);
                return '';
            }
        },
        async getUnisatAccount() {
            try {
                let result = await window.unisat.getAccounts();
                return result[0];
            } catch (e) {
                console.log(e);
                return ''
            }
        },
        handleClickOutside(event) {
            if (!this.$refs.walletElement || !this.$refs.walletElement.contains(event.target)) {
                console.log('Clicked outside the target element');
                this.profileMenu = false;
            }
        },
        copyElement(el) {
            this.$refs[el].focus();
            document.execCommand('copy');
        }
    }
};
</script>