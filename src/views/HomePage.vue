<template>
  <section id="hero-header" style="display: flex;align-items: center;justify-content: center;height: 100%;">
        <div class="container-fluid">
            <div class="header-content col-md-12">
                <div class="row fade-up" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800"
                    data-aos-once="true">
                    <div class="col bubble">
                        <img src="https://bafkreihhla7v2oiulx6yuuy7b7sib4nyveioipbtms3eglbpcq7dhqh47i.ipfs.nftstorage.link/"
                        class="profile-img mirrored img-fluid" alt="OMB king">
                        <p class="bubble-sub">Natmonkeys</p>
                    </div>
                    <div class="col bubble">
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
}
.bubble {
    text-align: center;
}
.bubble-sub {
    padding-top: 20px;
}
#hero-header .header-content .ombiz-font {
    font-family: "Press Start 2P", cursive;
    font-size: 1.2rem;
}
</style>