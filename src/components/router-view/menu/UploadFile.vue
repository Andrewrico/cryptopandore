<template>
 <div class="uploader">
    
   <input type="file" name="file" id="file" class="inputfile"  @change="uploadFile">
   <label for="file">Choose a file <i class="fa fa-upload"></i> </label>

    <div class="progress">
      <progress value="0" max="100" id="progressBar" class="progress"></progress>
    </div>
  </div>
</template>


<script>
import db from 'firebase/app'
import "firebase/storage"

export default {
  name: 'UploadFile',
  data() {
    return {
      file: ''
    }
  },
  methods: {
    
    uploadFile(event) {
      
      this.file = event.target.files[0]

      var storageRef = db.storage().ref('user_uploads/' + this.file.name)
      var upload = storageRef.put(this.file)

      upload.on('state_changed', function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        document.getElementById('progressBar').value = progress;
      })
    }
  }
}
</script>


<style scoped>

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}

.inputfile+label {
  font-size: 1.25em;
  font-weight: 700;
  color: rgba(127, 255, 212, 0.719);
  background-color: black;
  display: inline-block;
  padding: 1px 4px;
  border-radius: 2px;
  border: 1px inset cyan;
}

.inputfile+label i {
  margin-left: 4px;
}

.inputfile:focus+label,
.inputfile+label:hover {
  color: #000;
  border: 1px solid #000;
  background-color: aquamarine;
}

.inputfile+label {
  margin-left: 4px;
  cursor: pointer;
}

.inputfile:focus+label {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}

.inputfile+label * {
  pointer-events: none;
}

progress[value] {
  width: 100%;
  height: 14px;
  margin: 5px auto;
  display: block;
  -webkit-appearance: none;
  border: none;
}

progress[value]::-webkit-progress-bar {
  background-color: rgba(211, 211, 211, 0.23);
  border-radius: 50px;
  box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.2);
}

progress[value]::-webkit-progress-value {
  border-radius: 50px;
  box-shadow: inset 0 1px 1px 0 rgba(255, 255, 255, 0.5);
  background: #0cebeb;
  background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
  background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
}

</style>
