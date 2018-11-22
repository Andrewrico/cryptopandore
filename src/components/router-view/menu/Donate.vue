<template>
  <div id="Donate" class=" ">
    <h1 class="label-view">Donation</h1>
    <div class="@grid-menu">
      <div class="$plataform">

        <div class="paragraph">
            <p class="p-label">Your donation to Cryptopandore LLC will help us:</p><br>
            <p class="p-list">Maintain the website code on a daily basics.</p>
            <p class="p-list">Update the website with new information when is requested.</p>
            <p><b>Thank you for partnering with us spreading the message for the world!</b></p>
        </div>

        <div class="feedback-sucess">
          <vue-alert></vue-alert>
        </div>


        <div class="form-group-2">
          <span>{{bitcoin}}</span>
          <span>{{BTC}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="BTC">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{ethereum}}</span>
          <span>{{ETH}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="ETH">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{bCash}}</span>
          <span>{{BCASH}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="BCASH">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{litecoin}}</span>
          <span>{{LTC}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="LTC">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{tron}}</span>
          <span>{{TRX}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="TRX">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{basicattentiontoken}}</span>
          <span>{{BAT}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="BAT">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

        <hr class="dvr2">

        <div class="form-group-2">
          <span>{{ripple}}</span>
          <span>{{XRP}}</span>
          <button name="clipboard" title="Double Click to copy the address on the clipboard" type="button" class="button-clipboard" v-clipboard:copy="XRP">
            <a class="bttn" @click="showAlert"><i
                class="fa fa-clone"></i></a>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Donate',
  data() {
    return {
      Bitcoin: 'BTC',
      Ethereum:'ETH',
      BCash:'BCH',
      Litecoin: 'LTC',
      Tron:'TRX',
      BasicAttentionToken:'BAT',
      Ripple:'XRP',

      bitcoin: 'Bitcoin',
      ethereum:'Ethereum',
      bCash:'Bitcoin Cash',
      litecoin: 'Litecoin',
      tron:'Tron',
      basicattentiontoken:'BAT',
      ripple:'Ripple',

      BTC: '1DNBfqA3wFr12ZbYTf8KLDKLXnh9d9E9Lg',
      ETH: '0x23190441BDE4f9C3d8f89cDe467247b7dbb70330',
      BCASH: 'qqxulapeqx0mkzgpwevmlq7adfkuqfw9ryar0nfupk',
      LTC: 'LSuyndHBNWq8tfxfCUg3SpNDtcDqi18Y5B',
      TRX: 'TU5fCRUcQ26NPk3Qrj7L6r5fnQZFrsCQsh',
      BAT: '0x23190441BDE4f9C3d8f89cDe467247b7dbb70330',
      XRP: 'rpeiLGAXocWyFost4CNtaYUkitarBPgdqM'
    }
  },
  methods: {
    showAlert() {
      this.$alert.show({
        message: 'a double will to copy the address on the clipboard'
      })
    }
  }
}
</script>


<style>

</style>


