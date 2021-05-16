import { connectToDatabase } from '../../../utils/mongodb';

export default async (req, res) => {
  if (req.method === 'GET') {
    const { db } = await connectToDatabase();

    const projects = await db.collection('projects').find({}).toArray();

    res.status(200).json({
      data: projects || null,
      status: 200
    });
  } else {
    res.status(404).json({
      msg: 'POST is invalid on current route'
    });
  }
};
