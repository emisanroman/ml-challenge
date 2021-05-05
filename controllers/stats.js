const DNA = require('../models/dna')

exports.getEstadistics = (req, res) => {
    var aggregate = [{
        $group: {
            _id: "$isMutant",
            total: {$sum: 1}
        },
    }];
    DNA.aggregate(aggregate, function(err, result){
        var count_mutant_dna = 0;
        var count_human_dna = 0;
        if(!err){
            if (result && result[0]){
                if(result[0]._id == false){
                    count_human_dna = result[0].total;
                } else {
                    count_mutant_dna = result[0].total;
                }
            }
            if (result && result[1]){
                if(result[1]._id == false){
                    count_human_dna = result[1].total;
                } else {
                    count_mutant_dna = result[1].total;
                }
            }
        }
        res.send({
            count_mutant_dna,
            count_human_dna,
            ratio: count_mutant_dna / count_human_dna
        });
    })
};