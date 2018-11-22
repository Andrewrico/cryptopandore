<template>
  <div id="ico">
    <h1 class="label-view">ICO'S</h1>
    <ul class="@grid-ico">
      <li class="$Ecard-ico" v-for="ico in icos" :key="ico.id">
        <div class="ecard-header">
          <span class="ec-title">{{ico.title}}</span>
          <span class="ec-category">{{ico.category}}</span>
          <span class="ec-number">{{ico.id}}</span>
        </div>
        <div class="ecard-body">
          <div class="ec-description">
            <p>{{ico.description}}</p>
          </div>
          <div class="ec-info">
            <p><span class="ec-label">Plaform</span><span class="ec-text">{{ico.plaform}}</span></p>
            <p>
               <span><span class="ec-label">Start</span><span class="ec-text"> {{ico.start}}</span></span>
               <span class="ico-end"><span class="ec-label">End</span><span class="ec-text"> {{ico.end}}</span></span>
            </p>
          </div>
        </div>
        <div class="ecard-footer">
          <p class="ec-text">{{ico.status}} <i class="fa fa-award"></i> </p>
         
          <button name="learn more" type="button" class="button-action">
            <a :href="ico.url" target="_blank" class="bttn">Learn More</a>
          </button>

        </div>
      </li>
    </ul>

    <br>

    <div class="$plataform">
      <form  @submit.prevent="sendEmailAddress" class="subscribe-form">
        <div class="form-control">
          <input autocomplete="off" type="text" placeholder="Enter your email address here to subscribe to our newsletter" name="email" v-model="email">
          <button  name="Subscribe" type="input" class="button-subscribe">
            <a class="bttn"> Subscribe</a>
          </button>
        </div>
        <span v-if="feedback" class="feedback-warning">{{feedback}}</span>
      </form>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import "firebase/storage"

export default {
  name: 'ICO',
  data() {
    return {
      email: null,
      feedback: null,
      icos: [{
          title: 'Dataeum (XDT)',
          category: 'Data Collection',
          id: '01',
          description: 'Dataeum is a blockchain-based platform which uses crowdsourcing to enable the collection of 100% of all global physical data.',
          plaform: 'Etherium',
          start: 'Nov-04-2018',
          end: 'Dec-09-2018',
          status: 'Verified',
          url: 'https://dataeum.io/',
        },
        {
          title: 'LabelsCoin (LBSC)',
          category: 'Art & Music',
          id: '02',
          description: 'LabelsCoin is a single-source copyright exchange platform based on blockchain technology with associated suite of services',
          plaform: 'Etherium',
          start: 'Oct-31-2018',
          end: 'Dec-31-2018',
          status: 'Verified',
          url: 'https://www.labelscoin.io/',
        },
        {
          title: 'PlayChip (PLA)',
          category: 'Gambling',
          id: '03',
          description: 'The PlayChip is set to become the universal token for sports betting, gaming, fantasy sports, and eSports in an operating business.',
          plaform: 'PlayChip',
          start: 'Nov-21-2018',
          end: 'Nov-28-2018',
          status: 'Verified',
          url: 'https://www.playchip.global/',
        },
        {
          title: 'BitCanna (BCNA)',
          category: 'Payments',
          id: '04',
          description: 'BitCanna will provide a decentralized payment network, Supply chain and Trust network for the legal cannabis industry.',
          plaform: 'Etherium',
          start: 'Dec-25-2018',
          end: 'jan-31-2019',
          status: 'Verified',
          url: 'https://www.bitcanna.io/',
        },
      ]
    }
  },
  methods: {
    sendEmailAddress() {

      if (this.email) {

        db.collection('sendEmailAddress').add({
          email: this.email
        }).catch(err => {
          colsole.log(err)
        })

        this.email = null
        this.feedback = null


      } else {
        this.feedback = "You must enter your E-mail Address"
      }
    }
  }
}
</script>

<style scoped>
[class^="$Ecard-ico"] {
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 350px;
  max-height: 350px;
}


#ico .ecard-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 4px;
}

#ico .ecard-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'RobotoMono_LightItalic';
  color: #fff;
  width: 100%;
  border: 0;
  margin: 0;
  min-height: 80px;
}


.ec-info {
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  background: transparent;
  font-size: 0.8em;
  color: cyan;
}

.ec-info p:nth-child(2) {
  color:red!important;
}


@media screen and (min-width: 768px) {
    [class^="$Ecard-ico"] {
        min-height: 250px;
  max-height: 250px;
    }

    #ico .ecard-body {
        min-height: 120px;
        max-height: 120px;
    }
}


.ec-info p {
  display: flex;
  color: cyan;
  margin: 2px;
}

.ec-info .ico-end {
  text-indent: 8px;
}

#ico .ec-label {
  display: inline-flex;
  color: rgb(155, 240, 229);
  font-size: 1em;
  font-family: monospace;
  /* background: rgb(0, 49, 49); */
  text-transform: uppercase;
}

#ico .ec-text {
  color: aquamarine;
  font-size: 1em;
  text-indent: 6px;
  font-family: monospace;
}
#ico .ecard-footer p {
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-style: italic;
  color: rgb(155, 240, 229);
}

/* #ico .ecard-footer p:after {
  content: ' \2714';
  color: #fff;
} */

@media screen and (min-width: 368px) {
  #ico .ecard-footer {
    flex-direction: row;
    justify-content: space-around;
  }

  #ico .ecard-footer p {
    width: 40%;
    text-align: center;
  }
}


</style>


