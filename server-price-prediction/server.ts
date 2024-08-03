import express, { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import csv from 'csv-parser';
import cors from 'cors'

const app = express();
const port = 3030;

const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to my server!')
  })

app.post('/predict-price',(req: Request, res: Response, next: NextFunction) => {
  const area = req.body.area
  console.log("backend console: ",req.body.area);

  const price = area * 3

  res.json({ PredictedPrice : price} )
  
})

app.post('/upload', upload.single('file'), (req: Request, res: Response, next: NextFunction) => {
  if (!req.file) {
    return res.status(400).send('File is required');
  }

  // console.log("About the file: ",req.file)

  const filePath = path.join(__dirname, req.file.path);


  //this is form 'csv-parser' to handle the csv file
  const results: any[] = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      fs.unlinkSync(filePath); // Remove the file after processing
      // console.log(results);
      res.json(  results );
    })
    .on('error', (error) => {
      fs.unlinkSync(filePath);
      next(error);
    });


});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
