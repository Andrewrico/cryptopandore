<template>

  <div id="consola-terminal">

    <div class="terminal-head">
      <p v-for="paragraphs in header" :key="paragraphs.id">{{paragraphs}}</p>
    </div>

    <div class="terminal-title">
      <p>{{title}}</p>
      <p>by<a title="www.andrewrico.com" :href="andrewrico" target="_blank" rel="noopener">  andrew rico </a></p>
      <p>{{into}}</p>
    </div>

    <hr class="dvr1">

    <div class="terminal-body" v-for="(paragraph, index) in body" :key="`paragraph-${index}`">
      <h3>{{paragraph.subject}}</h3>
      <p>{{paragraph.definition}}</p>
    </div>

    <hr class="dvr1">

    <div class="terminal-typer">
      <p v-for="paragraph in consola" :key="paragraph">{{paragraph}}</p>
    </div>
  </div>


</template>
<script>
export default {
  name: 'ConsolaTerminal',
  
  data() {
    return {
      andrewrico:'https://www.andrewrico.com/',

      header: [
        'Connection: Hello World!  #20180807 USFL | Cryptopandore Version 0.1',
        '[@_PWA] [@_Vue.JS] [@_Crypto] [@_WEB_3.0_Interface] [@_Blockchain_Industry]',
        'Cryptopandore C: CRYPTOPANDORE.COM'
      ],

      title: 'CRYPTOPANDORE',
      into: `Hello and Welcome to Cryptopandore, a website dedicated to the - Crypto-Space - and awesomeness of Bitcoin, Blockchain, Cryptocurrencies, Trading, ICO's, etc.`,

      body: [{
          subject: 'What is a Blockchain?',
          definition: `A blockchain is a digitized, decentralized, public ledger of all cryptocurrency transactions. Constantly growing
            as completed blocks (the most recent transactions) are recorded and added to it in chronological order, itallows market participants to keep track of digital currency transactions without central recordkeeping. Each
            node (a computer connected to the network) gets a copy of the blockchain, which is downloaded automatically.`,
        },
        {
          subject: 'What is Bitcoin?',
          definition: `Bitcoin is a digital currency created in 2009. It follows the ideas set out in a white paper by the mysterious
            Satoshi Nakamoto, whose true identity has yet to be verified. Bitcoin offers the promise of lower transaction
            fees than traditional online payment mechanisms and is operated by a decentralized authority, unlike government-issued
            currencies.`,
        },
        {
          subject: 'What is a Cryptocurrency?',
          definition: `A cryptocurrency is a digital or virtual currency that uses cryptography for security. A cryptocurrency is difficult to counterfeit because of this security feature. A defining feature of a cryptocurrency, and arguably its most endearing allure, is its organic nature; it is not issued by any central authority, rendering it theoretically immune to government interference or manipulation.`,
        },
        {
          subject: 'What Is An ICO?',
          definition: `If there's been one word on the lips of everyone in finance this past year, it's cryptocurrency. If you've been kicking yourself for not getting in on the ground floor of blockbuster coins like Bitcoin and Ethereum, you might want to consider looking into investing in an Initial Coin Offering (ICO). Be warned, however: ICOs are highly risky even under the best of circumstances, and have a high potential for scams.`,
        },
        {
          subject: 'What Is a Decentralized Market?',
          definition: `A decentralized market is a market structure that consists of a network of various technical devices that enable investors to create a marketplace without a centralized location. In a decentralized market, technology provides investors with access to various bid/ask prices and makes it possible for them to deal directly with other investors/dealers rather than with a given exchange.`,
        }
      ],
      consola: ['C:github/proxy/mitnweb.exe -h','Hosting URL: https://cryptopandore.com','Andrew-Mackbook-Pro:cryptopandore ~ $'],
    }
  }
}
</script>

<style>

.terminal-typer {
  line-height: 1.6;

}
.terminal-typer  p{
  margin:0;
}

</style>

