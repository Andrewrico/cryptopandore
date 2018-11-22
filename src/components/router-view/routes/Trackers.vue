<!-- Trackers html 
============================================================= -->
<template>
  <div id="trackers" class=" ">
    <h1 class="label-view">Trackers</h1>
    <ul class="@grid-routes">

      <li class="$Ecard hoverOn" v-for="item in items" :key="item.id">
        <a class="ec-linker" :href="item.url" target="_blank">

        <div class="ecard-figure">  
          <img v-bind:src="item.img" v-bind:alt="item.alt">
        </div> 

          <div class="ecard-header">
            <span class="ec-title">{{item.title}}</span>
            <span class="ec-number">{{item.id}}</span>
          </div>

          <div class="ecard-body">
            <p class="ec-description">{{item.description}}</p>
          </div>

        </a>
      </li>
    </ul>
  </div>
</template>


<!-- trackers js 
============================================================= -->
<script>
export default {
  name: 'Trackers',
  data() {
    return ({
      items: [{
          url: 'https://coinmarketcap.com/',
          id: '01',
          img: require(`@/assets/images/coinmarketcap.png`),
          alt: 'an image',
          title: 'COINMARKETCAP',
          description: 'Is a website that tracks most of the alternative coins that has hit the market as well as Bitcoins and shows users the current value in dollars and Bitcoins for each coin.',
        },
        {
          url: 'https://onchainfx.com/',
          id: '02',
          img: require(`@/assets/images/onchainfx.png`),
          alt: 'an image',
          title: 'ONCHAINFX',
          description: 'Is a website that tracks most of the alternative coins that has hit the market as well as Bitcoins and shows users the current value in dollars and Bitcoins for each coin.',
        },
        {
          url: 'https://coincodex.com/',
          id: '03',
          img: require(`@/assets/images/coincodex.png`),
          alt: 'an image',
          title: 'COINCODEX',
          description: 'Is a digital platform of cryptocurrency market coverage with real-time coin prices and charts',
        },
        {
          url: 'https://www.cryptocompare.com/',
          id: '04',
          img: require(`@/assets/images/cryptocompare.png`),
          alt: 'an image',
          title: 'CRYPTO COMPARE',
          description: 'At CryptoCompare we pride ourselves in showing the most accurate live prices, charting and market analysis from 65 of the top crypto exchanges globally.',
        },
        {
          url: 'https://bitinfocharts.com/',
          id: '05',
          img: require(`@/assets/images/bitinfocharts.png`),
          alt: 'an image',
          title: 'BITINFOCHARTS',
          description: 'Is a website that tracks most of the alternative coins that has hit the market as well as Bitcoins and shows users the current value in dollars and Bitcoins for each coin.',
        },
        {
          url: 'https://www.coingecko.com/en',
          id: '06',
          img: require(`@/assets/images/coingecko.png`),
          alt: 'an image',
          title: 'COINGECKO',
          description: 'Is a cryptocurrency ranking chart app that ranks digital currencies by developer activity, community, and liquidity.',
        },
        {
          url: 'https://coincheckup.com/',
          id: '07',
          img: require(`@/assets/images/coincheckup.png`),
          alt: 'an image',
          title: 'COINCHECKUP',
          description: 'Is a cryptocurrency analysis and research platform designed to offer you transparent information on each cryptocurrency and help your investment decisions.',
        },
        {
          url: 'http://coincap.io/',
          id: '08',
          img: require(`@/assets/images/coincap.png`),
          alt: 'an image',
          title: 'COINCAP',
          description: 'Is one of the major leading sites online that deal with the trade of cryptocurrencies.',
        },
        {
          url: 'https://coinlib.io/',
          id: '09',
          img: require(`@/assets/images/coinlib.png`),
          alt: 'an image',
          title: 'COINLIB',
          description: 'Tracks live and historic cryptocurrency prices, news, charts and coin rankings. Portfolio tracking, price alerts and other advanced tools.',
        },
        {
          url: 'https://bitcoinaverage.com/',
          id: '10',
          img: require(`@/assets/images/bitcoinaverage.png`),
          alt: 'an image',
          title: 'BITCOINAVERAGE',
          description: 'Is the blockchain’s premier source of historical bitcoin price data. In 2013, we launched the world’s first Bitcoin price index, which has grown to be one of the most respected and widely cited Bitcoin Price Indices.',
        }
      ]
    })
  }
}
</script>


<!-- trackers css 
============================================================= -->
<style scope>

</style>
