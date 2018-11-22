<!-- Consola html 
============================================================= -->
<template>
    <div id="consola">
      <ConsolaTerminal/>  
      <ConsoleChat/>
    </div>
</template>


<!-- Consola js 
============================================================= -->
<script>
import db from '@/firebase/init'
import moment from 'moment'
import ConsoleChat from './ConsoleChat'
import ConsolaTerminal from './ConsolaTerminal'


export default {
  name: 'Consola',
  components: {
    ConsoleChat,
    ConsolaTerminal,    
  }
}
</script>


<!-- Consola css
============================================================= -->
<style>
/*
'BigPixelLight' 
'CutiveMono'      
'digital7Mono' 
'Lekton'          
'Oslo'           
'RobotoMono_Thin'
'RobotoMono_Light'
'RobotoMono_LightItalic'    
'ShareTechMono'
'softwareTester7'
'SpaceMono'      
'telegrama'      
'VT323'
*/
#consola {
  --consola-box-shadow: 0 1px 3px rgba(11, 153, 153, 0.671), 0 1px 2px rgba(11, 153, 153, 0.582);
  /* transition: all 0.3s cubic-bezier(.25, .8, .25, 1); */
  --consola-border-radius: 4px;
  --consola-border: 3px double rgb(80, 138, 138);
  --consola-default-text-color: aquamarine;
  --consola-terminal-bg-color: #000000;
  --consola-terminal-text-color: aquamarine;
  --consola-terminal-font-size: 19px;
  --consola-terminal-head-text-color: aquamarine;
  --consola-terminal-head-font-size: 0.8em;
  --consola-terminal-head-p2-text-color: #1b1b1b;
  --consola-terminal-title-text-color: rgb(255, 255, 255);
  --consola-terminal-title-p1-decoration-color: aquamarine;
  --consola-terminal-title-p1-text-shadow-color: initial;
  --consola-chat-bg-color: #0b0c0ce6;
  --consola-chat-message-bg-color: #000000e6;
  --consola-chat-message-border: 0.5px inset cyan;
  --consola-chat-message-avatar-bg-color: rgba(17, 17, 17, 0.497);
  --consola-chat-message-avatar-border: 0.5px inset cyan;
  --consola-chat-message-userName-text-color: rgb(168, 243, 244);
  --consola-chat-message-userName-bg-color: rgba(13, 168, 148, 0.123);
  --consola-chat-message-userName-border: 3px solid rgb(168, 243, 244);
  --consola-chat-message-userName-font-size: 16px;
  --consola-chat-message-userName-text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
  --consola-chat-message-time-text-color: rgb(192, 254, 255);
  --consola-chat-message-time-font-size: 13px;
  --consola-chat-message-content-text-color: #ffffff;
  --consola-chat-message-content-font-size: 16px;
  --consola-chat-input-font-size: 16px;
  --consola-chat-input-feedback-font-size: 16px;
  --consola-chat-input-text-color: rgb(168, 243, 244);
  --consola-chat-input-feedback-text-color: rgb(255, 0, 195);
  --consola-terminal-family-font: 'RobotoMono_Light', monospace;
  --consola-terminal-head-family-font: 'Lekton', monospace;
  --consola-terminal-title-family-font: 'ShareTechMono', monospace;
  --consola-terminal-subtitle-family-font: 'RobotoMono_LightItalic', monospace;
  --consola-chat-message-userName-family-font: 'Inconsolata', monospace;
  --consola-chat-message-time-family-font: 'Overpass Mono', monospace;
  --consola-chat-message-content-family-font: 'Anonymous Pro', monospace;
  --consola-chat-input-family-font: 'Inconsolata', monospace;
  --consola-chat-input-feedback-family-font: 'RobotoMono_Light', monospace;
}
/* 
CONSOLA 
-------------------------  */
#consola {
  display: grid;
  grid-gap: 64px;
  width: 95%;
  word-spacing: 1px;
  margin: auto;
  border-radius: var(--consola-border-radius);
  color: var(--consola-default-text-color);
}

#consola-terminal {
  overflow: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 4px;
  font-family: var(--consola-terminal-family-font);
  font-size: 0.8em;
  border: var(--consola-border);
  box-shadow: var(--consola-box-shadow);
  border: 3px double rgb(0, 120, 120);
  background: var(--consola-terminal-bg-color);
  max-height: calc(100vh - 250px);
}

#consola-chat {
    
  overflow: hidden;
  border: var(--consola-border);
  box-shadow: var(--consola-box-shadow);
  background: var(--consola-chat-bg-color);

}

/****** [ 1260px ] ******/
@media screen and (min-width: 1260px) {
  #consola {
    height: 100%;
    max-height: 100%;
    width: 100%;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
  }

  #consola-terminal {
    max-height: calc(100vh - 250px);
  }

  #consola-chat {
  
    max-height: 100%;
  }
}

/* 
CONSOLA-TERMINAL
-------------------------  */
.terminal-head {
  font-family: var(--consola-terminal-head-family-font);
  font-size: var(--consola-terminal-head-font-size);
  color: var(--consola-terminal-head-text-color);
  background: #61b391;
  background: -moz-radial-gradient(center, ellipse cover, #61b391 0%, #53837d 44%, #314e57 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #61b391 0%, #53837d 44%, #314e57 100%);
  background: radial-gradient(ellipse at center, #61b391 0%, #53837d 44%, #314e57 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#61b391', endColorstr='#314e57', GradientType=1);
}

.terminal-head p {
  padding: 2px;
  margin: 0;
  text-align: left;
}

.terminal-head p:nth-child(1) {
  text-align: left;
  text-shadow: 1px 1px #000;
  -webkit-animation: colorTransition 1s infinite;
  animation: colorTransition 1s infinite;
}

.terminal-head p:nth-child(2) {
  color: var(--consola-terminal-head-p2-text-color);
  background: #cefaf3;
  background: -moz-radial-gradient(center, ellipse cover, #cefaf3 0%, #63c1b6 100%);
  background: -webkit-radial-gradient(center, ellipse cover, #cefaf3 0%, #63c1b6 100%);
  background: radial-gradient(ellipse at center, #cefaf3 0%, #63c1b6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cefaf3', endColorstr='#63c1b6', GradientType=1);
}

.terminal-title {
  color: var(--consola-terminal-title-text-color);
  font-family: var(--consola-terminal-title-family-font);
  text-align: center;
  font-weight: 100;
}

.terminal-title p:nth-child(1) {
  display: inline-flex;
  align-self: center;
  text-transform: uppercase;
  font-style: normal;
  font-size: 19px;
  letter-spacing: 3px;
  padding: 4px;
  margin: 2px;
  line-height: 1.6;
  border-bottom: 1px solid aquamarine;
  text-shadow: var(--consola-terminal-title-p1-text-shadow-color);
}

.terminal-title p:nth-child(2) {
  font-size: 0.9em;
  font-weight: 600;
  font-family: var(--consola-terminal-subtitle-family-font);
}

.terminal-title p:nth-child(3) {
  font-family: var(--consola-terminal-subtitle-family-font);
}

.terminal-body h3 {
  background: #deeeeb;
  background: -moz-linear-gradient(45deg, #deeeeb 0%, #a6d8cb 50%, #e3efed 100%);
  background: -webkit-linear-gradient(45deg, #deeeeb 0%, #a6d8cb 50%, #e3efed 100%);
  background: linear-gradient(45deg, #deeeeb 0%, #a6d8cb 50%, #e3efed 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#deeeeb', endColorstr='#e3efed', GradientType=1);
  display: inline-flex;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0px;
}

/* 
CONSOLA-CHAT
-------------------------  */
.chat-message {
  text-align: left;
  width: 100%;
  height: 100%;
 
  background: transparent;
}

.messages {
  border-bottom: 1px inset rgba(0, 255, 255, 0.408);
  box-shadow: 0 1px 1px 1px rgb(26, 79, 84);
  min-height: 150px;
  max-height: calc(100vh - 600px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0;
  margin: 0;
  
}

.messages li {
  display: flex;
  margin: 64px 16px;
  border-radius: 6px;
  font-family:'RobotoMono_Light';
  background: var(--consola-chat-message-bg-color);
  border: var(--consola-chat-message-border);
  --webkit-box-shadow: 0 10px 6px -6px rgba(7, 159, 154, 0.613);
  -moz-box-shadow: 0 10px 6px -6px rgba(7, 159, 154, 0.613);
  box-shadow: 0 10px 6px -6px rgba(7, 159, 154, 0.613);
}

.msg-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 6px;
}

.msg-avatar {
  display: block;
  width: 70px;
  height: 60px;
  margin: 8px;
  padding: 8px;
  border-radius: 64px;
  background: var(--consola-chat-message-avatar-bg-color);
  border: var(--consola-chat-message-avatar-border);
}

.message-time {
  align-self: flex-end;
  font-weight: 600;
  font-size: var(--consola-chat-message-time-font-size, 13px);
  font-family: 'softwareTester7';
  color: var(--consola-chat-message-time-text-color);
  border-left: var(--consola-chat-message-time-border);
}

.message-userName {
  text-transform: uppercase;
  text-align: left;
  font-weight: 600;
  align-self: flex-start;
  padding: 4px;
  min-width: 40%;
  color: var(--consola-chat-message-userName-text-color);
  font-size: var(--consola-chat-message-userName-font-size, 13px);
  font-family: 'Oslo';
  background: var(--consola-chat-message-userName-bg-color);
  border-left: var(--consola-chat-message-userName-border);
  text-shadow: var(--consola-chat-message-userName-text-shadow);
}

.message-content {
  font-size: 1.1em;
  text-align: left;
  align-self: flex-start;
  padding: 16px 0;
  color: var(--consola-chat-message-time-text-color);
  font-size: 16px;
  border-left: var(--consola-chat-message-content-border);
}
.message-content::first-letter {
  text-transform: uppercase;
}


.chat-input {
  overflow: auto;
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: var(--consola-chat-input-text-color, #fff);
  font-size: var(--consola-chat-input-font-size, 13px);
}

.chat-input form {
  display: flex;
  flex-direction: column;
  font-family: 'SpaceMono', monospace;
}

.chat-input label {
  margin-top: 6px;
}

.inputsCount {
  display: flex;
  align-self: flex-end;
  font-family: 'SpaceMono', monospace;
}

.button {
  margin: 8px;
  display: flex;
  align-self: flex-end;
}

.input {
  padding: 0 6px;
  color: rgb(167, 255, 255);
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgb(167, 255, 255);
  border-radius: 4px;
}

.chat-input .feedback {
  color: var(--consola-chat-input--feedback-text-color, #fff);
  font-family: 'SpaceMono', monospace;
  font-size: var(--consola-chat-input-feedback-font-size, 13px);
  font-weight: 600;
  padding: 0;
  margin: 0;
  text-shadow: 0px 0px 14px rgba(239, 0, 0, 0.805);
}

.chat-input .feedback-box {
  height: 30px;
}

</style>