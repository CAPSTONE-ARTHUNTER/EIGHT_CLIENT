export const getSpeech = (text, lng) => {
  let voices = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  };

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = setVoiceList;
  }

  const speech = (txt) => {
    console.log(lng);
    const lang = lng;
    const utterThis = new SpeechSynthesisUtterance(txt);

    utterThis.lang = lang;

    const kor_voice = voices.find(
      (elem) => elem.lang === lang || elem.lang === lang.replace("-", "_")
    );
    if (kor_voice) {
      utterThis.voice = kor_voice;
    } else {
      console.log("no voice available");
      return;
    }

    //utterance speak
    window.speechSynthesis.speak(utterThis);
  };

  speech(text);
};
