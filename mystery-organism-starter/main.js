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

//Task 3 
function pAequorFactory(dna, specimenNum) {
  return {
    dna,
    specimenNum,

    mutate() {
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let randomBase = returnRandBase();
      while(this.dna[randomIndex] === randomBase) {
        randomBase = returnRandBase();
      }
      this.dna[randomIndex] = randomBase;
      return this.dna;
    },

    compareDNA(pAequor) {
      let identicalBases = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]) {
          identicalBases++;
        }
      }
      const percentage = ((identicalBases / this.dna.length) * 100).toFixed(2);
      console.log(`The specimen ${this.specimenNum} and ${pAequor.specimenNum} have ${percentage} % in common.`);
    },

    willLikelySurvive() {
      let filtered = this.dna.filter((value) => value === 'C' || value === 'G')
      let percentage = ((filtered.length / this.dna.length) * 100);
      if(percentage > 60) {
        return true;
      } else {
        return false;
      }
    },

    complementStrand() {
      let complementDNA = [];
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === 'A') {
          complementDNA.push('T');
        } else if( this.dna[i] === 'T') {
          complementDNA.push('A');
        } else if( this.dna[i] === 'C') {
          complementDNA.push('G');
        } else if ( this.dna[i] === 'G') {
          complementDNA.push('C');
        } else {
          console.log('This Dna has invalid base');
        }
      }
      return complementDNA;
    }
  }
}

const survivingPAqueor = [];
let id = 1;
while(survivingPAqueor.length < 30) {
  let pAequor = pAequorFactory(mockUpStrand(), id);
  if(pAequor.willLikelySurvive()) {
    survivingPAqueor.push(pAequor); 
    id++;
  } 
}


//Testing for Task 3 (Creating the instance of pAequor of test1 and test2)
let test = pAequorFactory(mockUpStrand(), 2)
//let test2 = pAequorFactory(mockUpStrand(), 4);

//Testing for Task 4
//console.log(test);
//console.log(test.mutate());

//Test for Task 5
//console.log(test);
//console.log(test2);
//console.log(test.compareDNA(test2));

//Test for Task 6
//console.log(test.dna);
//console.log(test.willLikelySurvive());

//Test for Task 7
//console.log(survivingPAqueor);

//Test for Task 8 (AKA Extra Credit)
//console.log(test);
//console.log(test.complementStrand());










