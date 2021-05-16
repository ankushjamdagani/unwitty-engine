import { connectToDatabase } from '../../../utils/mongodb';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const { config } = JSON.parse(req.body);

    await db.collection('projects').insertOne(config);

    res.status(200).json({
      data: { slug: config.slug }
    });
  } else {
    res.status(404).json({
      msg: 'GET is invalid on current route'
    });
  }
};
