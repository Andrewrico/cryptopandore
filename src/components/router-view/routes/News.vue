<!-- News html
============================================================= -->
<template>
  <div id="news" class=" ">
    <h1 class="label-view">News</h1>
    <ul class="@grid-routes">
      <li class="$Ecard hoverOn" v-for="card in cards" :key="card.id">
        <a class="ec-linker" :href="card.url" target="_blank">
          <figure class="ecard-figure">
            <img v-bind:src="card.img" v-bind:alt="card.alt">
          </figure>
          <div class="ecard-header">
            <span class="ec-title">{{card.title}}</span>
            <span class="ec-number">{{card.id}}</span>
          </div>
          <div class="ecard-body">
            <p class="ec-description">{{card.description}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<!-- News js
============================================================= -->
<script>
export default {
	name: 'News',
  data(){
        return ({
            cards: [
                {
				url:'https://www.coindesk.com/',
				id:'01',
				img: require(`@/assets/images/coindesk.png`),
				alt: 'an image',
                title:'COINDESK', 
                description: 'CoinDesk is the leading digital media, events and information services company.', 
                },
                {
				url:'https://www.bitcoin.com/',
				id:'02',
				img: require(`@/assets/images/bitcoin.png`),
				alt: 'an image',
                title:'BITCOIN.COM', 
                description: 'Bitcoin.com is your premier source for everything Bitcoin related.', 
				},
				{
				url:'https://cointelegraph.com/',
				id:'03',
				img: require(`@/assets/images/cointelegraph.png`),
				alt: 'an image',
                title:'COINTELEGRAPH', 
                description: 'Cointelegraph is a completely independent publication.', 
				},
				{
				url:'https://www.ccn.com/',
				id:'04',
				img: require(`@/assets/images/ccn.png`),
				alt: 'an image',
                title:'CCN.COM', 
                description: 'Cryptocoinsnews.com and is one of the larger news blogs about Bitcoin and Cryptocurrencies.', 
				},
				{
				url:'https://nulltx.com/',
				id:'05',
				img: require(`@/assets/images/nulltx.png`),
				alt: 'an image',
                title:'NullTX', 
                description: 'NullTX formally known as The Merkle, founded in June 2014 we strive to bring you the latest Crypto, Finance, Infosec, and Tech news.', 
				},
				{
				url:'https://toshitimes.com/',
				id:'06',
				img: require(`@/assets/images/toshitimes.png`),
				alt: 'an image',
                title:'TOSHI TIMES', 
                description: 'Toshi Times is a Global cryptofinance news outlet covering Bitcoin, Ethereum and the entire blockchain space.', 
				},
				{
				url:'https://bitcoinist.com/',
				id:'07',
				img: require(`@/assets/images/bitcoinist.png`),
				alt: 'an image',
                title:'BITCOINIST', 
                description: 'Bitcoinist is the prime source for information about Bitcoin, digital currency and blockchain technology.', 
				},
				{
			    url:'https://bitcoinmagazine.com/',
				id:'08',
				img: require(`@/assets/images/bitcoinmagazine.png`),
				alt: 'an image',
                title:'BITCOIN MAGAZINE', 
                description: 'Bitcoin Magazine is the oldest and most established source of news, information and expert commentary on Bitcoin, blockchain technology and the digital currency industry.', 
				},
				{
				url:'https://www.newsbtc.com/',
				id:'09',
				img: require(`@/assets/images/newsbtc.png`),
				alt: 'an image',
                title:'NewsBTC', 
                description: 'NewsBTC is a news service that covers bitcoin news, technical analysis & forecasts for bitcoin and other altcoins.', 
				},
				{
				url:'https://cryptopanic.com/',
				id:'10',
				img: require(`@/assets/images/cryptopanic.png`),
				alt: 'an image',
               title:'CRYPTOPANIC', 
                description: 'CryptoPanic is a news aggregator platform indicating impact on price and market for traders and cryptocurrency enthusiasts.', 
				},
				{
				url:'https://www.ethnews.com/',
				id:'11',
				img: require(`@/assets/images/ethnews.png`),
				alt: 'an image',
                title:'ETHNEWS', 
                description: 'ETHNews is an emerging provider of Ethereum and Blockchain ecosystem news.', 
				},
				{
				url:'https://99bitcoins.com/',
				id:'12',
				img: require(`@/assets/images/99bitcoins.png`),
				alt: 'an image',
                title:'99BITCOINS', 
                description: 'Everything you need to get started with Bitcoin. Get your first Bitcoins today.', 
				},
				{
				url:'https://bitcoinwarrior.net/',
				id:'13',
				img: require(`@/assets/images/bitcoinwarrior.png`),
				alt: 'an image',
                title:'BITCOIN WARRIOR', 
                description: 'Bitcoin Warrior is an American citizen who lives in Tokyo, Japan with his wife and two children.� By day, he works in the educational field.', 
				},
				{
				url:'https://coinspectator.com/',
				id:'14',
				img: require(`@/assets/images/coinspectator.png`),
				alt: 'an image',
                title:'COINSPECTATOR', 
                description: 'CoinSpectator is a free cryptocurrency news aggregator that enables traders, investors and enthusiasts to monitor thousands of industry news sources in real-time.', 
				},
            ]
        })
    }
}
</script>


<!-- News css
============================================================= -->
<style scope>

</style>
