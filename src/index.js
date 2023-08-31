module.exports = function toReadable (number) {
  let wordsTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let wordsTens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let res = [];
 
  if (number === 0) return 'zero';

  if (number%100 <= 19) {
    res.unshift(wordsTwenty[number%100]);
  } else {
    res.unshift(wordsTwenty[number%10]);
    res.unshift(wordsTens[Math.floor(number/10)%10]);
  }
  if (Math.floor(number/100) > 0) { res.unshift(wordsTwenty[Math.floor(number/100)] + ' hundred'); }

  return res.join(' ').trim();
}
