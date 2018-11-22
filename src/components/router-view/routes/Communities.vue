<!-- Communities html 
============================================================= -->
<template>
  <div id="communities" class="Page">
    <h1 class="label-view">Communities</h1>
    <ul class="@grid-routes">
      <li class="$Ecard-large" v-for="item in items" :key="item.id">
        <div class="ecard-header">
         <a class="mainUrl" :href="item.mainUrl" target="_blank"> <span class="ec-title">{{item.title}}</span> </a> 
          <span class="ec-number">{{item.id}}</span>
        </div>
        <div class="ecard-body">
          <p class="ec-description">{{item.description}}</p>
        </div>
        <ul class="ecard-link-list" v-for="link in item.links" :key="link.id">
          <a class="ec-links" :href="link.url" target="_blank"> <span>{{link.title}}</span> </a>
        </ul>
      </li>
    </ul>
  </div>
</template>


<!-- Communities js 
============================================================= -->
<script>
export default {
  title: 'Communities',

  data() {
    return {
      items: [{
          mainUrl:"https://www.youtube.com/",
          title: 'YouTube',
          id: '01',
          description: 'YouTube has one of the largest crypto communities, some of the best channels are:',
          links: [{
              title: "Tone Vays",
              url: "https://www.youtube.com/channel/UCbiWJYRg8luWHnmNkJRZEnw"
            },
            {
              title: "Ivan on Tech",
              url: "https://www.youtube.com/user/LiljeqvistIvan"
            },
            {
              title: "The Modern Investor",
              url: "https://www.youtube.com/channel/UC-5HLi3buMzdxjdTdic3Aig"
            },
            {
              title: "The Chart Guys",
              url: "https://www.youtube.com/channel/UCnqZ2hx679DqRi6khRUNw2g"
            },
            {
              title: "Altcoin Buzz",
              url: "https://www.youtube.com/channel/UCGyqEtcGQQtXyUwvcy7Gmyg"
            },
            {
              title: "World Crypto Network",
              url: "https://www.youtube.com/channel/UCR9gdpWisRwnk_k23GsHfcA"
            },
            {
              title: "Coin Mastery",
              url: "https://www.youtube.com/channel/UC4nXWTjZqK4bv7feoRntSog"
            },
            {
              title: "Crypto Bobby",
              url: "https://www.youtube.com/channel/UCt_oM56Ui0BCCgi0Yc-Wh3Q"
            },
            {
              title: "Real-Crypto",
              url: "https://www.youtube.com/channel/UC93MJYEjwCW3-9ipq09k7XQ/featured"
            },
          ]
        },
        {
          mainUrl:"https://www.twitter.com/",
          title: 'Twitter',
          id: '02',
          description: 'For the best cryptocurrency information on Twitter, you can follow crypto influencers who have a significant knowledge on this issue. Some of the best that you can follow are:',
          links: [{
              title: "Andreas Antonopoulos",
              url: ""
            },
            {
              title: "Roger Ver",
              url: ""
            },
            {
              title: "Vitalik Buterin",
              url: ""
            },
            {
              title: "Nick Szabo",
              url: ""
            }
          ]
        },
        {
          mainUrl:"https://slack.com/",
          title: 'SLACK',
          id: '03',
          description: 'Let’s consider an example to understand why we need and when to use v-bind directive for data binding.',
          links: [{
              title: "Hashtag Investing",
              url: ""
            },
            {
              title: "Blockstack",
              url: ""
            },
            {
              title: "Cryptominded",
              url: ""
            },
            {
              title: "Radon",
              url: ""
            },
            {
              title: "Coinality",
              url: ""
            }
          ]
        },
        {
          mainUrl:"https://www.reddit.com/",
          title: 'REDDIT BITCOIN',
          id: '04',
          description: 'This is one of the biggest communities if you are a bitcoin investor. The participants in this group come from all across the world, and discuss everything from upcoming news, the issues affecting bitcoin, and how they can be resolved.',
          links: [{
              title: "",
              url: ""
            },
            {
              title: "",
              url: ""
            }
          ]
        },
        {
          mainUrl:"https://www.facebook.com/",
          title: 'FACEBOOK GROUPS',
          id: '05',
          description: 'Let’s consider an example to understand why we need and when to use v-bind directive for data binding.',
          links: [{
              title: "The bitcoin",
              url: ""
            },
            {
              title: "Cryptocurrency Collectors Club",
              url: ""
            }
          ]
        },
        {
          mainUrl:"https://bitcoin.org/en/",
          title: 'BITCOIN.ORG',
          id: '06',
          description: 'This is a blog that focuses on everything to do with bitcoin. What makes this blog stand out is that it acts as the official blog for bitcoin, and offers all the latest news that are related to bitcoin.',
          links: [{
              title: "",
              url: ""
            },
            {
              title: "",
              url: ""
            }
          ]
        },
        {
          mainUrl:"https://discordapp.com/",
          title: 'DISCORD',
          id: '07',
          description: 'Discord is another platform that can allow to get the latest information with regards to cryptocurrencies. There are different discord groups that can give you information with regards to cryptocurrencies.',
          links: [{
              title: "",
              url: ""
            },
            {
              title: "",
              url: ""
            }
          ]
		},
		{
          mainUrl:"https://plus.google.com/",
          title: 'GOOGLE PLUS',
          id: '08',
          description: 'The google+ bitcoin community has one of the most robust bitcoin communities in the world. By joining this community, you are guaranteed of regular updates on bitcoin and other cryptocurrency related issues.',
          links: [{
              title: "",
              url: ""
            },
            {
              title: "",
              url: ""
            }
          ]
		},
		{
          mainUrl:"https://telegram.org/",
          title: 'TELEGRAM GROUPS',
          id: '09',
          description: 'Discord is another platform that can allow to get the latest information with regards to cryptocurrencies. There are different discord groups that can give you information with regards to cryptocurrencies.',
          links: [{
              title: "TheCoinFarm group",
              url: ""
            },
            {
              title: "WhaleclubBTC",
              url: ""
			},
			{
              title: "ICOCountDown",
              url: ""
			},
			{
              title: "Cryptosignal",
              url: ""
            },
          ]
		},
		{
      mainUrl:"https://www.steemit.com/",
          title: 'STEEMIT',
          id: '10',
          description: 'Steemit is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system (Steem) for digital rewards.It is one of the faster crypto comunity.',
          links: [{
              title: "",
              url: ""
            },
            {
              title: "",
              url: ""
            }
          ]
        },
      ]
    }
  }
}
</script>

<!-- Communities css
============================================================= -->
<style scoped>
.mainUrl {
  text-transform: capitalize;
  display: inline-flex;
margin: 0;
padding: 0;
}

.mainUrl:hover {
  text-decoration: none;
 
}
.ec-title {
  font-size: 0.9em;
text-transform: uppercase;
}
  
.ec-title:hover  {
  color:rgb(15, 255, 175);
 
}
</style>