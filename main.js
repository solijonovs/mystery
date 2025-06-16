// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Below test the mockUpStrand function that uses a helper function of returnRandBase
// console.log(mockUpStrand());


//Factory function that returns an object contains the propersties corresponding to the parameters provided
const pAequorFactory = (specimenNum, dna) => {
    return {
      _specimenNum: specimenNum,
      _dna: dna,

      mutate() {
        let randomIndex = Math.floor(Math.random() * this._dna.length);
        let newBase = returnRandBase();
        while(this._dna[randomIndex] === newBase) {
          newBase = returnRandBase();
        }
        this._dna = newBase;
        return this._dna;
      },
      compareDNA(arr) {
        let identicalBases = 0 ;
        for(let i = 0; i < arr.length; i++) {
          if(this._dna === arr.dna[i]) {
            identicalBases++;
          }
        }
        const percentage = ((identicalBases/this._dna.length) * 100).toFixed(2);
        console.log(`specimen #${this.specimenNum} and specimen #${dna.specimenNum} have ${percentage}% DNA in common!`);
      },
      willLikelySurvive() {
        let identicalBases = 0;
        for(let i = 0; i < this._dna.length; i++) {
          if(this._dna[i] === 'C' || this._dna[i] === 'G') {
            identicalBases++;
          }
        }
        const percentage = ((identicalBases/this._dna.length) * 100);
        if(percentage > 60) {
          return true;
        } else {
          return false;
        }
      }

  }
}

const survivingPAqueor = [];
let id = 1;
while(survivingPAqueor.length < 30) {
  const newOrganism = pAequorFactory(id, mockUpStrand());
  if(newOrganism.willLikelySurvive()) {
    survivingPAqueor.push(newOrganism);
  }
  id++
}

console.log(survivingPAqueor);











