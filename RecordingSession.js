import {Rx} from "./Rxjs.js";

class RecordingSession {

  constructor( ){
    this._isActive = false;
    this._mimeType = [
      'audio/webm',
      'audio/ogg'
    ].find(mimeType => MediaRecorder.isTypeSupported(mimeType));
    if (!this._mimeType) {
      throw new Error("couldn't find supported imeType");
    }
  }

  async start() {
    this._isActive = true;
    return Rx.Observable.create(observer => {
      navigator.mediaDevices.getUserMedia({audio: true, noiseSuppression: false}).then(audioStream => {
        this._audioStream = audioStream;
        this._mediaRecorder = new MediaRecorder(audioStream, {mimeType: this._mimeType});

        this._chunks = [];
        this._mediaRecorder.ondataavailable = e => {
          this._chunks.push(e.data);
          observer.next(e.data);
          console.log('e', e);
        };
        this.waitToStop = new Promise((_promiseResolve, _promiseReject) => {
          Object.assign(this, {_promiseResolve,_promiseReject});
        });
        this._mediaRecorder.onstop = () => {
          console.log("TODO STATE", this._mediaRecorder.state);
          this._isActive = false;
          this._promiseResolve();
        };
        this._mediaRecorder.start(100);
        window.test = this;
      }).catch(observer.error);

      this.stop = async () => {
        console.log('stopping');
        this._mediaRecorder.stop();
        await this.waitToStop;
      };

      return this.stop;
    }).subscribe(...arguments);
  }

  get isActive() {
    return this._isActive;
  }

  get blob() {
    this._ensureRecordingComplete();
    if (this.isActive) {
      throw new Error("Still recording");
    } else {
      console.log('recording is not active');
      console.log(this._mediaRecorder.state);
    }
    return new Blob(this._chunks, { type : this._mimeType});
  }

  _ensureRecordingComplete() {
    return !this.isActive && this._chunks.length;
  }

  getAudioElement() {
    this._ensureRecordingComplete();
    let audio = document.createElement('audio');
    audio.controls = true;
    audio.src = URL.createObjectURL(this.blob);
    return audio;
  }

}

export {RecordingSession};
