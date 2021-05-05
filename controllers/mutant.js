const DNA = require('../models/dna');

async function checkMutant(req, res) {
  if (!req.body.dna || req.body.dna.length < 4){
    return res.sendStatus(403);
  }
  var m = req.body.dna;
  var is = await isMutant(m);
  if (is){
    try{
      const dnas = new DNA({
        dna: m,
        isMutant: true
      })
      await dnas.save();
      return res.sendStatus(200);
    } catch(err) {
      return res.satus(400).send(err);
    }
  }
  try{
    const dnas = new DNA({
      dna: m,
      isMutant: false
    })
    await dnas.save();
    return res.sendStatus(403);
  } catch(err) {
    return res.satus(400).send(err);
  }
};

async function isMutant(m){
  return verifyMatrix(m, async function(err, total){
    if (err){
      return false;
    }
    if (total > 1){
      return true;
    }
    for (let j = 0; j < m.length; j+=1) {
      total = await countSeq(m,0,j,total);
      if (total > 1){
        return true;
      }
    }
    return false;
  })
}

function verifyMatrix(m,cb){
  const cantCol = m.length;
  var totalSeq = 0;
  for (let i = 0; i < m.length; i+=1) {
    var row = m[i];
    if (row.match(/[^AGCT]/g) || m[i].length != cantCol) {
      return cb("Invalid matrix");
    }
    var sequences = row.match(/([AGCT])\1{3}/g);
    if (sequences){
      totalSeq += sequences.length;
    }
  }
  return cb(null, totalSeq);
}

async function countSeq(m,i,j,total){
  if (i + 3 > m.length - 1){
    return total;
  }
  var next = 1;
  if (m[i][j] == m[i+1][j] && m[i][j] == m[i+2][j] && m[i][j] == m[i+3][j]){
    total += 1;
    next = 4;
    if (total > 1){
      return total;
    }
  }
  if (j + 3 <= m.length - 1 && m[i][j] == m[i+1][j+1] && m[i][j] == m[i+2][j+2] && m[i][j] == m[i+3][j+3]){
    total += 1;
    next = 4;
    if (total > 1){
      return total;
    }
  }
  if (j - 3 >= 0 && m[i][j] == m[i+1][j-1] && m[i][j] == m[i+2][j-2] && m[i][j] == m[i+3][j-3]){
    total += 1;
    next = 4;
    if (total > 1){
      return total;
    }
  }
  total = await countSeq(m,i+next,j,total);

  return total;
}

module.exports = {isMutant, checkMutant}