"use strict";
// import { NextApiRequest, NextApiResponse } from 'next'

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   // ...
//   console.log(req,res);
//   return 
// }
import { NextApiRequest, NextApiResponse } from 'next'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}
