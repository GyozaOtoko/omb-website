<template>
  <section id="hero-header" style="display: flex;align-items: center;justify-content: center;height: 100%;">
        <div class="container">
            <div class="header-content col-md-12">
                <div class="row fade-up" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                    data-aos-once="true">
                    <div class="col-md-6 bubble" @click="$router.push('natmonkeys')">
                        <!-- <img src="https://bafkreihhla7v2oiulx6yuuy7b7sib4nyveioipbtms3eglbpcq7dhqh47i.ipfs.nftstorage.link/" -->
                        <img src="https://bafkreib4akz7rn5xn65ni722quwtne2bil4ahquqtbrye2snak6jqimznu.ipfs.nftstorage.link/" class="profile-img mirrored img-fluid" alt="OMB king">
                        <p class="bubble-sub">Natmonkeys</p>
                    </div>
                    <div class="col-md-6 bubble" @click="$router.push('ombiz')">
                        <img src="https://ordinals.com/content/a6d26173bf0a20b1f3ef1876eabc2c5976455c9bc88ef83e7b2b27dc235983c4i0"
                            class="profile-img img-fluid" alt="OMB king">
                        <p class="bubble-sub ombiz-font">Ordinal Monkey <br>Business</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#hero-header .header-content p {
    font-size: 2rem;
}
#hero-header .profile-img.mirrored {
    transform: rotateY(0deg);
}
#hero-header .profile-img {
    max-width: 60%;
    float: none;
    transition: 1s ease;
}
#hero-header .bubble:hover {
    cursor: pointer;
    transform: scale(1.1);
}
#hero-header .bubble {
    padding: 20px
}
@media (min-width: 768px) {
    #hero-header .bubble {
        padding: none;
    }
    #hero-header .profile-img {
        opacity: 0.8;
    }
    #hero-header .bubble:hover {
        transform: scale(1.5);
        opacity: 1;
    }
    #hero-header .profile-img:hover {
        opacity: 1;
    }
}
.bubble {
    text-align: center;
    transition: 1s ease;
}
.bubble-sub {
    padding-top: 20px;
}
#hero-header .header-content .ombiz-font {
    font-family: "Press Start 2P", cursive;
    font-size: 1.2rem;
}
</style>