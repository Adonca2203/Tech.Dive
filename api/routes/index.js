var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

/* GET home page. */
router.get('/', function (req, res, next) {
    //Pagination Metadata
    if (!req.query.pageNumber) {
        req.query.pageNumber = 1;
    }
    if (!req.query.pageSize) {
        req.query.pageSize = 10;
    }

    res.send(examData);
});

router.post('/', function (req, res, next) {
    if (Object.keys(req.body).length === 0) {
        res.statusMessage = "No Body Given";
        res.status(400).end();
    }
    examData.push(req.body);
    res.send(examData);
});

router.put('/:id', function (req, res, next) {
    res.send("Received put request with ID: " + req.params.id);
});

router.patch('/:id', function (req, res, next) {
    res.send("Received patch request with ID: " + req.params.id);
});

router.delete('/:id', function (req, res, next) {
    res.send("Received delete request with ID: " + req.params.id);
});

module.exports = router;

class PaginationMetadata {
    TotalItemCount = 0;
    TotalPageCount = 0;
    PageSize = 0;
    CurrentPage = 0;
    constructor(totalItemCount, pageSize, currentPage) {
        this.TotalItemCount = totalItemCount;
        this.PageSize = pageSize;
        this.CurrentPage = currentPage;
        this.TotalPageCount = Math.ceil(totalItemCount / pageSize);
    }
}

examData = [
    {
        patientId: 'COVID-19-AR-16406513',
        examId: 3,
        image: 'https://via.placeholder.com/150',
        keyFindings: 'Right basilar atelectasis',
        brixiaScore: [1, 2, 3, 4],
        age: 44,
        sex: 'M',
        bmi: 33.3,
        zipCode: '722',
        date: '7-12-2000'
    },
    {
        patientId: 'COVID-19-AR-16406514',
        examId: 1,
        image: 'https://via.placeholder.com/150',
        keyFindings: 'The lungs are free of air space disease',
        brixiaScore: [1, 2, 3, 4],
        age: 49,
        sex: 'F',
        bmi: 43.85,
        zipCode: '721',
        date: '7-12-2000'
    },
    {
        patientId: 'COVID-19-AR-16406515',
        examId: 2,
        image: 'https://via.placeholder.com/150',
        keyFindings: 'Lung volume remain low but there appears to have been clearing since prior radiograph',
        brixiaScore: [1, 2, 3, 4],
        age: 75,
        sex: 'F',
        bmi: 23.57,
        zipCode: '721',
        date: '7-12-2000'
    },
]
