<!-- Exchanges html 
============================================================= -->
<template>
  <div class="exchanges  ">
    <h1 class="label-view">Exchanges</h1>
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


<!-- Exchanges  js 
============================================================= -->
<script>
export default {
  name: 'Exchanges',
  data() {
    return {
      items: [{
          url: "https://pro.coinbase.com/trade/BTC-USD",
          id: '01',
          img: require(`@/assets/images/coinbasepro.png`),
          alt: 'an image',
          title: 'COINBASE PRO',
          description: 'Formally knowns as GDAX (Global Digital Asset Exchange), Coinbase Pro offers a secure and easy way for traders of all levels to buy and sell digital assets online instantly across twelve trading pairs.',
        },
        {
          url: "https://www.binance.com/",
          id: '02',
          img: require(`@/assets/images/binance.png`),
          alt: 'an image',
          title: 'BINANCE',
          description: 'Binance is a relatively new Chinese company, created by experienced professionals in the cryptocurrency space.',
        },
        {
          url: "https://bittrex.com/",
          id: '03',
          img: require(`@/assets/images/bittrex.png`),
          alt: 'an image',
          title: 'BITTREX',
          description: 'Bittrex is a global leader in the blockchain revolution. We operate the premier U.S.-based blockchain trading platform.',
        },
        {
          url: "https://www.poloniex.com/",
          id: '04',
          img: require(`@/assets/images/poloniex.png`),
          alt: 'an image',
          title: 'POLONIEX',
          description: 'Poloniex is a US-based cryptocurrency exchange platform. The company was founded in January 2014 by Tristan D`Agosta and is based in Wilmington, Delaware.',
        },
        {
          url: "https://www.kraken.com/",
          id: '05',
          img: require(`@/assets/images/kraken.png`),
          alt: 'an image',
          title: 'KRAKEN',
          description: 'Founded in 2011, San Francisco-based Kraken is the largest Bitcoin exchange in euro volume and liquidity.',
        },
        {
          url: "https://cex.io/",
          id: '06',
          img: require(`@/assets/images/cex.png`),
          alt: 'an image',
          title: 'CEX.IO',
          description: 'Established in 2013 as the first cloud mining provider, CEX.IO has become a multi-functional cryptocurrency exchange, trusted by over a million users.',
        },
        {
          url: "https://www.bitstamp.net/",
          id: '07',
          img: require(`@/assets/images/bitstamp.png`),
          alt: 'an image',
          title: 'BITSTAMP',
          description: 'Bitstamp is a bitcoin exchange based in Luxembourg. It allows trading between USD currency and bitcoin cryptocurrency.',
        },
        {
          url: "https://gemini.com/",
          id: '08',
          img: require(`@/assets/images/gemini.png`),
          alt: 'an image',
          title: 'GIMINI',
          description: 'Bitcoin Magazine is the oldest and most established source of news, information and expert commentary on Bitcoin, blockchain technology and the digital currency industry.',
        },
        {
          url: "https://www.bitmex.com/",
          id: '09',
          img: require(`@/assets/images/bitmex.png`),
          alt: 'an image',
          title: 'BITMEX',
          description: 'BitMEX is a Peer-to-Peer Trading Platform that offers leveraged contracts that are bought and sold in Bitcoin.',
        },
        {
          url: "https://www.bitfinex.com/",
          id: '10',
          img: require(`@/assets/images/bitfinex.png`),
          alt: 'an image',
          title: 'BITFINEX',
          description: 'Here at GeekWrapped, Our mission is to help you discover amazing products that make life better. Millions of readers trust us each year, and we’d love for you to join the party.',
        },
        {
          url: "https://www.huobi.com/en-us/",
          id: '11',
          img: require(`@/assets/images/huobi.png`),
          alt: 'an image',
          title: 'HUOBI.PRO',
          description: 'ETHNews is an emerging provider of Ethereum and Blockchain ecosystem news.',
        },
        {
          url: "https://www.kucoin.com/#/",
          id: '12',
          img: require(`@/assets/images/kucoin.png`),
          alt: 'an image',
          title: 'KUCOIN',
          description: 'Everything you need to get started with Bitcoin. Get your first Bitcoins today.',
        },
        {
          url: "https://cobinhood.com/",
          id: '13',
          img: require(`@/assets/images/cobinhood.png`),
          alt: 'an image',
          title: 'COBINHOOD',
          description: 'COBINHOOD is a next generation cryptocurrency exchange that solves the existing problems of current cryptocurrency exchanges. It provides spot trading and margin trading with ZERO fees to maximize profit and market liquidity.',
        },
        {
          url: "https://bitflyer.com/en-us",
          id: '14',
          img: require(`@/assets/images/bitflyer.png`),
          alt: 'an image',
          title: 'BITFLYE',
          description: 'Started in 2016, bitFlyer USA is headquartered in San Francisco, CA. We are a subsidiary of bitFlyer Inc., which operates the largest bitcoin exchange in the world.',
        },
        {
          url: "https://www.coinexchange.io/",
          id: '15',
          img: require(`@/assets/images/coinexchange.png`),
          alt: 'an image',
          title: 'COINEXCHANGE',
          description: 'Coinexchange.io is a virtual currency exchange aiming to support as diverse a range of altcoins as possible. Indeed, if you’re not a true crypto currency buff, you’re likely to find dozens altcoins you have never even heard of at coinexchange.io.',
		},
		{
          url: "https://yobit.net/en/",
          id: '16',
          img: require(`@/assets/images/yobit.png`),
          alt: 'an image',
          title: 'YOBIT',
          description: 'Yobit.net is a trading platform for a wide range of cryptocurrencies similar to Bitcoin. Account at Yobit.net website is completely legal and cryptocurrency trade is allowed by legislation of nearly all the countries worldwide.',
        },
        {
          url: "https://www.cryptopia.co.nz/",
          id: '17',
          img: require(`@/assets/images/cryptopia.png`),
          alt: 'an image',
          title: 'CRYPTOPIA',
          description: 'The Cryptopia exchange is a powerful currency trading platform. Deposit, trade, and withdraw Bitcoin, Litecoin, and over 400 other cryptocurrencies.',
        },
      ]
    }
  }
}
</script>

<!-- Exchanges  css 
============================================================= -->
<style scoped>

</style>
