<!-- People html
============================================================= -->
<template>
  <div id="people" class=" ">
    <h1 class="label-view">People</h1>
    <ul class="@grid-routes">

      <li class="$Ecard-medium" v-for="item in items" :key="item.id">

        <figure class="ecard-figure">
          <img class="peoplesImg" v-bind:src="item.img" v-bind:alt="item.alt">
        </figure>

        <div class="ecard-header">
          <span class="ec-title">{{item.title}}</span>
          <span class="ec-number">{{item.id}}</span>
        </div>

        <div class="ecard-body">
          <p class="ec-description">{{item.description}}</p>
        </div>

        <ul class="ecard-footer">
          <li>
            <a :href="item.facebookUrl" target="_blank">
              <i class="ec-fa fab fa-facebook"></i>
            </a>
            <a :href="item.twitterUrl" target="_blank">
              <i class="ec-fa fab fa-twitter"></i>
            </a>
            <a :href="item.youtubeUrl" target="_blank">
              <i class="ec-fa fab fa-youtube"></i>
            </a>
            <a :href="item.linkedinUrl" target="_blank">
              <i class="ec-fa fab fa-linkedin"></i>
            </a>
						<a :href="item.personalUrl" target="_blank">
              <i class="ec-fa fa fa-globe"></i>
            </a>
          </li>
        </ul>

      </li>
    </ul>
  </div>
</template>


<!-- People js
============================================================= -->
<script>
export default {
  name: 'People',
  data() {
    return {
      items: [{
					img: require(`@/assets/images/Satoshi.png`),
					alt: 'an image',
					title: 'Satoshi Nakamoto',
					id: '01',
					description: 'Satoshi Nakamoto is the title used by the unknown person or people who designed bitcoin and created its original reference implementation.',
				},
				{
					img: require(`@/assets/images/VitalikButerin.png`),
					alt: 'an image',
					title: 'Vitalik Buterin',
					id: '02',
					description: 'Vitalik Buterin is a Russian-Canadian programmer and writer primarily known as a co-founder of Ethereum and as a co-founder of Bitcoin Magazine.',
					facebookUrl: "https://www.facebook.com/",
					twitterUrl: "https://www.twitter.com/",
					youtubeUrl: "https://www.youtube.com/",
					personalUrl: "https://www.andrewrico.com/",
					linkedinUrl: "https://www.linkedin.com/"
				},
				{
					img: require(`@/assets/images/Andreas.png`),
					alt: 'an image',
					title: 'Andreas Antonopoulos',
					id: '03',
					description: '(born 1972) is a Greek-British bitcoin advocate. He is a host on the Let`s Talk Bitcoin podcast and a teaching fellow for the M.Sc. Digital Currencies at the University of Nicosia.',
					facebookUrl: "https://www.facebook.com/",
					twitterUrl: "https://www.twitter.com/",
					youtubeUrl: "https://www.youtube.com/",
					personalUrl: "https://www.andrewrico.com/",
					linkedinUrl: "https://www.linkedin.com/"
				},
				{
					img: require(`@/assets/images/Roger.png`),
					alt: 'an image',
					title: 'Roger Ver',
					id: '04',
					description: 'Roger Keith Ver (born January 27, 1979[1]) is an early investor in bitcoin related startups. He was formerly an American citizen. He was born and lived in Silicon Valley.',
					facebookUrl: "https://www.facebook.com/",
					twitterUrl: "https://www.twitter.com/",
					youtubeUrl: "https://www.youtube.com/",
					personalUrl: "https://www.andrewrico.com/",
					linkedinUrl: "https://www.linkedin.com/"
				},
				{
					img: require(`@/assets/images/Charlie.png`),
					alt: 'an image',
					title: 'Charlie Lee',
					id: '05',
					description: '(Charlie Lee is something of a celebrity within the cryptocurrency and blockchain technology community. He is the person responsible for the creation of Litecoin.',
					facebookUrl: "https://www.facebook.com/",
					twitterUrl: "https://www.twitter.com/",
					youtubeUrl: "https://www.youtube.com/",
					personalUrl: "https://www.andrewrico.com/",
					linkedinUrl: "https://www.linkedin.com/"
				},
				{
					img: require(`@/assets/images/Nick.png`),
					alt: 'an image',
					title: 'Nick Szabo',
					id: '06',
					description: 'Nick Szabo is a computer scientist, legal scholar and cryptographer known for his research in digital contracts and digital currency.',
					facebookUrl: "https://www.facebook.com/",
					twitterUrl: "https://www.twitter.com/",
					youtubeUrl: "https://www.youtube.com/",
					personalUrl: "https://www.andrewrico.com/",
					linkedinUrl: "https://www.linkedin.com/"
				},   
			]
    }
  }
}
</script>


<!-- People css
============================================================= -->
<style scoped>

</style>