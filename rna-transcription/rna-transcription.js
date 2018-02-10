function DnaTranscriber() {
  this.dna_2_rna = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }
}

DnaTranscriber.prototype.toRna = function(dna) {
  dna_array = dna.split('')
  for( j = 0; j < dna.length; j++ ) {
    rna = this.dna_2_rna[ dna_array[j] ]
    if(rna)
      dna_array[j] = rna 
    else
      throw Error("Invalid input")
  }
  return dna_array.join('')
}

module.exports = DnaTranscriber